\```mermaid
erDiagram
    BRICOLEUR {
        INT id
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id
        INT bricoleur_id```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient

    }

    MESSAGE {
        INT id
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id
        INT destinataire_id
        INT devis_id
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
\```

```mermaid
erDiagram
    BRICOLEUR {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR specialite
        VARCHAR departement
    }

    PARTICULIER {
        INT id (PK)
        VARCHAR nom
        VARCHAR prenom
        VARCHAR adresse
        VARCHAR email
        VARCHAR telephone
    }

    DEVIS {
        INT id (PK)
        VARCHAR type_travaux
        TEXT description
        ENUM etat
        DATETIME date_creation
        DATETIME date_modification
        INT particulier_id (FK)
        INT bricoleur_id (FK)
    }

    MESSAGE {
        INT id (PK)
        TEXT contenu
        DATETIME date_envoi
        INT expediteur_id (FK)
        INT destinataire_id (FK)
        INT devis_id (FK)
    }

    PARTICULIER ||--o{ DEVIS : envoie
    BRICOLEUR ||--o{ DEVIS : reçoit
    DEVIS ||--o{ MESSAGE : contient
