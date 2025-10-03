# Guide Optimisation Mobile UX - Template Moverz

## 🎯 Objectif
Garantir une expérience mobile optimale avec des performances exceptionnelles.

## 📊 **Métriques de Performance Requises**

### **Temps de Chargement**
- **<2 secondes** sur mobile (3G)
- **<1 seconde** sur desktop (fibre)
- **First Contentful Paint (FCP)** : <1.8s
- **Largest Contentful Paint (LCP)** : <2.5s

### **Score Lighthouse**
- **Performance** : >90
- **Accessibility** : >90
- **Best Practices** : >90
- **SEO** : >90

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)** : <2.5s
- **FID (First Input Delay)** : <100ms
- **CLS (Cumulative Layout Shift)** : <0.1

## 🚀 **Optimisations Implémentées**

### **1. Images Optimisées**
```tsx
// Utilisation de Next.js Image
import Image from 'next/image';

<Image
  src="/images/hero-mobile.jpg"
  alt="Déménagement {{VILLE_PRINCIPALE}}"
  width={800}
  height={600}
  priority={true}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

**Règles :**
- **Format WebP** : Conversion automatique
- **Lazy loading** : Images hors viewport
- **Responsive** : Tailles adaptées par breakpoint
- **Compression** : Qualité 80-85%

### **2. Bundle JavaScript Optimisé**
```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}
```

**Règles :**
- **Bundle initial** : <500KB
- **Code splitting** : Lazy loading des composants
- **Tree shaking** : Suppression du code inutilisé
- **Minification** : JavaScript et CSS minifiés

### **3. CSS Optimisé**
```css
/* Utilisation de Tailwind CSS pur */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Purge CSS automatique */
/* Supprime les classes non utilisées */
```

**Règles :**
- **Purge CSS** : Suppression des classes inutilisées
- **Critical CSS** : CSS critique inline
- **Fonts** : Preload des polices critiques
- **Animations** : `will-change` pour les performances

### **4. Iframe IA Optimisée**
```tsx
// Lazy loading de l'iframe
const MovingAnalyzer = lazy(() => import('@/components/MovingAnalyzer'));

// Dans le JSX
<Suspense fallback={<IframeSkeleton />}>
  <MovingAnalyzer />
</Suspense>
```

**Règles :**
- **Lazy loading** : Chargement différé
- **Skeleton** : Placeholder pendant le chargement
- **Error boundary** : Gestion des erreurs
- **Preconnect** : Préconnexion au domaine iframe

## 📱 **Responsive Design**

### **Breakpoints Mobile-First**
```css
/* Mobile First */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### **Touch-Friendly**
```css
/* Boutons tactiles */
.button {
  min-height: 44px; /* Apple HIG */
  min-width: 44px;
  padding: 12px 24px;
}

/* Liens */
.link {
  padding: 8px 16px;
  margin: 4px;
}
```

## ⚡ **Optimisations Avancées**

### **1. Preloading Critique**
```tsx
// app/layout.tsx
<head>
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
  <link rel="preload" href="/images/hero-mobile.webp" as="image" />
  <link rel="dns-prefetch" href="https://analyzer.moverz.fr" />
</head>
```

### **2. Service Worker (PWA)**
```javascript
// public/sw.js
const CACHE_NAME = 'moverz-v1';
const urlsToCache = [
  '/',
  '/inventaire-ia',
  '/static/css/main.css',
  '/static/js/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

### **3. Compression**
```nginx
# nginx.conf
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

# Brotli (optionnel)
brotli on;
brotli_types text/plain text/css application/json application/javascript;
```

## 🧪 **Tests de Performance**

### **Outils de Test**
1. **Google PageSpeed Insights** : https://pagespeed.web.dev/
2. **Lighthouse** : Extension Chrome ou CLI
3. **WebPageTest** : https://www.webpagetest.org/
4. **GTmetrix** : https://gtmetrix.com/

### **Commandes de Test**
```bash
# Lighthouse CLI
npx lighthouse https://bordeaux-demenageur.fr --only-categories=performance

# Bundle analyzer
npm run build
npx @next/bundle-analyzer

# Core Web Vitals
npx web-vitals
```

### **Tests Automatisés**
```javascript
// tests/performance.test.js
import { test, expect } from '@playwright/test';

test('Performance mobile', async ({ page }) => {
  await page.goto('/');
  
  // Mesurer LCP
  const lcp = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        resolve(entries[entries.length - 1].startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    });
  });
  
  expect(lcp).toBeLessThan(2500);
});
```

## 📊 **Monitoring en Production**

### **Google Analytics 4**
```javascript
// Mesurer Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### **Alertes Performance**
```javascript
// Alert si performance dégradée
if (lcp > 2500) {
  gtag('event', 'performance_issue', {
    'event_category': 'performance',
    'event_label': 'lcp_slow',
    'value': lcp
  });
}
```

## 🔧 **Configuration Next.js**

### **next.config.js Optimisé**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compression
  compress: true,
  
  // Images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components', '@/lib'],
  },
  
  // Compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

## ✅ **Checklist Performance Mobile**

### **Avant Déploiement**
- [ ] **Images** : WebP, lazy loading, responsive
- [ ] **JavaScript** : Bundle <500KB, code splitting
- [ ] **CSS** : Purge, critical CSS inline
- [ ] **Fonts** : Preload, fallback
- [ ] **Iframe** : Lazy loading, error handling

### **Tests**
- [ ] **Lighthouse** : Score >90 sur mobile
- [ ] **PageSpeed** : <2s sur 3G
- [ ] **Core Web Vitals** : LCP <2.5s, FID <100ms, CLS <0.1
- [ ] **Real Device** : Test sur iPhone/Android
- [ ] **Network** : Test sur 3G/4G

### **Monitoring**
- [ ] **Analytics** : Core Web Vitals trackés
- [ ] **Alertes** : Performance dégradée
- [ ] **Dashboard** : Métriques en temps réel
- [ ] **A/B Testing** : Optimisations testées

## 🚀 **Résultats Attendus**

### **Performance**
- **Chargement** : <2s sur mobile
- **Lighthouse** : >90 sur tous les critères
- **Core Web Vitals** : Tous dans le vert
- **Bundle** : <500KB JavaScript

### **UX Mobile**
- **Navigation** : Fluide et intuitive
- **Touch** : Boutons 44px minimum
- **Scroll** : Smooth et performant
- **Images** : Chargement progressif

**Cette optimisation garantit une expérience mobile exceptionnelle !** 📱🚀
