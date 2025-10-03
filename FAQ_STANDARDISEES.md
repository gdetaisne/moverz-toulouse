# FAQ Standardisées - Template Moverz

## 🎯 Principe
Les FAQ sont **identiques** entre tous les sites pour simplifier la maintenance et éviter la duplication de contenu.

## 📋 FAQ par Type de Page

### 1. **Page Principale Ville** (6 questions)

```json
{
  "faq": [
    {
      "question": "Quels sont les délais pour un déménagement ?",
      "answer": "Nos partenaires déménageurs peuvent généralement intervenir sous 7 jours. Pour les déménagements urgents, certains peuvent se libérer en 48h selon la période."
    },
    {
      "question": "Comment se déroule l'accès au logement ?",
      "answer": "Nos déménageurs connaissent parfaitement les contraintes locales : rues étroites, stationnement limité, immeubles anciens. Ils s'adaptent aux créneaux autorisés et optimisent les horaires."
    },
    {
      "question": "Quels sont les tarifs pour un déménagement ?",
      "answer": "Les tarifs varient selon le volume, la distance et les contraintes d'accès. Comptez 300-500€ pour un studio, 500-800€ pour un T2/T3, 800-1500€ pour une maison."
    },
    {
      "question": "Les déménageurs sont-ils assurés ?",
      "answer": "Tous nos partenaires déménageurs sont certifiés et assurés. Nous vérifions régulièrement leur couverture d'assurance et leur qualité de service."
    },
    {
      "question": "Peut-on déménager le week-end ?",
      "answer": "Oui, la plupart de nos partenaires proposent des créneaux week-end. Les tarifs peuvent être majorés de 20-30% selon les prestations."
    },
    {
      "question": "Comment préparer mon déménagement ?",
      "answer": "Préparez votre inventaire en ligne en 30 minutes. Nos déménageurs vous conseilleront sur l'emballage, les créneaux optimaux et les contraintes spécifiques à votre quartier."
    }
  ]
}
```

### 2. **Pages Quartiers** (6 questions)

```json
{
  "faq": [
    {
      "question": "Comment gérer le stationnement dans ce quartier ?",
      "answer": "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire. Ils optimisent les horaires et utilisent des véhicules adaptés aux rues étroites."
    },
    {
      "question": "Quelles sont les contraintes des immeubles anciens ?",
      "answer": "Les immeubles anciens ont souvent des escaliers étroits et des contraintes d'accès. Nos déménageurs s'adaptent avec du matériel spécialisé et des techniques appropriées."
    },
    {
      "question": "Peut-on déménager en semaine dans ce quartier ?",
      "answer": "Oui, mais il faut anticiper les créneaux autorisés et éviter les heures de pointe. Nos partenaires connaissent les meilleurs horaires pour ce quartier."
    },
    {
      "question": "Quels sont les tarifs pour ce quartier ?",
      "answer": "Les tarifs sont majorés de 15-20% en raison des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
    },
    {
      "question": "Comment préparer un déménagement dans ce quartier ?",
      "answer": "Préparez votre inventaire en ligne et mentionnez les contraintes d'accès. Nos déménageurs vous conseilleront sur l'optimisation des créneaux et du matériel."
    },
    {
      "question": "Les déménageurs connaissent-ils ce quartier ?",
      "answer": "Tous nos partenaires ont une excellente connaissance du quartier : rues, contraintes, créneaux autorisés. Ils s'adaptent aux spécificités de ce quartier historique."
    }
  ]
}
```

### 3. **Pages Destinations** (4 questions)

```json
{
  "faq": [
    {
      "question": "Quels sont les délais pour ce trajet ?",
      "answer": "Nos partenaires déménageurs peuvent généralement intervenir sous 7 jours. Pour les déménagements urgents, certains peuvent se libérer en 48h selon la période."
    },
    {
      "question": "Comment gérer les contraintes à l'arrivée ?",
      "answer": "Nos déménageurs connaissent parfaitement les contraintes de destination : créneaux autorisés, zones de déchargement, contraintes de circulation. Ils s'adaptent aux spécificités de chaque zone."
    },
    {
      "question": "Quels sont les tarifs pour ce trajet ?",
      "answer": "Les tarifs varient selon le volume et les contraintes d'accès. Comptez 800-1200€ pour un studio, 1200-1800€ pour un T2/T3, 1800-3000€ pour une maison."
    },
    {
      "question": "Peut-on déménager le week-end vers cette destination ?",
      "answer": "Oui, mais les créneaux sont limités et les tarifs majorés de 20-30%. Il est recommandé de privilégier la semaine pour éviter les embouteillages."
    }
  ]
}
```

### 4. **Pages Services** (4 questions)

```json
{
  "faq": [
    {
      "question": "Pourquoi choisir cette formule ?",
      "answer": "Cette formule est adaptée à vos besoins et à votre budget. Elle offre le meilleur rapport qualité-prix pour votre type de déménagement."
    },
    {
      "question": "Quels sont les tarifs de cette formule ?",
      "answer": "Les tarifs varient selon la distance et les contraintes d'accès. Consultez notre grille tarifaire ou demandez un devis personnalisé gratuit."
    },
    {
      "question": "Comment se déroule cette formule ?",
      "answer": "Notre processus est simple : inventaire en ligne, devis personnalisé, planification, déménagement par nos partenaires certifiés."
    },
    {
      "question": "Peut-on personnaliser cette formule ?",
      "answer": "Oui, vous pouvez ajouter des services complémentaires comme l'emballage d'objets fragiles ou le démontage de meubles. Ces options sont facturées en supplément."
    }
  ]
}
```

## 🔧 Implémentation

### **Dans les Templates**
Les FAQ sont **hardcodées** dans les templates, pas dans les données JSON.

### **Avantages**
- ✅ **Simplicité** : Pas de gestion de données FAQ
- ✅ **Cohérence** : Même expérience utilisateur partout
- ✅ **Maintenance** : Une seule source de vérité
- ✅ **Pas de duplicate content** : Contenu identique = pas de pénalité

### **Inconvénients**
- ❌ **Moins de personnalisation** locale
- ❌ **Moins de SEO local** sur les questions

## 📝 Utilisation

Les FAQ sont directement intégrées dans les templates Handlebars et ne nécessitent aucune variable de remplacement.

**Les FAQ restent identiques entre tous les sites générés.**
