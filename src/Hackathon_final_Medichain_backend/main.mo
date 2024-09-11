import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Principal "mo:base/Principal";
import Text "mo:base/Text";

actor UserManagement {
    type User = {
        id: Principal;
        nom: Text;
        prenom: Text;
        motDePasseHash: Text; // Stocke un hachage SHA256 du mot de passe
        statut: Text; // "Medecin" ou "Patient"
    };

    type UsersByStatus = HashMap.HashMap<Text, HashMap.HashMap<Principal, User>>;

    let users: UsersByStatus = HashMap.HashMap<Text, HashMap.HashMap<Principal, User>>(10, Text.equal, Text.hash);

    public func register(nom: Text, prenom: Text, motDePasse: Text, statut: Text): async Result.Result<Text, Text> {
        // Validation des données
        if (nom == "" or prenom == "" or motDePasse == "" or (statut != "Medecin" and statut != "Patient")) {
            return #err("Données invalides");
        };
      
        // Hachage du mot de passe
        let motDePasseHash = Digest.sha256(Text.bytes(motDePasse));

        let caller = Principal.fromActor(this);
        let newUser: User = {
            id = caller;
            nom = nom;
            prenom = prenom;
            motDePasseHash = motDePasseHash;
            statut = statut;
        };

        let usersByStatus = users.get(statut);
        if (usersByStatus == null) {
            usersByStatus := HashMap.HashMap<Principal, User>(10, Principal.equal, Principal.hash);
            users.put(statut, usersByStatus);
        };

        usersByStatus.put(caller, newUser);
        return #ok("Utilisateur enregistré avec succès");
    };

    public query func authenticate(motDePasse: Text): async Result.Result<Text, Text> {
        let caller = Principal.fromActor(this);
        let motDePasseHash = Digest.sha256(Text.bytes(motDePasse));

        for (status and usersByStatus) in users {
            let user = usersByStatus.get(caller);
            if (user != null && user.motDePasseHash == motDePasseHash) {
                return #ok("Authentification réussie");
            };
        };
        return #err("Identifiants incorrects");
    };
    
};
};
