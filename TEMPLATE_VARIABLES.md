# Variables du Template Moverz

Ce document liste toutes les variables Handlebars utilisées dans le template.

## 🌍 Variables Principales

### Informations de Base
- `{{VILLE_PRINCIPALE}}` : Nom de la ville (ex: "Bordeaux", "Lyon")
- `{{VILLE_PRINCIPALE_SLUG}}` : Slug de la ville (ex: "bordeaux", "lyon")
- `{{REGION_PRINCIPALE}}` : Région (ex: "Nouvelle-Aquitaine", "Auvergne-Rhône-Alpes")
- `{{CODES_POSTAUX}}` : Codes postaux (ex: "33000-33800", "69000-69800")

### Métadonnées SEO
- `{{META_TITLE}}` : Titre SEO complet
- `{{META_DESCRIPTION}}` : Description SEO
- `{{KEYWORDS}}` : Mots-clés SEO séparés par des virgules

### Informations de Contact
- `{{CONTACT_EMAIL}}` : Email de contact
- `{{CONTACT_PHONE}}` : Téléphone de contact
- `{{CONTACT_ADDRESS}}` : Adresse de contact

### Configuration Technique
- `{{IFRAME_IA_URL}}` : URL de l'iframe d'analyse IA

### Statistiques Locales
- `{{STATS_DOSSIERS}}` : Nombre de dossiers (ex: "+120")
- `{{STATS_DEMENAGEURS}}` : Nombre de déménageurs (ex: "20")
- `{{STATS_DELAI}}` : Délai moyen (ex: "3-5")

## 🏘️ Quartiers et Zones

### Quartiers Principaux
- `{{QUARTIER_1}}` : Premier quartier (ex: "Chartrons")
- `{{QUARTIER_1_SLUG}}` : Slug du premier quartier (ex: "chartrons")
- `{{QUARTIER_2}}` : Deuxième quartier (ex: "Caudéran")
- `{{QUARTIER_2_SLUG}}` : Slug du deuxième quartier (ex: "cauderan")
- `{{QUARTIER_3}}` : Troisième quartier (ex: "Bastide")
- `{{QUARTIER_3_SLUG}}` : Slug du troisième quartier (ex: "bastide")
- `{{QUARTIER_4}}` : Quatrième quartier (ex: "Mérignac")
- `{{QUARTIER_4_SLUG}}` : Slug du quatrième quartier (ex: "merignac")
- `{{QUARTIER_5}}` : Cinquième quartier (ex: "Pessac")
- `{{QUARTIER_5_SLUG}}` : Slug du cinquième quartier (ex: "pessac")

## 🚗 Villes Proches

### Destinations Fréquentes
- `{{VILLE_PROCHE_1}}` : Première ville proche (ex: "Paris")
- `{{VILLE_PROCHE_2}}` : Deuxième ville proche (ex: "Lyon")
- `{{VILLE_PROCHE_3}}` : Troisième ville proche (ex: "Toulouse")
- `{{VILLE_PROCHE_4}}` : Quatrième ville proche (ex: "Nantes")

## 🏢 Partenaires

### Structure des Partenaires
```json
{
  "{{PARTENAIRE_1}}": {
    "name": "Nom du partenaire",
    "rating": 4.8,
    "reviews": 69,
    "specialties": ["Spécialité 1", "Spécialité 2"]
  }
}
```

## 📝 Contenu Local

### Pourquoi Moverz
- `{{POURQUOI_MOVERZ}}` : Texte expliquant pourquoi choisir Moverz dans cette ville

### Accès et Stationnement
- `{{ACCES_STATIONNEMENT}}` : Description des contraintes d'accès et stationnement

## 🔄 Utilisation

Ces variables sont remplacées lors de la génération des sites par le script `generate-site-v2.js`.

Le template Handlebars permet de créer des sites personnalisés pour chaque ville tout en gardant la même structure.
