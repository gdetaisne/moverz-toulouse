import { generateLocalPageMetadata } from "@/app/_templates/LocalPage";
import LocalPage from "@/app/_templates/LocalPage";

export const metadata = generateLocalPageMetadata("toulouse", "toulouse");

const villePrincipaleData = {
  zone: "toulouse",
  zoneDisplay: "toulouse",
  description: "Service professionnel de déménagement dans le centre de toulouse",
  stats: {
    dossiers: "+150",
    demenageurs: "25",
    delai: "3-5"
  },
  pourquoiMoverz: "toulouse se classe en tête des villes françaises où il fait bon vivre en famille avec une note de 19/20 selon Le Figaro. Notre équipe d'experts déménageurs connaît parfaitement les spécificités de la ville : rues étroites du centre historique, contraintes de stationnement, immeubles anciens avec escaliers. Nous vous accompagnons dans votre projet de déménagement avec des déménageurs locaux certifiés qui maîtrisent les accès et les particularités de chaque quartier toulouse.",
  accesStationnement: "toulouse présente des défis spécifiques pour les déménagements : rues étroites dans le centre historique, stationnement limité, immeubles anciens avec escaliers. Nos partenaires déménageurs connaissent parfaitement les créneaux autorisés, les zones de déchargement et les contraintes de circulation. Ils s'adaptent aux gabarits de camions selon les rues et optimisent les horaires pour éviter les embouteillages.",
  destinationsFrequentes: [
    {
      href: "/toulouse-vers-paris",
      title: "toulouse → Paris",
      description: "Flux régulier, accès livraison à anticiper (créneaux)."
    },
    {
      href: "/toulouse-vers-lyon",
      title: "toulouse → Lyon",
      description: "Longue distance, optimisation du volume recommandée."
    },
    {
      href: "/toulouse-vers-bordeaux",
      title: "toulouse → Bordeaux",
      description: "Axe fréquent, stationnement à l'arrivée à planifier."
    },
    {
      href: "/toulouse-vers-",
      title: "toulouse → ",
      description: "Accès centre-ville selon zones, créneau conseillé."
    }
  ],
  partenaires: [
    {
      name: "Déménagement Express Toulouse",
      rating: 4.6,
      reviews: 127,
      specialties: ["Déménagements express", "Service 24h/24"]
    },
    {
      name: "Allo Déménageurs Toulouse",
      rating: 4.4,
      reviews: 89,
      specialties: ["Déménagements locaux", "Montage mobilier"]
    },
    {
      name: "Pink City Déménagements",
      rating: 4.3,
      reviews: 67,
      specialties: ["Déménagements longue distance", "Emballage professionnel"]
    },
    {
      name: "Toulouse Transport Plus",
      rating: 4.2,
      reviews: 45,
      specialties: ["Mobilier lourd", "Équipements spécialisés"]
    },
    {
      name: "Movers Expert Toulouse",
      rating: 4.1,
      reviews: 32,
      specialties: ["Déménagements étudiants", "Services premium"]
    },
    {
      name: "Transport Plus Toulouse",
      rating: 4,
      reviews: 18,
      specialties: ["Déménagements économiques", "Service personnalisé"]
    }
  ],
  faq: [
    {
      question: "Quels sont les délais pour un déménagement à toulouse ?",
      answer: "Nos partenaires déménageurs à toulouse peuvent généralement intervenir sous 7 jours. Pour les déménagements urgents, certains peuvent se libérer en 48h selon la période."
    },
    {
      question: "Comment se déroule l'accès au logement à toulouse ?",
      answer: "Nos déménageurs connaissent parfaitement les contraintes toulouse : rues étroites, stationnement limité, immeubles anciens. Ils s'adaptent aux créneaux autorisés et optimisent les horaires."
    },
    {
      question: "Quels sont les tarifs pour un déménagement à toulouse ?",
      answer: "Les tarifs varient selon le volume, la distance et les contraintes d'accès. Comptez 300-500€ pour un studio, 500-800€ pour un T2/T3, 800-1500€ pour une maison."
    },
    {
      question: "Les déménageurs sont-ils assurés ?",
      answer: "Tous nos partenaires déménageurs à toulouse sont certifiés et assurés. Nous vérifions régulièrement leur couverture d'assurance et leur qualité de service."
    },
    {
      question: "Peut-on déménager le week-end à toulouse ?",
      answer: "Oui, la plupart de nos partenaires proposent des créneaux week-end. Les tarifs peuvent être majorés de 20-30% selon les prestations."
    },
    {
      question: "Comment préparer mon déménagement à toulouse ?",
      answer: "Préparez votre inventaire en ligne en 30 minutes. Nos déménageurs vous conseilleront sur l'emballage, les créneaux optimaux et les contraintes spécifiques à votre quartier."
    }
  ]
};

export default function VillePrincipalePage() {
  return <LocalPage {...villePrincipaleData} />;
}
