# 📋 Instructions de Génération de Sites - Version "Powered by Moverz"

## 🎯 Stratégie Multi-Sites "Powered by Moverz"

Cette version implémente la stratégie de branding unifié avec reconnaissance de marque Moverz tout en préservant l'identité locale de chaque site.

## 🎨 Règles de Branding & Design

### Logo et Header
- **Logo unique** : Tous les sites utilisent le même logo Moverz (`/images/logos/moverz-logo.png`)
- **Texte header** : Individuel par site (ex: "Déménageurs Bordeaux")
- **Typographie** : Poppins Bold pour le texte après le logo
- **Layout header** : Texte justifié sur 2-3 lignes, hauteur du logo
- **Espacement** : Header ultra compact (`py-0`)

### Navigation & Liens
- **Logo non-cliquable** : Le logo ne renvoie pas vers moverz.fr
- **Pas de liens croisés** : Aucun lien cliquable entre sites locaux et moverz.fr
- **CTAs uniformes** : Tous les boutons CTA mènent vers `/inventaire-ia` du site local

### Contact & Domaines
- **Email local** : `contact@[domaine-local]` (ex: `contact@bordeaux-demenageur.fr`)
- **Domaines indépendants** : Chaque site a son propre domaine local
- **Footer** : "Powered by Moverz" dans tous les footers

### Iframe & Fonctionnalités
- **Iframe powered** : L'iframe sur `/inventaire-ia` est "powered by Moverz"
- **Pas de référence IA** : Suppression de "(IA)" dans les titres et métadonnées

## 📝 Contenu & SEO

### Titres et Métadonnées
- **Titres propres** : Basés sur le nom de domaine, sans ajouts
- **Suppression "(IA)"** : Plus de référence à l'IA dans les titres
- **Métadonnées cohérentes** : Cohérentes avec le branding local

### Liens Internes
- **Tous les liens de blog** : Pointent vers le site local
- **Navigation locale** : Focus sur la ville et ses quartiers
- **CTAs uniformes** : Tous mènent vers l'inventaire local

## 🔧 Variables Template Mises à Jour

### Variables Principales
```handlebars
{{META_TITLE}}           # "Déménageurs [VILLE] - 5 devis sous 7 jours"
{{META_DESCRIPTION}}     # Description locale sans référence IA
{{DOMAINE_PRINCIPAL}}    # "https://www.[ville]-demenageur.fr"
{{VILLE_PRINCIPALE}}     # Nom de la ville
{{VILLE_PRINCIPALE_SLUG}} # Slug de la ville
{{IFRAME_IA_URL}}        # URL de l'iframe Moverz
```

### Variables Quartiers
```handlebars
{{QUARTIER_1}} à {{QUARTIER_5}}     # Noms des quartiers
{{QUARTIER_1_SLUG}} à {{QUARTIER_5_SLUG}} # Slugs des quartiers
```

### Variables Villes Proches
```handlebars
{{VILLE_PROCHE_1}} à {{VILLE_PROCHE_3}}     # Noms des villes proches
{{VILLE_PROCHE_1_SLUG}} à {{VILLE_PROCHE_3_SLUG}} # Slugs des villes proches
```

## 🚀 Processus de Génération

### 1. Création des Données de Ville (NOUVEAU)
```bash
# Générer automatiquement les données pour une nouvelle ville
node scripts/generate-city-data.js [NOM_VILLE]

# Exemple pour Nice
node scripts/generate-city-data.js Nice
# Le script pose des questions interactives et génère data/nice.json

# Questions posées par le script :
# - Région (ex: Occitanie)
# - Codes postaux (ex: 31000-31800) 
# - Titre SEO (ex: Déménagement Toulouse | Devis Gratuit)
# - Description SEO
# - Mots-clés (séparés par des virgules)
# - Email de contact
# - Téléphone de contact
# - Adresse de contact
# - Domaine (ex: https://www.toulouse-demenageur.fr)

# ⚠️ CRITIQUE : Le script génère des données FICTIVES par défaut
# Vous DEVEZ OBLIGATOIREMENT rechercher et remplacer par des données RÉELLES :
# - Quartiers RÉELS sur Google Maps
# - Partenaires RÉELS sur Google/Pages Jaunes (nom, adresse, téléphone, avis VÉRIFIÉS)
# - Destinations fréquentes RÉELLES
# - Coordonnées de contact VÉRIFIÉES et DISPONIBLES
# - Statistiques RÉELLES ou supprimées si non disponibles
# - Aucune donnée inventée n'est autorisée
```

### 2. Préparation des Données (si fichier existe déjà)
```bash
# Vérifier que le fichier JSON contient les nouvelles variables
node scripts/validate-before-generation.js [ville]
```

