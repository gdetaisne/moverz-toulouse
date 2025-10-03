# Intégration Monitoring - Template Moverz

## 🎯 Objectif
Intégrer automatiquement chaque nouveau site généré dans le système de monitoring central.

## 📊 **Système de Monitoring Existant**

### **Fonctionnalités**
- **✅ Uptime** : Vérification de disponibilité
- **⚡ Performance** : Temps de réponse
- **🔍 SEO** : Meta tags, robots.txt, sitemap
- **🖼️ Iframe** : Vérification de l'application IA
- **📝 Forms** : Formulaire de contact
- **📈 Dashboard** : Interface web en temps réel

### **Base de Données**
- **PostgreSQL** : Stockage des métriques
- **Tables** : sites, metrics, alerts
- **Vue** : dashboard_summary

## 🔧 **Intégration Automatique**

### **1. Script de Génération Modifié**
```javascript
// scripts/generate-site-v2.js
import { addSiteToMonitoring } from '../monitoring/scripts/add-site.js';

// Après génération du site
await addSiteToMonitoring({
  name: cityName,
  url: `https://${cityName}-demenageur.fr`,
  city: cityData.city_name,
  pages: [
    { path: '/', name: 'Accueil', critical: true },
    { path: '/inventaire-ia', name: 'Inventaire IA', critical: true },
    { path: '/contact', name: 'Contact', critical: true }
  ]
});
```

### **2. Configuration Automatique**
```json
// monitoring/config/sites.json
{
  "sites": [
    {
      "name": "{{CITY_SLUG}}",
      "url": "https://{{CITY_SLUG}}-demenageur.fr",
      "city": "{{CITY_NAME}}",
      "pages": [
        { "path": "/", "name": "Accueil", "critical": true },
        { "path": "/inventaire-ia", "name": "Inventaire IA", "critical": true },
        { "path": "/contact", "name": "Contact", "critical": true }
      ],
      "iframe": {
        "url": "{{IFRAME_IA_URL}}",
        "selector": "iframe[src*='{{IFRAME_IA_URL}}']"
      }
    }
  ]
}
```

## 🚀 **Script d'Ajout de Site**

### **Créer le Script**
```javascript
// monitoring/scripts/add-site.js
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'moverz_monitoring',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

export async function addSiteToMonitoring(siteData) {
  try {
    // 1. Ajouter le site à la base de données
    await pool.query(`
      INSERT INTO sites (name, url, city, status)
      VALUES ($1, $2, $3, 'unknown')
      ON CONFLICT (name) DO UPDATE SET url = $2, city = $3
    `, [siteData.name, siteData.url, siteData.city]);

    // 2. Mettre à jour la configuration
    await updateSitesConfig(siteData);

    console.log(`✅ Site ${siteData.name} ajouté au monitoring`);
  } catch (error) {
    console.error(`❌ Erreur ajout site: ${error.message}`);
  }
}

