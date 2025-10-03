# Configuration URL Iframe IA - Template Moverz

## 🎯 Objectif
Permettre la configuration de l'URL de l'iframe IA par environnement et par ville.

## 🔧 **Méthodes de Configuration**

### **1. Variable d'Environnement (Recommandé)**
```bash
# .env.local
IFRAME_IA_URL=https://analyzer.moverz.fr
```

### **2. Données JSON par Ville**
```json
{
  "city_name": "Bordeaux",
  "iframeUrl": "https://analyzer-bordeaux.moverz.fr",
  // ... autres données
}
```

### **3. Valeur par Défaut**
```javascript
// Si aucune configuration, utilise localhost
iframeUrl = 'http://localhost:3001'
```

## 🌐 **URLs par Environnement**

### **Développement**
```bash
IFRAME_IA_URL=http://localhost:3001
```

### **Staging**
```bash
IFRAME_IA_URL=https://staging-analyzer.moverz.fr
```

### **Production**
```bash
IFRAME_IA_URL=https://analyzer.moverz.fr
```

## 🏢 **Configuration par Ville (Optionnel)**

### **URLs Spécifiques par Ville**
```json
// data/bordeaux.json
{
  "city_name": "Bordeaux",
  "iframeUrl": "https://analyzer-bordeaux.moverz.fr"
}

// data/lyon.json
{
  "city_name": "Lyon", 
  "iframeUrl": "https://analyzer-lyon.moverz.fr"
}
```

### **URL Unique pour Toutes les Villes**
```json
// Toutes les villes utilisent la même URL
{
  "city_name": "Bordeaux",
  "iframeUrl": "https://analyzer.moverz.fr"
}
```

## 🔄 **Ordre de Priorité**

1. **Données JSON** : `cityData.iframeUrl`
2. **Variable d'environnement** : `process.env.IFRAME_IA_URL`
3. **Valeur par défaut** : `http://localhost:3001`

## 📋 **Exemples d'Utilisation**

### **Développement Local**
```bash
# .env.local
IFRAME_IA_URL=http://localhost:3001
```

### **Staging**
```bash
# .env.staging
IFRAME_IA_URL=https://staging-analyzer.moverz.fr
```

### **Production**
```bash
# .env.production
IFRAME_IA_URL=https://analyzer.moverz.fr
```

## 🧪 **Test de Configuration**

### **Vérifier l'URL Générée**
```bash
# Générer un site de test
node scripts/generate-site-v2.js test

# Vérifier dans le fichier généré
grep "IFRAME_IA_URL" sites/test/app/inventaire-ia/page.tsx
```

### **Test de l'Iframe**
```javascript
// Dans la console du navigateur
const iframe = document.getElementById('moving-analyzer');
console.log('URL iframe:', iframe.src);
```

## 🚀 **Déploiement**

### **Étapes**
1. **Configurer l'URL** dans les variables d'environnement
2. **Générer les sites** avec la nouvelle URL
3. **Tester** l'iframe sur tous les environnements
4. **Déployer** les sites mis à jour

### **Script de Déploiement**
```bash
#!/bin/bash
# deploy-with-iframe.sh

# 1. Configurer l'URL
export IFRAME_IA_URL="https://analyzer.moverz.fr"

# 2. Générer tous les sites
node scripts/generate-all-sites.js

# 3. Déployer
npm run deploy-all
```

## ⚠️ **Points d'Attention**

### **Sécurité**
- **HTTPS obligatoire** en production
- **CORS configuré** sur le serveur iframe
- **CSP headers** pour autoriser l'iframe

### **Performance**
- **Cache** : Configurer le cache de l'iframe
- **CDN** : Utiliser un CDN pour l'iframe
- **Monitoring** : Surveiller les performances

### **Fallback**
```javascript
// En cas d'erreur de chargement
const handleIframeError = () => {
  console.error('Iframe IA non disponible');
  // Afficher un message d'erreur ou rediriger
};
```

## 📊 **Monitoring**

### **Métriques à Surveiller**
- **Taux de chargement** de l'iframe
- **Temps de réponse** de l'URL
- **Erreurs CORS** ou de chargement
- **Utilisation** de l'iframe par ville

### **Alertes**
```javascript
// Alert si l'iframe ne se charge pas
if (!iframe.contentWindow) {
  alert('Iframe IA non disponible');
}
```

## ✅ **Checklist de Configuration**

- [ ] URL configurée dans les variables d'environnement
- [ ] Données JSON mises à jour (si nécessaire)
- [ ] Sites générés avec la nouvelle URL
- [ ] Iframe testée sur tous les environnements
- [ ] CORS configuré sur le serveur iframe
- [ ] HTTPS activé en production
- [ ] Monitoring configuré
- [ ] Fallback en cas d'erreur

**Cette configuration permet une gestion flexible de l'URL de l'iframe !** 🚀
