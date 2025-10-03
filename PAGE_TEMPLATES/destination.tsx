import { generateCorridorPageMetadata } from "@/app/_templates/CorridorPage";
import CorridorPage from "@/app/_templates/CorridorPage";

export const metadata = generateCorridorPageMetadata("");

const destinationData = {
  destination: "",
  distance: " km",
  tempsMoyen: "",
  periodeConseillee: "",
  prixIndicatifs: [
    {
      type: "Studio/T1",
      prix: "",
      description: "Volume : "
    },
    {
      type: "T2/T3",
      prix: "",
      description: "Volume : "
    },
    {
      type: "Maison",
      prix: "",
      description: "Volume : "
    }
  ],
  accesArrivee: " présente des défis spécifiques pour les déménagements : . Nos partenaires déménageurs connaissent parfaitement les créneaux autorisés, les zones de déchargement et les contraintes de circulation. Ils s'adaptent aux gabarits de camions selon les zones et optimisent les horaires pour éviter les embouteillages.",
  conseils: [
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  faq: [
    {
      question: "Quels sont les délais pour un déménagement toulouse →  ?",
      answer: "Nos partenaires déménageurs peuvent généralement intervenir sous 7 jours. Pour les déménagements urgents, certains peuvent se libérer en 48h selon la période."
    },
    {
      question: "Comment gérer les contraintes à  ?",
      answer: "Nos déménageurs connaissent parfaitement les contraintes  : créneaux autorisés, zones de déchargement, contraintes de circulation. Ils s'adaptent aux spécificités de chaque zone."
    },
    {
      question: "Quels sont les tarifs pour toulouse →  ?",
      answer: "Les tarifs varient selon le volume et les contraintes d'accès. Comptez  pour un studio,  pour un T2/T3,  pour une maison."
    },
    {
      question: "Peut-on déménager le week-end vers  ?",
      answer: "Oui, mais les créneaux sont limités et les tarifs majorés de 20-30%. Il est recommandé de privilégier la semaine pour éviter les embouteillages."
    }
  ]
};

export default function DestinationPage() {
  return <CorridorPage {...destinationData} />;
}
