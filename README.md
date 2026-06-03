# Rapport PFE — Site web GitHub Pages

Ce dossier contient une version web professionnelle du rapport PFE, générée à partir du fichier LaTeX fourni.

## Fichiers

- `index.html` : page web complète du rapport
- `assets/styles.css` : design responsive professionnel
- `assets/script.js` : recherche, mode clair/sombre, progression de lecture
- `report-source.tex` : source LaTeX originale
- `.nojekyll` : évite que GitHub Pages traite le site avec Jekyll

## Déploiement rapide sur GitHub Pages

1. Créer un nouveau dépôt GitHub, par exemple `rapport-pfe`.
2. Envoyer tous les fichiers de ce dossier à la racine du dépôt.
3. Ouvrir `Settings` → `Pages`.
4. Dans `Build and deployment`, choisir `Deploy from a branch`.
5. Choisir la branche `main` et le dossier `/root`, puis enregistrer.
6. Le site sera disponible sous une URL du type : `https://votre-utilisateur.github.io/rapport-pfe/`.

## Commandes Git possibles

```bash
git init
git add .
git commit -m "Initial commit - rapport web PFE"
git branch -M main
git remote add origin https://github.com/VOTRE-USER/rapport-pfe.git
git push -u origin main
```

## Remarque importante

Les images mentionnées dans le LaTeX ne sont pas incluses dans le fichier source. Le site affiche donc des cartes professionnelles à leur place. Pour afficher les vraies images, créez un dossier `assets/images/`, ajoutez les fichiers image, puis remplacez les blocs de figures dans `index.html` par des balises `<img>`.


## Images du rapport

Les balises `<img>` utilisent exactement les mêmes noms de fichiers que dans le rapport LaTeX.
Pour que les figures s’affichent, déposez les images à la racine du dépôt GitHub, au même niveau que `index.html`, sans changer leurs noms.

La liste complète des noms attendus est disponible dans `images-a-uploader.txt`.
Si une image manque, le site affiche automatiquement une carte indiquant le nom exact du fichier à ajouter.