### 3. Génération du Site
```bash
# Générer le site avec les nouvelles règles
node scripts/generate-site-v2.js [ville]

# Exemple pour Nice (après génération des données)
node scripts/generate-site-v2.js nice

# Le script :
# - Crée le dossier sites/[ville]/
# - Copie le template complet
# - Remplace toutes les variables Handlebars
# - Installe les dépendances npm
# - Valide le site généré
```

### 4. Validation Post-Génération
```bash
# Vérifier la conformité aux nouvelles règles
node scripts/validate-generated-site-v2.js [ville]

# Le script vérifie :
# - Présence du logo Moverz
# - Header correct (nom de domaine capitalisé)
# - Variables Handlebars remplacées
# - Liens fonctionnels
# - Métadonnées SEO
# - Partenaires et zones mises à jour
```

### 5. Génération Multi-Sites
```bash
# Générer tous les sites d'un coup
node scripts/generate-all-sites-v2.js

# Génération automatisée avec gestion d'erreurs
node scripts/generate-all-sites-automated.js
```

## 📋 Checklist de Validation

### ✅ Branding Moverz
- [ ] Logo Moverz présent et cliquable (mène à l'accueil)
- [ ] Texte header sur 2-3 lignes en Poppins Bold (nom de domaine capitalisé)
- [ ] Header ultra compact (`py-0`)
- [ ] Footer avec "Powered by Moverz"
- [ ] Pas de référence "(IA)" dans les titres
- [x] Logo copié dans `/public/images/logos/moverz-logo.png` (logo officiel Moverz présent)

### ✅ Navigation & Liens
- [ ] Tous les CTAs mènent vers `/inventaire-ia`
- [ ] Pas de liens vers moverz.fr
- [ ] Navigation locale fonctionnelle
- [ ] Liens de blog pointent vers le site local
- [ ] Zones desservies mises à jour avec la ville générée
- [ ] Destinations fréquentes adaptées à la ville
- [ ] Pas de liens 404 (variables Handlebars remplacées)

### ✅ Iframe & Fonctionnalités
- [ ] Iframe "powered by Moverz" fonctionnelle
- [ ] URL iframe configurée correctement
- [ ] Suppression des références IA dans l'interface
- [ ] Badge "Moverz" visible dans l'interface

### ✅ SEO & Contenu
- [ ] Métadonnées cohérentes avec le branding local
- [ ] Titres sans référence IA
- [ ] Liens internes optimisés
- [ ] Contenu localisé correctement
- [ ] Variables Handlebars remplacées dans toutes les pages
- [ ] Références géographiques adaptées à la ville
- [ ] Partenaires locaux réels (pas de données fictives)
- [ ] FAQ avec références de ville correctes
- [ ] Services adaptés à la ville générée

## 🎯 Objectifs Stratégiques

### Reconnaissance Marque
- Construire la marque Moverz sans perdre le client local
- Badge "Powered by Moverz" visible partout
- Logo Moverz présent sur tous les sites

### SEO Local
- Optimisation pour chaque ville spécifique
- Contenu localisé et pertinent
- Pas de confusion avec d'autres marques

### Expérience Utilisateur
- Transparente, l'utilisateur reste sur le site local
- Interface cohérente avec le branding local
- Fonctionnalités identiques sur tous les sites

## 🚨 Problèmes Courants et Solutions

### ✅ Problèmes Résolus (Version 2.1)

#### 1. ✅ Logo Moverz 
**Solution** : Le logo Moverz officiel est maintenant présent dans `/template/public/images/logos/moverz-logo.png` (192x192px, redimensionné à 90x90px dans le header)

#### 2. ✅ Header conforme
**Solution** : Le nom du site est généré à partir du domaine (ex: `devis-demenageur-toulousain.fr` → "Devis", "Demenageur", "Toulousain") avec classe `poppins-font`

#### 3. ✅ Variables Handlebars remplacées
**Solution** : Le script `processFilesWithUniqueKeys()` traite tous les fichiers incluant PAGE_TEMPLATES

#### 4. ✅ Variables partenaires
**Solution** : Génération automatique de variables pour les partenaires par quartier et ville
- Variables avec quartier: `QUARTIER_1_PARTENAIRE_1_RATING`
- Variables sans quartier (templates): `QUARTIER_PARTENAIRE_1_RATING`
- Variables ville: `PARTENAIRE_1_RATING`

#### 5. ✅ Références IA supprimées
**Solution** : Toutes les références "(IA)" sont automatiquement supprimées des templates

#### 6. ✅ Structure JSX validée
**Solution** : Tous les templates ont été corrigés et validés avec TypeScript

### ⚠️ Points d'Attention

#### 1. Données réelles requises
**Important** : Les données générées par défaut sont fictives. Remplacez-les par des données réelles :
- Quartiers réels (Google Maps)
- Partenaires vérifiés (Pages Jaunes, Google Maps, avis réels)
- Destinations fréquentes depuis la ville
- Coordonnées de contact vérifiées

#### 2. Tests avant déploiement
**Obligatoire** : Tester le site localement avant déploiement
```bash
cd sites/[ville]
npm run dev
# Vérifier : http://localhost:3000
```

## 🛠️ Scripts Disponibles

### Génération
- `generate-site-v2.js` - Génération d'un site unique
- `generate-city-data.js` - **NOUVEAU** : Génération automatique des données de ville
- `generate-all-sites-v2.js` - Génération de tous les sites
- `generate-all-sites-automated.js` - Génération automatisée avec gestion d'erreurs
- `generate-site-with-repo.js` - Génération avec gestion de repository
- `generate-all-sites-with-repos.js` - Génération multi-sites avec repos
- `adapt-data-to-template.js` - Adaptation des données au format template

### Validation
- `validate-before-generation.js` - Validation avant génération
- `validate-generated-site-v2.js` - Validation post-génération

### Utilitaires
- `add-moverz-logo.js` - Ajout du logo Moverz
- `health-check.js` - Vérification de santé des sites
- `pipeline-complete.js` - Pipeline complet de génération
- `variable-mapping.js` - Mapping des variables Handlebars

## 🔄 Maintenance et Mises à Jour

### Mise à Jour du Template
1. Modifier les fichiers dans `/template/`
2. Tester avec un site de validation
3. Régénérer tous les sites existants

### 🏗️ Processus de Création d'un Nouveau Site

#### Étape 1 : Génération Automatique des Données
```bash
# Option A : Mode interactif
node scripts/generate-city-data.js [NOM_VILLE]

# Option B : Mode configuration (recommandé)
node scripts/generate-city-data.js [NOM_VILLE] config-[ville].json
```

#### Étape 2 : Remplacement des Données Fictives par des Données Réelles

**⚠️ OBLIGATOIRE** : Les données générées sont fictives. Vous DEVEZ les remplacer par des données réelles.

##### 2.1 Quartiers Réels
- **Source** : Google Maps, site officiel de la ville
- **Rechercher** : 5-8 quartiers principaux de la ville
- **Vérifier** : nom exact, slug URL, contraintes d'accès réelles
- **Éviter** : quartiers fictifs, données inventées

##### 2.2 Partenaires Vérifiés  
- **Sources** : Pages Jaunes, Google Maps, avis Google
- **Vérifier** : nom, adresse, téléphone, note Google RÉELLE, nombre d'avis VÉRIFIÉS
- **Classer** : par nombre d'avis (croissant) pour le positionnement SEO
- **Spécialités** : basées sur les vrais services proposés
- **⚠️ INTERDIT** : Inventer des données, notes, avis, adresses

##### 2.3 Destinations Fréquentes
- **Sources** : statistiques démographiques, données de migration
- **Inclure** : grandes métropoles, villes moyennes proches
- **Vérifier** : distances réelles, temps de trajet

##### 2.4 Coordonnées de Contact
- **Email** : tester que l'email fonctionne
- **Téléphone** : vérifier que le numéro répond
- **Adresse** : bureau réel ou siège social vérifiable

#### Étape 3 : Génération et Tests
```bash
# 3. Générer le site avec les données réelles
node scripts/generate-site-v2.js [ville]

# 4. Valider la génération
node scripts/validate-generated-site-v2.js [ville]

# 5. Tester localement
cd sites/[ville] && npm run dev

# 6. Vérifier sur http://localhost:3000
```

#### Étape 4 : Déploiement
```bash
# 7. Déployer sur le domaine final
# (selon votre méthode de déploiement)
```

## 🧪 Tests Intégrés

Le script de génération inclut maintenant des tests automatiques :

### Tests Pendant la Génération
- ✅ Validation de la syntaxe JSX/TSX
- ✅ Vérification des variables Handlebars remplacées
- ✅ Test de compilation TypeScript
- ✅ Test de compilation Next.js

### Tests Post-Génération
- ✅ Structure des fichiers
- ✅ Syntaxe JSX/TSX complète
- ✅ Compilation TypeScript
- ✅ Compilation Next.js
- ✅ Démarrage du serveur
- ✅ Accessibilité des pages principales

### Utilisation des Tests
```bash
# Génération avec tests intégrés
node scripts/generate-site-v2.js toulouse

# Tests complets après génération
node scripts/test-site-generation.js toulouse
```

## ⚠️ STRATÉGIE DE CORRECTION DES ERREURS

### 🚨 RÈGLE FONDAMENTALE
**JAMAIS de correction manuelle des fichiers générés !**

### 🔧 Processus de Correction
1. **Si des erreurs apparaissent** → Arrêter immédiatement
2. **Analyser le script de génération** → Identifier la source du problème
3. **Corriger le script `generate-site-v2.js`** → Modifier la logique de génération
4. **Corriger les templates** si nécessaire → Modifier les fichiers source
5. **Supprimer le site généré** → `rm -rf sites/[ville]`
6. **Régénérer proprement** → `node scripts/generate-site-v2.js [ville]`

### ❌ INTERDICTIONS
- ❌ Corriger les fichiers dans `sites/[ville]/`
- ❌ Utiliser des scripts de correction post-génération
- ❌ Modifier manuellement les fichiers générés
- ❌ Accepter des erreurs dans la génération

### ✅ OBJECTIF
**Génération parfaite dès le premier essai !**

## 🤖 PROMPT CURSOR POUR NOUVEAUX CHATS

### 📋 Prompt à copier-coller dans un nouveau chat Cursor :

```
Je veux créer un site de déménagement pour Toulouse en utilisant le système Moverz Central. 

CONTEXTE :
- Je suis dans le projet /Users/guillaumestehelin/moverz_CENTRAL-2
- Le système utilise Next.js + Handlebars pour générer des sites de déménagement
- Chaque site est adapté à une ville spécifique avec des données locales
- Le blog Toulouse existe déjà dans /blog/toulouse/ (19 articles)

OBJECTIF :
Créer le site Toulouse sur le domaine devis-demenageur-toulousain.fr

PROCÉDURE À SUIVRE :

1. **Créer les données de ville** :
   ```bash
   node scripts/generate-city-data.js toulouse
   ```
   - Répondre aux questions interactives
   - Région : Occitanie
   - Codes postaux : 31000, 31100, 31200, etc.
   - Domaine : devis-demenageur-toulousain.fr

2. **Générer le site** :
   ```bash
   node scripts/generate-site-v2.js toulouse
   ```
   - Le script inclut des tests intégrés
   - Validation JSX/TSX en temps réel
   - Test de compilation TypeScript

3. **Tests complets** :
   ```bash
   node scripts/test-site-generation.js toulouse
   ```
   - Tests de structure, syntaxe, compilation
   - Test de démarrage du serveur

4. **Lancer le serveur** :
   ```bash
   cd sites/toulouse && npm run dev
   ```

⚠️ STRATÉGIE DE CORRECTION DES ERREURS :

🚨 RÈGLE FONDAMENTALE : JAMAIS de correction manuelle des fichiers générés !

Si des erreurs apparaissent :
1. **Arrêter immédiatement**
2. **Analyser le script de génération** `generate-site-v2.js`
3. **Corriger le script de génération** (pas les fichiers générés)
4. **Corriger les templates** si nécessaire
5. **Supprimer le site généré** : `rm -rf sites/toulouse`
6. **Régénérer proprement** : `node scripts/generate-site-v2.js toulouse`

❌ INTERDICTIONS :
- Corriger les fichiers dans `sites/toulouse/`
- Utiliser des scripts de correction post-génération
- Modifier manuellement les fichiers générés
- Accepter des erreurs dans la génération

✅ OBJECTIF : Génération parfaite dès le premier essai !

IMPORTANT :
- Les données générées seront FICTIVES par défaut
- Il faudra les remplacer par des données RÉELLES de Toulouse
- Le blog est déjà créé et doit être préservé
- Le site doit respecter l'identité Moverz (logo, "Powered by Moverz")

COMMENCE PAR L'ÉTAPE 1 et suis la procédure étape par étape.
```

### 🔄 Pour d'autres villes :
Remplacer "toulouse" par le nom de la ville souhaitée dans toutes les commandes.

## 📊 Monitoring

### Métriques Clés
- **Branding** : Présence du logo Moverz et badge "Powered by Moverz"
- **Navigation** : Tous les CTAs mènent vers l'inventaire local
- **SEO** : Métadonnées cohérentes et sans référence IA
- **Fonctionnalités** : Iframe fonctionnelle sur tous les sites

### Alertes
- Absence du logo Moverz
- Liens cassés vers l'inventaire local
- Références IA dans les titres
- Iframe non fonctionnelle

---

**Note** : Ces instructions garantissent une stratégie cohérente pour tous les sites générés tout en préservant l'identité locale et en construisant la reconnaissance de marque Moverz.
