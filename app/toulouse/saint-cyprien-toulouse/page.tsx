import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaPrimary from "@/components/CtaPrimary";

export const metadata: Metadata = {
  title: "Déménagement Saint-Cyprien - toulouse | Devis Gratuit",
  description: "Déménagement professionnel dans le quartier Saint-Cyprien à toulouse. Devis gratuit, déménageurs vérifiés, service de qualité.",
  alternates: {
    canonical: "https://www.devis-demenageur-toulousain.fr/toulouse/saint-cyprien-toulouse/",
  },
  openGraph: {
    title: "Déménagement Saint-Cyprien - toulouse",
    description: "Déménagement professionnel dans le quartier Saint-Cyprien à toulouse. Devis gratuit, déménageurs vérifiés.",
    url: "https://www.devis-demenageur-toulousain.fr/toulouse/saint-cyprien-toulouse/",
    type: "website",
  },
};

export default function QuartierPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'toulouse', href: '/toulouse' },
          { label: 'Saint-Cyprien', href: '/toulouse/saint-cyprien-toulouse' }
        ]} 
      />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Déménagement Saint-Cyprien - toulouse
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Quartier populaire et authentique
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Spécificités du quartier</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Accès : Informations d'accès au quartier</li>
              <li>• Stationnement : Disponible</li>
              <li>• Type d'habitat : Mixte</li>
            </ul>
          </div>
          
          <div className="card-glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Nos services</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Déménagement résidentiel</li>
              <li>• Déménagement d'entreprise</li>
              <li>• Emballage et protection</li>
              <li>• Montage et démontage</li>
            </ul>
          </div>
        </div>
        
        <CtaPrimary placement="inline" />
      </div>
    </div>
  );
}