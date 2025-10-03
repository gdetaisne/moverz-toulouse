#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import Handlebars from 'handlebars';
import chalk from 'chalk';

/**
 * Script de génération des pages locales
 * Génère automatiquement les pages spécifiques à chaque ville
 */

class LocalPagesGenerator {
  constructor(cityData) {
    this.cityData = cityData;
    this.cityName = cityData.city_name;
    this.citySlug = cityData.city_name.toLowerCase();
  }

  async generateAllPages() {
    console.log(chalk.blue(`🚀 Génération des pages locales pour ${this.cityName}...`));

    try {
      // 1. Page principale de la ville
      await this.generateVillePrincipalePage();
      
      // 2. Pages des quartiers
      await this.generateQuartiersPages();
      
      // 3. Pages des destinations
      await this.generateDestinationsPages();
      
      // 4. Pages des services locaux
      await this.generateServicesPages();

      console.log(chalk.green(`✅ Pages locales générées avec succès pour ${this.cityName}`));

    } catch (error) {
      console.error(chalk.red(`❌ Erreur lors de la génération des pages locales:`), error);
      throw error;
    }
  }

  async generateVillePrincipalePage() {
    console.log(chalk.yellow(`📄 Génération de la page principale ${this.cityName}...`));
    
    const templatePath = './PAGE_TEMPLATES/ville-principale.tsx';
    const outputPath = `./sites/${this.citySlug}/app/${this.citySlug}/page.tsx`;
    
    await this.generatePageFromTemplate(templatePath, outputPath, this.cityData);
  }

  async generateQuartiersPages() {
    if (!this.cityData.quartiers || this.cityData.quartiers.length === 0) {
      console.log(chalk.yellow(`⚠️  Aucun quartier défini pour ${this.cityName}`));
      return;
    }

    console.log(chalk.yellow(`🏘️  Génération des pages quartiers (${this.cityData.quartiers.length})...`));
    
    for (const quartier of this.cityData.quartiers) {
      const templatePath = './PAGE_TEMPLATES/quartier.tsx';
      const outputPath = `./sites/${this.citySlug}/app/${this.citySlug}/${quartier.slug}/page.tsx`;
      
      // Créer le dossier du quartier
      await fs.ensureDir(path.dirname(outputPath));
      
      // Préparer les données du quartier
      const quartierData = {
        ...this.cityData,
        QUARTIER_NOM: quartier.nom,
        QUARTIER_SLUG: quartier.slug,
        QUARTIER_DESCRIPTION: quartier.description,
        QUARTIER_CONTRAINTES: quartier.contraintes,
        QUARTIER_ACCES: quartier.acces,
        QUARTIER_IMAGE: quartier.image,
        QUARTIER_STATS_DOSSIERS: quartier.stats?.dossiers || '+20',
        QUARTIER_STATS_DEMENAGEURS: quartier.stats?.demenageurs || '8',
        QUARTIER_STATS_DELAI: quartier.stats?.delai || '3-5',
        ...quartier.partenaires
      };
      
      await this.generatePageFromTemplate(templatePath, outputPath, quartierData);
    }
  }

