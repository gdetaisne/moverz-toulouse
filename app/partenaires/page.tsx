import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaPrimary from "@/components/CtaPrimary";
import Section from "@/components/Section";
import PartnerCard from "@/components/PartnerCard";
import PartnersList from "@/components/PartnersList";

export const metadata: Metadata = {
  title: "Partenaires déménageurs - Déménageurs toulouse ",
  description: "Découvrez nos partenaires déménageurs certifiés à toulouse. Qualité garantie, tarifs transparents, service client premium.",
  alternates: {
    canonical: "https://www.devis-demenageur-toulousain.fr/partenaires/",
  },
  openGraph: {
    title: "Partenaires déménageurs - Déménageurs toulouse ",
    description: "Découvrez nos partenaires déménageurs certifiés à toulouse. Qualité garantie, tarifs transparents, service client premium.",
    url: "https://www.devis-demenageur-toulousain.fr/partenaires/",
    type: "website",
  },
};

const partners: any[] = [
  {
    name: "Déménagement Express Toulouse",
    city: "toulouse",
    rating: 4.6,
    reviews: 127,
    specialties: [
      "Déménagements express",
      "Service 24h/24"
    ]
  },
  {
    name: "Allo Déménageurs Toulouse",
    city: "toulouse",
    rating: 4.4,
    reviews: 89,
    specialties: [
      "Déménagements locaux",
      "Montage mobilier"
    ]
  },
  {
    name: "Pink City Déménagements",
    city: "toulouse",
    rating: 4.3,
    reviews: 67,
    specialties: [
      "Déménagements longue distance",
      "Emballage professionnel"
    ]
  },
  {
    name: "Toulouse Transport Plus",
    city: "toulouse",
    rating: 4.2,
    reviews: 45,
    specialties: [
      "Mobilier lourd",
      "Équipements spécialisés"
    ]
  },
  {
    name: "Movers Expert Toulouse",
    city: "toulouse",
    rating: 4.1,
    reviews: 32,
    specialties: [
      "Déménagements étudiants",
      "Services premium"
    ]
  },
  {
    name: "Transport Plus Toulouse",
    city: "toulouse",
    rating: 4,
    reviews: 18,
    specialties: [
      "Déménagements économiques",
      "Service personnalisé"
    ]
  }
];

export default function PartenairesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden text-white">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
            alt="Partenaires déménageurs certifiés à toulouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Breadcrumbs 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Partenaires", href: "/partenaires/" }
              ]}
            />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 mt-6">
              <span className="text-2xl">🤝</span>
              <span className="text-sm font-medium text-white">Réseau de confiance</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Nos partenaires déménageurs certifiés
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Nous travaillons exclusivement avec des déménageurs locaux certifiés et expérimentés. 
              Chaque partenaire est sélectionné pour sa qualité de service, sa transparence tarifaire et sa connaissance du terrain bordelais.
            </p>
          </div>
        </div>
      </section>

      <main>
        <div className="container section">
        <Section>
          <PartnersList partners={partners} />
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Pourquoi faire confiance à nos partenaires ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#6bcfcf]/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certification qualité</h3>
              <p className="text-white/80">
                Tous nos partenaires sont certifiés et assurés. Nous vérifions régulièrement leur qualité de service.
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#6bcfcf]/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tarifs transparents</h3>
              <p className="text-white/80">
                Pas de frais cachés, pas de surprises. Nos partenaires s'engagent sur des tarifs clairs et définitifs.
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#6bcfcf]/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connaissance locale</h3>
              <p className="text-white/80">
                Expertise du terrain bordelais : accès, stationnement, contraintes spécifiques à chaque quartier.
              </p>
            </div>
          </div>
        </Section>

        <CtaPrimary placement="inline" />

        <Section>
          <div className="card-glass rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Devenir partenaire Moverz
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Vous êtes déménageur à toulouse et souhaitez rejoindre notre réseau ? 
              Bénéficiez de notre technologie IA et de notre visibilité en ligne.
            </p>
            <a 
              href="/contact/" 
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-[#2b7a78] px-5 text-sm font-medium text-white shadow-marketing-xl hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition duration-300"
            >
              Devenir partenaire
            </a>
          </div>
        </Section>

        </div>
      </main>
    </div>
  );
}
