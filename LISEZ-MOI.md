# TE Cars VIP (version 2)

Application de gestion de flotte et de chauffeurs. Elle marche sur téléphone et sur ordinateur, avec ou sans internet, et n'a plus besoin de Claude.

## Ce que contient le dossier
- `index.html` : toute l'application.
- `sw.js`, `manifest.webmanifest`, icônes : installation et fonctionnement hors ligne.
- `_headers` : réglages pour Netlify et Cloudflare Pages (facultatif).

## Mettre l'application en ligne (une seule fois)
1. Allez sur un hébergeur de sites statiques gratuit : Netlify Drop, Cloudflare Pages ou GitHub Pages.
2. Déposez tout le contenu du dossier. Vous recevez une adresse en https.
3. **Gardez toujours la même adresse.** Les données sont rangées par adresse : une autre adresse = une application vide.
   (Les écrans des hébergeurs changent parfois, cherchez le bouton le plus proche.)

## Installer sur le téléphone
- Android (Chrome) : ouvrez l'adresse, menu ⋮, « Installer l'application ».
- iPhone (Safari) : bouton Partager, « Sur l'écran d'accueil ».
- Ordinateur (Chrome ou Edge) : icône « Installer » dans la barre d'adresse.
Ouvrez-la une première fois avec internet. Ensuite elle s'ouvre aussi sans internet.

## Les données et les sauvegardes
- Les données restent sur chaque appareil (base du navigateur + copie de secours). Pas de synchronisation automatique entre téléphones.
- Une sauvegarde automatique est gardée chaque jour sur l'appareil, et vous pouvez restaurer une date (Plus, Sauvegarde).
- **Exportez un fichier régulièrement** (Plus, Sauvegarde) et envoyez-le par WhatsApp ou e-mail : c'est votre vraie protection si le téléphone est perdu ou réinitialisé. L'application vous le rappelle.
- Pour passer les données sur un autre téléphone : exportez sur le premier, importez sur le second (« Fusionner » garde les deux côtés, « Remplacer tout » écrase).
- Suppression d'un élément : un bouton « Annuler » apparaît quelques secondes.
- Le code PIN bloque seulement l'ouverture de l'application. S'il est oublié, il faut vider les données du navigateur : gardez donc une sauvegarde.

## Ce que fait l'application
Accueil avec alertes (documents expirés, entretiens à faire), véhicules, chauffeurs, affectations, mouvements, entretiens, carburant et consommation, incidents, rapports de coûts imprimables en PDF, exports Excel (CSV), messages de relance WhatsApp, français et anglais, mode sombre.
