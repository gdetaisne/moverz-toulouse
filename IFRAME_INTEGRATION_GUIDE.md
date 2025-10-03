# Guide d'Intégration Iframe IA - Template Moverz

## 🎯 Objectif
Intégrer l'iframe d'analyse IA de manière responsive et sécurisée dans tous les sites générés.

## 🚀 **Solution Recommandée par Lucie**

### **Composant React** : `MovingAnalyzer.tsx`
- **Auto-resize** : Ajustement automatique de la hauteur
- **Messages** : Communication bidirectionnelle avec l'iframe
- **Responsive** : Adaptation mobile/desktop
- **Accessibilité** : Title et fallback

### **Styles CSS** : `moving-analyzer.css`
- **Design moderne** : Gradient, ombres, animations
- **Responsive** : Media queries pour tous les écrans
- **Mode sombre** : Support du thème sombre
- **Loading** : Animation de chargement

## 📋 **Utilisation dans les Templates**

### **1. Page Principale Ville**
```tsx
import MovingAnalyzer from '@/components/MovingAnalyzer';

// Dans le JSX
<MovingAnalyzer 
  title="🤖 Analyse IA de votre déménagement à {{VILLE_PRINCIPALE}}"
  description="Estimez votre volume en 30 secondes avec l'IA"
/>
```

### **2. Page Services**
```tsx
<MovingAnalyzer 
  title="🤖 Estimation {{TYPE}} avec l'IA"
  description="Calculez le coût de votre déménagement {{TYPE}}"
/>
```

### **3. Page Quartiers**
```tsx
<MovingAnalyzer 
  title="🤖 Analyse {{QUARTIER_NOM}}"
  description="Estimez votre déménagement dans {{QUARTIER_NOM}}"
/>
```

## 🔧 **Configuration Serveur**

### **Nginx (Recommandé)**
```nginx
# Headers CORS pour iframe
add_header X-Frame-Options "ALLOWALL";
add_header Content-Security-Policy "frame-ancestors 'self' https://*.demenageur.fr";

# Cache pour l'iframe
location /iframe {
  expires 1h;
  add_header Cache-Control "public, immutable";
}
```

### **Apache (.htaccess)**
```apache
# Headers CORS
Header always set X-Frame-Options "ALLOWALL"
Header always set Content-Security-Policy "frame-ancestors 'self' https://*.demenageur.fr"
```

## 🌐 **URLs par Environnement**

### **Développement**
```tsx
src="http://localhost:3001"
```

### **Staging**
```tsx
src="https://staging-analyzer.moverz.fr"
```

### **Production**
```tsx
src="https://analyzer.moverz.fr"
```

## 📱 **Responsive Design**

### **Desktop (1200px+)**
- Hauteur : 800px
- Padding : 2rem
- Ombre : 0 8px 25px

### **Tablet (768px-1199px)**
- Hauteur : 600px
- Padding : 1rem
- Ombre : 0 6px 20px

### **Mobile (< 768px)**
- Hauteur : 500px
- Padding : 0.75rem
- Ombre : 0 4px 15px

## 🎨 **Personnalisation par Ville**

### **Variables CSS**
```css
:root {
  --analyzer-primary: #1e3a8a;
  --analyzer-secondary: #3b82f6;
  --analyzer-radius: 16px;
  --analyzer-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
```

### **Thème par Ville**
```tsx
// Bordeaux
<MovingAnalyzer 
  className="bordeaux-theme"
  title="🤖 Analyse IA Bordeaux"
/>

// Lyon
<MovingAnalyzer 
  className="lyon-theme"
  title="🤖 Analyse IA Lyon"
/>
```

## 🔒 **Sécurité**

### **CSP (Content Security Policy)**
```html
<meta http-equiv="Content-Security-Policy" 
      content="frame-src 'self' https://analyzer.moverz.fr;">
```

### **Sandbox (Optionnel)**
```tsx
<iframe
  sandbox="allow-scripts allow-same-origin allow-forms allow-camera allow-microphone"
  // ... autres props
/>
```

## 🧪 **Tests Recommandés**

### **Fonctionnels**
- [ ] Iframe se charge correctement
- [ ] Auto-resize fonctionne
- [ ] Messages bidirectionnels
- [ ] Responsive sur tous les écrans

### **Sécurité**
- [ ] CORS configuré
- [ ] CSP respecté
- [ ] Pas d'erreurs console
- [ ] HTTPS en production

### **Performance**
- [ ] Chargement rapide
- [ ] Pas de reflow
- [ ] Cache configuré
- [ ] Lazy loading (optionnel)

## 📊 **Analytics**

### **Événements à Tracker**
```javascript
// Chargement iframe
gtag('event', 'iframe_loaded', {
  'event_category': 'analyzer',
  'event_label': '{{VILLE_PRINCIPALE}}'
});

// Utilisation
gtag('event', 'analyzer_used', {
  'event_category': 'conversion',
  'event_label': '{{VILLE_PRINCIPALE}}'
});
```

## 🚀 **Déploiement**

### **Étapes**
1. **Déployer l'iframe** sur le serveur
2. **Configurer CORS** sur le serveur
3. **Mettre à jour les URLs** dans les templates
4. **Tester** sur tous les environnements
5. **Monitorer** les performances

### **Rollback**
```tsx
// Version de fallback
{process.env.NODE_ENV === 'production' ? (
  <MovingAnalyzer />
) : (
  <div className="analyzer-placeholder">
    <p>Analyseur IA temporairement indisponible</p>
  </div>
)}
```

## ✅ **Avantages de cette Solution**

- **🎨 Design professionnel** : Gradient, ombres, animations
- **📱 Responsive parfait** : Tous les écrans supportés
- **🔧 Auto-resize** : Hauteur adaptative
- **🛡️ Sécurisé** : CORS et CSP configurés
- **♿ Accessible** : Title et fallback
- **🚀 Performant** : Cache et optimisations
- **🎯 Réutilisable** : Composant modulaire

**Cette intégration transforme l'iframe en véritable atout UX !** 🚀
