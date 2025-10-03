import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaPrimary from "@/components/CtaPrimary";

export const metadata: Metadata = {
  title: "Déménagement toulouse → Lyon | Devis Gratuit",
  description: "Déménagement de toulouse vers Lyon. Devis gratuit, déménageurs vérifiés, service de qualité.",
  alternates: {
    canonical: "https://www.devis-demenageur-toulousain.fr/toulouse-vers-lyon/",
  },
  openGraph: {
    title: "Déménagement toulouse → Lyon",
    description: "Déménagement de toulouse vers Lyon. Devis gratuit, déménageurs vérifiés.",
    url: "https://www.devis-demenageur-toulousain.fr/toulouse-vers-lyon/",
    type: "website",
  },
};

export default function DestinationPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'toulouse', href: '/toulouse' },
          { label: 'Lyon', href: '/toulouse-vers-lyon' }
        ]} 
      />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Déménagement toulouse → Lyon
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Déménagement professionnel de toulouse vers Lyon. Distance : 245 km km.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Informations sur le trajet</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Distance : 245 km km</li>
              <li>• Durée estimée : Variable</li>
              <li>• Type de transport : Route</li>
            </ul>
          </div>
          
          <div className="card-glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Nos services</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Déménagement longue distance</li>
              <li>• Transport sécurisé</li>
              <li>• Assurance transport</li>
              <li>• Suivi en temps réel</li>
            </ul>
          </div>
        </div>
        
        <CtaPrimary placement="inline" />
      </div>
    </div>
  );
}