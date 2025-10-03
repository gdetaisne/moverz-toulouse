# Guide Schema.org - Template Moverz

## 🎯 Objectif
Implémenter des données structurées pour améliorer les rich snippets Google, **sans présence physique locale**.

## ⚠️ **Contraintes**
- **Pas de LocalBusiness** : Risque de pénalité sans adresse réelle
- **Pas de MovingCompany** : Risque de pénalité sans présence physique
- **Focus sur** : Organization + Service + FAQPage + Review

## 🏷️ **Schema.org Recommandés**

### 1. **Organization** (Page principale)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Moverz",
  "description": "Plateforme de déménagement avec IA",
  "url": "https://www.moverz.fr",
  "logo": "https://www.moverz.fr/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "{{CONTACT_PHONE}}",
    "contactType": "customer service",
    "email": "{{CONTACT_EMAIL}}"
  },
  "sameAs": [
    "https://www.facebook.com/moverz",
    "https://www.linkedin.com/company/moverz"
  ]
}
```

### 2. **Service** (Pages services)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Déménagement {{TYPE}} à {{VILLE_PRINCIPALE}}",
  "description": "Service de déménagement {{TYPE}} dans {{VILLE_PRINCIPALE}}",
  "provider": {
    "@type": "Organization",
    "name": "Moverz"
  },
  "areaServed": {
    "@type": "City",
    "name": "{{VILLE_PRINCIPALE}}"
  },
  "offers": {
    "@type": "Offer",
    "price": "{{PRIX_INDICATIF}}",
    "priceCurrency": "EUR"
  }
}
```

### 3. **FAQPage** (Toutes les pages avec FAQ)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels sont les délais pour un déménagement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos partenaires déménageurs peuvent généralement intervenir sous 7 jours..."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se déroule l'accès au logement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos déménageurs connaissent parfaitement les contraintes locales..."
      }
    }
  ]
}
```

### 4. **Review** (Pages partenaires)
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "{{PARTENAIRE_NOM}}"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "{{PARTENAIRE_RATING}}",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Client Moverz"
  },
  "reviewBody": "Excellent service de déménagement, équipe professionnelle et efficace."
}
```

### 5. **AggregateRating** (Page principale)
```json
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "Organization",
    "name": "Moverz"
  },
  "ratingValue": "4.8",
  "reviewCount": "150",
  "bestRating": "5",
  "worstRating": "1"
}
```

## 🔧 **Implémentation dans les Templates**

### **Structure HTML**
```html
<script type="application/ld+json">
{
  // Schema JSON ici
}
</script>
```

### **Placement**
- **Page principale** : Organization + AggregateRating + FAQPage
- **Pages services** : Service + FAQPage
- **Pages quartiers** : FAQPage + Review (partenaires)
- **Pages destinations** : FAQPage

## 🚀 **Avantages Attendus**

### **Rich Snippets Possibles**
- **FAQ en accordéon** dans Google
- **Étoiles de notation** (4.8/5)
- **Informations de contact** cliquables
- **Prix des services** affichés
- **Avis clients** visibles

### **Boost SEO**
- **Meilleur CTR** : Résultats plus attractifs
- **Positionnement** : Google favorise les pages avec schema
- **Crédibilité** : Informations structurées rassurent
- **Local SEO** : Même sans LocalBusiness

## ⚠️ **Points d'Attention**

### **À Éviter**
- ❌ **LocalBusiness** : Risque de pénalité
- ❌ **MovingCompany** : Risque de pénalité
- ❌ **Fausses adresses** : Vérifiables par Google
- ❌ **Données incohérentes** : Notes/avis non réalistes

### **À Vérifier**
- ✅ **Données cohérentes** : Notes, avis, prix réalistes
- ✅ **Informations à jour** : Téléphone, email valides
- ✅ **Test Google** : Utiliser Rich Results Test
- ✅ **Validation** : Vérifier la syntaxe JSON

## 🧪 **Tests Recommandés**

### **Outils de Test**
1. **Google Rich Results Test** : https://search.google.com/test/rich-results
2. **Schema.org Validator** : https://validator.schema.org/
3. **Google Search Console** : Surveiller les erreurs

### **Validation**
- [ ] JSON valide
- [ ] Schema.org reconnu
- [ ] Rich snippets visibles
- [ ] Pas d'erreurs Google

## 📝 **Exemple Complet**

### **Page Principale Bordeaux**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Moverz",
  "description": "Plateforme de déménagement avec IA à Bordeaux",
  "url": "https://www.bordeaux-demenageur.fr",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "05 56 12 34 56",
    "contactType": "customer service"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}
</script>
```

**Cette approche maximise les rich snippets sans risquer de pénalité !** 🚀