async function updateSitesConfig(siteData) {
  const configPath = path.join(__dirname, '../config/sites.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Ajouter ou mettre à jour le site
  const existingIndex = config.sites.findIndex(s => s.name === siteData.name);
  if (existingIndex >= 0) {
    config.sites[existingIndex] = siteData;
  } else {
    config.sites.push(siteData);
  }
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}
```

## 📋 **Processus de Génération Complet**

### **1. Génération du Site**
```bash
node scripts/generate-site-v2.js lyon
```

### **2. Ajout au Monitoring**
```bash
# Automatique via le script de génération
# Ou manuel :
node monitoring/scripts/add-site.js lyon
```

### **3. Test du Site**
```bash
# Test rapide
node monitoring/scripts/test-lyon.js

# Test complet
npm run check
```

### **4. Dashboard**
```bash
# Démarrer le dashboard
npm run dashboard
# Disponible sur http://localhost:3001
```

## 🧪 **Tests Automatiques**

### **Test d'un Site Spécifique**
```javascript
// monitoring/scripts/test-{city}.js
const SITE_URL = 'https://{city}-demenageur.fr';

async function testSite() {
  // Test uptime
  await testUptime();
  
  // Test SEO
  await testSEO();
  
  // Test iframe
  await testIframe();
  
  // Test forms
  await testForms();
}
```

### **Tests Intégrés**
```bash
# Test tous les sites
npm run check

# Test site spécifique
node scripts/test-bordeaux.js
```

## 📊 **Métriques Collectées**

### **Uptime**
- **Disponibilité** : 99%+ requis
- **Temps de réponse** : <3s
- **Codes HTTP** : 200 OK

### **SEO**
- **Meta tags** : title, description
- **robots.txt** : Accessible
- **sitemap.xml** : Accessible

### **Iframe IA**
- **Présence** : iframe détectée
- **URL** : Correcte
- **Fonctionnalité** : Chargement OK

### **Forms**
- **Formulaire contact** : Présent
- **Fonctionnalité** : Opérationnel

## 🚨 **Alertes et Notifications**

### **Seuils d'Alerte**
```json
{
  "alert_thresholds": {
    "response_time_ms": 3000,
    "error_rate_percent": 5,
    "uptime_percent": 99
  }
}
```

### **Types d'Alertes**
- **🔴 Critique** : Site inaccessible
- **🟡 Avertissement** : Performance dégradée
- **ℹ️ Info** : Problème SEO mineur

### **Notifications Slack**
```json
{
  "slack": {
    "webhook_url": "https://hooks.slack.com/services/...",
    "channel": "#monitoring",
    "username": "Moverz Monitor"
  }
}
```

## 🔄 **Maintenance**

### **Nettoyage des Données**
```sql
-- Supprimer les métriques anciennes (>30 jours)
DELETE FROM metrics WHERE checked_at < NOW() - INTERVAL '30 days';

-- Supprimer les alertes résolues (>7 jours)
DELETE FROM alerts WHERE resolved = TRUE AND resolved_at < NOW() - INTERVAL '7 days';
```

### **Sauvegarde**
```bash
# Sauvegarde de la base de données
pg_dump -U moverz_user moverz_monitoring > backup_$(date +%Y%m%d).sql

# Sauvegarde de la configuration
tar -czf monitoring_config_$(date +%Y%m%d).tar.gz config/
```

## 📈 **Dashboard en Temps Réel**

### **Vue d'Ensemble**
- **Sites total** : Nombre de sites monitorés
- **Sites UP** : Sites fonctionnels
- **Avertissements** : Sites avec problèmes
- **Temps moyen** : Performance globale

### **Détails par Site**
- **Statut** : success/warning/error
- **Performance** : Temps de réponse
- **Uptime** : Pourcentage de disponibilité
- **Dernière vérification** : Timestamp
- **Alertes actives** : Nombre d'alertes

## ✅ **Checklist d'Intégration**

### **Génération de Site**
- [ ] Site généré avec succès
- [ ] Variables remplacées
- [ ] Tests locaux passés

### **Monitoring**
- [ ] Site ajouté à la base de données
- [ ] Configuration mise à jour
- [ ] Tests automatiques configurés
- [ ] Dashboard mis à jour

### **Validation**
- [ ] Uptime >99%
- [ ] Performance <3s
- [ ] SEO OK
- [ ] Iframe fonctionnelle
- [ ] Forms opérationnels

## 🚀 **Avantages**

### **Surveillance Continue**
- **24/7** : Monitoring permanent
- **Alertes** : Notifications immédiates
- **Historique** : Tendances de performance

### **Maintenance Proactive**
- **Détection** : Problèmes identifiés rapidement
- **Résolution** : Actions correctives automatiques
- **Prévention** : Anticipation des pannes

### **Visibilité**
- **Dashboard** : Vue d'ensemble en temps réel
- **Métriques** : Données détaillées
- **Rapports** : Historique et tendances

**Ce système garantit la fiabilité et la performance de tous les sites générés !** 🚀📊
