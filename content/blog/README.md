# Blog Content - Template

Ce dossier contiendra les articles de blog spécifiques à chaque ville.

## Structure attendue

```
content/blog/
├── [category]/
│   └── [slug].md
```

## Variables à utiliser dans les articles

- `{{VILLE_PRINCIPALE}}` : Nom de la ville
- `{{REGION_PRINCIPALE}}` : Région
- `{{CODES_POSTAUX}}` : Codes postaux

## Exemple d'article

```markdown
---
title: "Prix d'un déménagement à {{VILLE_PRINCIPALE}} : guide complet 2025"
slug: "prix-demenagement-{{VILLE_PRINCIPALE}}-guide-2025"
description: "Découvrez les prix moyens d'un déménagement à {{VILLE_PRINCIPALE}} selon volume, distance et accès."
date: "2025-01-15"
category: "prix"
---

# Prix d'un déménagement à {{VILLE_PRINCIPALE}}

Contenu de l'article...
```
