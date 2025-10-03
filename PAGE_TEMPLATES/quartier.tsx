import { generateLocalPageMetadata } from "@/app/_templates/LocalPage";
import LocalPage from "@/app/_templates/LocalPage";

export const metadata = generateLocalPageMetadata("toulouse/", "");

const quartierData = {
  zone: "toulouse/",
  zoneDisplay: "",
  description: "Service professionnel de déménagement dans le quartier  à toulouse",
  coverImage: "",
  stats: {
    dossiers: "",
    demenageurs: "",
    delai: ""
  },
  pourquoiMoverz: " Ce quartier prisé présente des défis spécifiques pour les déménagements : . Nos déménageurs spécialisés connaissent parfaitement ces contraintes et s'adaptent aux particularités architecturales du quartier.",
  accesStationnement: " Nos partenaires déménageurs maîtrisent les créneaux autorisés, les zones de déchargement temporaire et optimisent les horaires pour éviter les heures de pointe. Ils utilisent des véhicules adaptés aux gabarits des rues historiques.",
  destinationsFrequentes: [
    {
      href: "/toulouse-vers-paris",
      title: " → Paris",
      description: "Flux régulier depuis ce quartier prisé, accès livraison à anticiper."
    },
    {
      href: "/toulouse-vers-lyon",
      title: " → Lyon",
      description: "Axe fréquent, optimisation des créneaux de sortie."
    }
  ],
  partenaires: [
    {
      name: "Déménageur Local",
      rating: 4.5,
      reviews: 25,
      specialties: ["Expertise locale", "Service professionnel"]
    },
    {
      name: "Pink City Déménagements",
      rating: 4.5,
      reviews: 25,
      specialties: ["Expertise locale", "Service professionnel"]
    },
    {
      name: "Express Déménagements",
      rating: 4.5,
      reviews: 25,
      specialties: ["Expertise locale", "Service professionnel"]
    },
    {
      name: "Pro Déménagements",
      rating: 4.5,
      reviews: 25,
      specialties: ["Expertise locale", "Service professionnel"]
    }
  ],
  faq: [
    {
      question: "Comment gérer le stationnement à  ?",
      answer: "Nos déménageurs connaissent les créneaux autorisés et les zones de déchargement temporaire. Ils optimisent les horaires et utilisent des véhicules adaptés aux rues étroites."
    },
    {
      question: "Quelles sont les contraintes des immeubles anciens à  ?",
      answer: "Les immeubles de  ont souvent des escaliers étroits et des contraintes d'accès. Nos déménageurs s'adaptent avec du matériel spécialisé et des techniques appropriées."
    },
    {
      question: "Peut-on déménager en semaine à  ?",
      answer: "Oui, mais il faut anticiper les créneaux autorisés et éviter les heures de pointe. Nos partenaires connaissent les meilleurs horaires pour ce quartier."
    },
    {
      question: "Quels sont les tarifs pour  ?",
      answer: "Les tarifs sont majorés de 15-20% en raison des contraintes d'accès. Comptez 350-600€ pour un studio, 600-950€ pour un T2/T3."
    },
    {
      question: "Comment préparer un déménagement à  ?",
      answer: "Préparez votre inventaire en ligne et mentionnez les contraintes d'accès. Nos déménageurs vous conseilleront sur l'optimisation des créneaux et du matériel."
    },
    {
      question: "Les déménageurs connaissent-ils le quartier  ?",
      answer: "Tous nos partenaires ont une excellente connaissance de  : rues, contraintes, créneaux autorisés. Ils s'adaptent aux spécificités de ce quartier historique."
    }
  ]
};

export default function QuartierPage() {
  return <LocalPage {...quartierData} />;
}