  async generateDestinationsPages() {
    if (!this.cityData.villes_proches || this.cityData.villes_proches.length === 0) {
      console.log(chalk.yellow(`⚠️  Aucune ville proche définie pour ${this.cityName}`));
      return;
    }

    console.log(chalk.yellow(`🚗 Génération des pages destinations (${this.cityData.villes_proches.length})...`));
    
    for (const destination of this.cityData.villes_proches) {
      const templatePath = './PAGE_TEMPLATES/destination.tsx';
      const outputPath = `./sites/${this.citySlug}/app/${this.citySlug}-vers-${destination.slug}/page.tsx`;
      
      // Créer le dossier de la destination
      await fs.ensureDir(path.dirname(outputPath));
      
      // Préparer les données de la destination
      const destinationData = {
        ...this.cityData,
        VILLE_DESTINATION: destination.nom,
        VILLE_DESTINATION_SLUG: destination.slug,
        DISTANCE_KM: destination.distance,
        TEMPS_MOYEN: destination.temps,
        PERIODE_CONSEILLEE: destination.periode,
        PRIX_STUDIO: destination.prix_studio,
        PRIX_T2: destination.prix_t2,
        PRIX_MAISON: destination.prix_maison,
        VOLUME_STUDIO: destination.volume_studio || '10-15 m³',
        VOLUME_T2: destination.volume_t2 || '20-35 m³',
        VOLUME_MAISON: destination.volume_maison || '40-80 m³',
        CONTRAINTES_DESTINATION: destination.contraintes,
        CONSEIL_1: destination.conseils?.[0] || 'Anticipez les créneaux de livraison',
        CONSEIL_2: destination.conseils?.[1] || 'Prévoyez des protections renforcées',
        CONSEIL_3: destination.conseils?.[2] || 'Vérifiez les contraintes d\'accès',
        CONSEIL_4: destination.conseils?.[3] || 'Planifiez le stationnement temporaire',
        CONSEIL_5: destination.conseils?.[4] || 'Préparez les autorisations si nécessaire',
        CONSEIL_6: destination.conseils?.[5] || 'Considérez un déménagement en semaine'
      };
      
      await this.generatePageFromTemplate(templatePath, outputPath, destinationData);
    }
  }

  async generateServicesPages() {
    const services = ['economique', 'standard', 'premium'];
    
    console.log(chalk.yellow(`🔧 Génération des pages services (${services.length})...`));
    
    for (const service of services) {
      const templatePath = './PAGE_TEMPLATES/service-local.tsx';
      const outputPath = `./sites/${this.citySlug}/app/services/demenagement-${service}-${this.citySlug}/page.tsx`;
      
      // Créer le dossier du service
      await fs.ensureDir(path.dirname(outputPath));
      
      // Préparer les données du service
      const serviceData = {
        ...this.cityData,
        SERVICE_TYPE: service,
        SERVICE_TYPE_DISPLAY: service.charAt(0).toUpperCase() + service.slice(1),
        SERVICE_DESCRIPTION: this.getServiceDescription(service),
        SERVICE_TARIFS_LOCAUX: this.getServiceTarifs(service, 'local'),
        SERVICE_TARIFS_NATIONAUX: this.getServiceTarifs(service, 'national')
      };
      
      await this.generatePageFromTemplate(templatePath, outputPath, serviceData);
    }
  }

  async generatePageFromTemplate(templatePath, outputPath, data) {
    try {
      // Lire le template
      const templateContent = await fs.readFile(templatePath, 'utf8');
      
      // Compiler avec Handlebars
      const template = Handlebars.compile(templateContent);
      const compiledContent = template(data);
      
      // Écrire le fichier généré
      await fs.writeFile(outputPath, compiledContent);
      
      console.log(chalk.gray(`  ✓ ${path.basename(outputPath)}`));
      
    } catch (error) {
      console.error(chalk.red(`  ❌ Erreur ${path.basename(outputPath)}:`), error.message);
      throw error;
    }
  }

  getServiceDescription(service) {
    const descriptions = {
      economique: `La solution la plus abordable pour déménager à ${this.cityName}. Idéale pour les étudiants et petits budgets.`,
      standard: `La formule équilibrée pour un déménagement à ${this.cityName}. Service complet à prix raisonnable.`,
      premium: `Le service haut de gamme pour un déménagement à ${this.cityName}. Confort et sérénité garantis.`
    };
    return descriptions[service] || descriptions.standard;
  }

  getServiceTarifs(service, type) {
    const tarifs = {
      economique: {
        local: { studio: '280-450€', t2: '500-800€' },
        national: { studio: '990-1320€', t2: '1980-2160€' }
      },
      standard: {
        local: { studio: '350-550€', t2: '650-950€' },
        national: { studio: '1200-1500€', t2: '2200-2500€' }
      },
      premium: {
        local: { studio: '450-700€', t2: '800-1200€' },
        national: { studio: '1500-2000€', t2: '2800-3500€' }
      }
    };
    return tarifs[service]?.[type] || tarifs.standard[type];
  }
}

// Fonction principale
async function generateLocalPages(cityData) {
  const generator = new LocalPagesGenerator(cityData);
  await generator.generateAllPages();
}

export default generateLocalPages;
