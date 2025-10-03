# 📋 Structure des Spécifications Blog - Format YAML Standardisé

## 🎯 Objectif
Ce document définit **exactement** la structure attendue d'un fichier `blog_spec-[ville].yaml` pour la génération de contenu blog optimisé SEO avec catégorisation automatique.

## 📁 Fichier de Spécification
**Nom** : `blog_spec-[ville].yaml`  
**Emplacement** : `/data/blog_spec-[ville].yaml`  
**Format** : YAML valide avec structure stricte

## 🏗️ Structure YAML Obligatoire

```yaml
# ===========================================
# MÉTADONNÉES GÉNÉRALES (OBLIGATOIRES)
# ===========================================
city: "Nom de la ville"                    # Ex: "Bordeaux"
domain: "Nom de domaine"                   # Ex: "bordeaux-demenageur.fr"
locale: "fr-FR"                           # Locale standardisée

# ===========================================
# OVERRIDES DE CATÉGORIES (OPTIONNEL)
# ===========================================
category_overrides:                        # Map slug_article → slug_catégorie
  "prix-demenagement-[ville]": "prix-et-tarifs"
  "aide-demenagement-[ville]": "deménagement-economique"  # Si aides financières
  # Si absent → appliquer mapping par défaut

# ===========================================
# CONFIGURATION SEO GLOBALE
# ===========================================
seo_config:
  primary_keyword: "demenageur [ville]"    # Mot-clé principal
  secondary_keywords:                      # Mots-clés secondaires
    - "demenagement [ville]"
    - "devis demenagement [ville]"
    - "entreprise demenagement [ville]"
  target_density: 2.5                     # Densité cible (2-3%)
  content_length:
    pillars: "1200-1800"                  # Longueur articles piliers
    satellites: "800-1200"                # Longueur articles satellites
    faq_answers: "80-120"                 # Longueur réponses FAQ

# ===========================================
# ARTICLES À GÉNÉRER
# ===========================================
articles:
  # =========================================
  # ARTICLE PILIER 1 (OBLIGATOIRE)
  # =========================================
  - type: "pillar"
    slug: "demenageur-[ville]"            # URL de l'article
    title: "Déménageur [Ville] - Devis Gratuit sous 7 jours"
    variants:                             # Variantes du titre (col A)
      - "Déménageur professionnel [Ville]"
      - "Entreprise déménagement [Ville]"
      - "Service déménagement [Ville]"
    brief_seo: |                          # Brief SEO (col C - verbatim)
      Guide complet pour trouver le meilleur déménageur à [Ville].
      Conseils, tarifs, et démarches pour un déménagement réussi.
      Devis gratuit et sans engagement sous 7 jours.
    mots_obligatoires:                    # Mots à répéter 2-3x chacun (col D)
      - "déménageur"
      - "déménagement"
      - "devis"
      - "[ville]"
      - "professionnel"
      - "entreprise"
    category: "devis-demenagement"        # Optionnel; si absent → mapping par défaut
    tags: ["demenageur", "devis", "professionnel"]  # Optionnel (liste libre)
    priority: "high"
    internal_links:                       # Liens internes obligatoires
      - "services-demenagement-[ville]"
      - "tarifs-demenagement-[ville]"
      - "conseils-demenagement"

  # =========================================
  # ARTICLE PILIER 2
  # =========================================
  - type: "pillar"
    slug: "tarifs-demenagement-[ville]"
    title: "Tarifs Déménagement [Ville] - Prix et Coûts 2024"
    variants:
      - "Prix déménagement [Ville]"
      - "Coût déménagement [Ville]"
      - "Devis déménagement [Ville]"
    brief_seo: |
      Découvrez les tarifs déménagement à [Ville] en 2024.
      Facteurs de prix, comparatifs, et conseils pour économiser.
      Devis personnalisé gratuit.
    mots_obligatoires:
      - "tarifs"
      - "prix"
      - "coût"
      - "déménagement"
      - "[ville]"
      - "devis"
    category: "conseils"
    priority: "high"
    internal_links:
      - "demenageur-[ville]"
      - "conseils-demenagement"
      - "devis-gratuit-[ville]"

  # =========================================
  # ARTICLE SATELLITE 1
  # =========================================
  - type: "satellite"
    slug: "conseils-demenagement-[ville]"
    title: "10 Conseils Déménagement [Ville] - Guide Pratique"
    variants:
      - "Conseils déménagement [Ville]"
      - "Guide déménagement [Ville]"
      - "Astuces déménagement [Ville]"
    brief_seo: |
      Les meilleurs conseils pour réussir votre déménagement à [Ville].
      Organisation, planning, et astuces pratiques.
      Évitez les pièges courants.
    mots_obligatoires:
      - "conseils"
      - "déménagement"
      - "[ville]"
      - "guide"
      - "astuces"
      - "organisation"
    category: "conseils"
    priority: "medium"
    internal_links:
      - "demenageur-[ville]"
      - "tarifs-demenagement-[ville]"
      - "checklist-demenagement"

  # =========================================
  # ARTICLE SATELLITE 2
  # =========================================
  - type: "satellite"
    slug: "quartiers-demenagement-[ville]"
    title: "Meilleurs Quartiers [Ville] - Déménagement et Immobilier"
    variants:
      - "Quartiers [Ville] déménagement"
      - "Où déménager [Ville]"
      - "Immobilier [Ville] quartiers"
    brief_seo: |
      Découvrez les meilleurs quartiers de [Ville] pour votre déménagement.
      Prix immobilier, transports, et qualité de vie.
      Guide complet par arrondissement.
    mots_obligatoires:
      - "quartiers"
      - "[ville]"
      - "déménagement"
      - "immobilier"
      - "arrondissement"
      - "transport"
    category: "quartiers"
    priority: "medium"
    internal_links:
      - "demenageur-[ville]"
      - "tarifs-demenagement-[ville]"
      - "services-demenagement-[ville]"

  # =========================================
  # ARTICLE SATELLITE 3
  # =========================================
  - type: "satellite"
    slug: "services-demenagement-[ville]"
    title: "Services Déménagement [Ville] - Emballage et Transport"
    variants:
      - "Services déménageur [Ville]"
      - "Emballage déménagement [Ville]"
      - "Transport déménagement [Ville]"
    brief_seo: |
      Services complets de déménagement à [Ville].
      Emballage, transport, montage, et stockage.
      Devis personnalisé selon vos besoins.
    mots_obligatoires:
      - "services"
      - "déménagement"
      - "[ville]"
      - "emballage"
      - "transport"
      - "stockage"
    category: "services"
    priority: "medium"
    internal_links:
      - "demenageur-[ville]"
      - "tarifs-demenagement-[ville]"
      - "conseils-demenagement-[ville]"

# ===========================================
# CONFIGURATION FAQ GLOBALE
# ===========================================
faq_config:
  pillars_questions: 4-6                   # Nombre de questions par article pilier
  satellites_questions: 3-4                # Nombre de questions par article satellite
  answer_length: "80-120"                 # Longueur des réponses
  required_questions:                     # Questions obligatoires par type
    pillars:
      - "Combien coûte un déménagement à [ville] ?"
      - "Comment choisir un déménageur à [ville] ?"
      - "Quels sont les délais de déménagement à [ville] ?"
      - "Quels documents pour déménager à [ville] ?"
    satellites:
      - "Quand déménager à [ville] ?"
      - "Comment organiser son déménagement à [ville] ?"

# ===========================================
# CONFIGURATION LIENS INTERNES
# ===========================================
internal_linking:
  min_links_per_article: 6                # Minimum de liens par article
  max_links_per_article: 10               # Maximum de liens par article
  required_anchor_types:                  # Types d'ancres obligatoires
    - "naturelles"                        # Ancres contextuelles
    - "exactes"                          # Ancres exactes (mots-clés)
    - "partielles"                       # Ancres partielles
  link_distribution:                      # Distribution des liens
    pillar_to_pillar: 2-3                # Liens entre piliers
    pillar_to_satellite: 2-3             # Liens pilier vers satellites
    satellite_to_pillar: 2-3             # Liens satellite vers piliers
    to_services: 1-2                     # Liens vers pages services
    to_quartiers: 1-2                    # Liens vers pages quartiers

# ===========================================
# TAXONOMIE DES CATÉGORIES (FIXES)
# ===========================================
categories:
  fixed_categories:                        # 10 catégories fixes du blog
    - "deménagement-etudiant"
    - "deménagement-entreprise"
    - "prix-et-tarifs"
    - "devis-demenagement"
    - "deménagement-economique"
    - "deménagement-urgent"
    - "longue-distance"
    - "garde-meuble"
    - "international"
    - "demenagement-piano"
  
  default_mapping:                         # Mapping par défaut pilier → catégorie
    "déménagement pas cher [ville]": "deménagement-economique"
    "déménagement international [ville]": "international"
    "déménagement piano [ville]": "demenagement-piano"
    "garde meuble [ville]": "garde-meuble"
    "petit déménagement [ville]": "deménagement-etudiant"
    "aide au déménagement [ville]": "deménagement-urgent"  # Si assistance rapide
    "déménagement d'entreprise [ville]": "deménagement-entreprise"
    "déménageur [ville]": "devis-demenagement"
    "prix déménagement [ville]": "prix-et-tarifs"
    "location camion déménagement [ville]": "deménagement-economique"
  
  assignment_rules:
    - "Si category_overrides présent → prioritaire"
    - "Sinon → appliquer default_mapping"
    - "Chaque article a 1 catégorie principale (obligatoire)"
    - "Tags libres optionnels si fournis"

# ===========================================
# CONFIGURATION SCHEMA.ORG
# ===========================================
schema_config:
  article_schema: true                    # Schema Article obligatoire
  faqpage_schema: true                    # Schema FAQPage obligatoire
  breadcrumb_schema: true                 # Schema BreadcrumbList
  localbusiness_schema: true              # Schema LocalBusiness
  required_properties:                    # Propriétés obligatoires
    - "headline"
    - "description"
    - "datePublished"
    - "author"
    - "publisher"
    - "mainEntityOfPage"

# ===========================================
# VALIDATION ET CONTRÔLES
# ===========================================
validation:
  required_fields:                        # Champs obligatoires
    - "city"
    - "domain"
    - "locale"
    - "articles"
    - "seo_config"
    - "faq_config"
    - "internal_linking"
    - "schema_config"
  
  article_required_fields:                # Champs obligatoires par article
    - "type"
    - "slug"
    - "title"
    - "variants"
    - "brief_seo"
    - "mots_obligatoires"
    - "priority"
    - "internal_links"
  
  article_optional_fields:                # Champs optionnels par article
    - "category"                          # Si absent → mapping par défaut
    - "tags"                             # Liste libre optionnelle
  
  validation_rules:                       # Règles de validation
    - "Au moins 1 article pilier"
    - "Au moins 2 articles satellites"
    - "Tous les mots_obligatoires définis"
    - "Toutes les variants définies"
    - "Brief_seo non vide"
    - "Slugs uniques"
    - "Categories valides"

# ===========================================
# EXEMPLES DE VALEURS
# ===========================================
examples:
  city_examples:
    - "Bordeaux"
    - "Lyon"
    - "Marseille"
    - "Toulouse"
    - "Nantes"
  
  domain_examples:
    - "bordeaux-demenageur.fr"
    - "lyon-demenageur.fr"
    - "marseille-demenageur.fr"
    - "toulouse-demenageur.fr"
    - "nantes-demenageur.fr"
  
  category_examples:
    - "demenagement"
    - "conseils"
    - "quartiers"
    - "services"
    - "tarifs"
  
  priority_examples:
    - "high"      # Articles piliers
    - "medium"    # Articles satellites
    - "low"       # Articles secondaires

# ===========================================
# NOTES IMPORTANTES
# ===========================================
notes:
  - "Le fichier YAML doit être valide et bien formé"
  - "Tous les champs obligatoires doivent être présents"
  - "Les mots_obligatoires seront répétés 2-3x chacun dans le contenu"
  - "Toutes les variants doivent être intégrées naturellement"
  - "Le brief_seo est utilisé tel quel (col C du fichier source)"
  - "Les slugs doivent être SEO-friendly et uniques"
  - "La structure doit permettre la génération automatique"
  - "En cas d'erreur de structure, la génération s'arrête"
