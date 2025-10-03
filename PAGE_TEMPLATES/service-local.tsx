import Breadcrumbs from "@/components/Breadcrumbs";
import CtaPrimary from "@/components/CtaPrimary";

export default function DemenagementServicePage() {
  return (
    <main className="bg-hero">
      <div className="halo" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#04163a] via-[#2b7a78] to-[#6bcfcf] text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:py-32">
          <div className="text-center">
            <Breadcrumbs 
              items={[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Déménagement ", href: "/services/demenagement--toulouse" }
              ]}
            />
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Déménagement  à toulouse
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              
            </p>
            <div className="mt-8">
              <a
                href="/devis-demenagement-toulouse/"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-lg font-semibold text-[#04163a] hover:bg-white/90 transition duration-300 shadow-lg"
              >
                Créer mon dossier
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation de la formule */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Solution  adaptée à toulouse
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Notre formule  est spécialement adaptée aux spécificités de toulouse. 
               Cette formule vous permet de bénéficier d'un service professionnel 
              optimisé pour votre ville tout en respectant votre budget et vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* Inclus / Non inclus */}
      <section className="section bg-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#6bcfcf] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#04163a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Inclus
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6bcfcf]"></div>
                  <span className="text-white/90">Fourniture de cartons</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6bcfcf]"></div>
                  <span className="text-white/90">Transport des biens</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6bcfcf]"></div>
                  <span className="text-white/90">Équipe de 2 déménageurs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6bcfcf]"></div>
                  <span className="text-white/90">Véhicule adapté</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6bcfcf]"></div>
                  <span className="text-white/90">Assurance responsabilité civile</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                Non inclus
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-white/90">Emballage objets fragiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-white/90">Démontage/remontage de meubles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-white/90">Protection spéciale</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-white/90">Nettoyage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Prix indicatifs à toulouse
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Tarifs adaptés selon la distance de déménagement et les spécificités locales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Déménagement local */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Déménagement local (toulouse)</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-medium text-white mb-2">Studio/T1</h4>
                  <div className="text-3xl font-bold text-[#6bcfcf] mb-1"></div>
                  <p className="text-white/60 text-sm">Jusqu'à 30m²</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-medium text-white mb-2">T2/T3</h4>
                  <div className="text-3xl font-bold text-[#6bcfcf] mb-1"></div>
                  <p className="text-white/60 text-sm">Jusqu'à 60m²</p>
                </div>
              </div>
            </div>
            
            {/* Déménagement national */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Déménagement national</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-medium text-white mb-2">Studio/T1</h4>
                  <div className="text-3xl font-bold text-[#6bcfcf] mb-1"></div>
                  <p className="text-white/60 text-sm">Jusqu'à 30m²</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-medium text-white mb-2">T2/T3</h4>
                  <div className="text-3xl font-bold text-[#6bcfcf] mb-1"></div>
                  <p className="text-white/60 text-sm">Jusqu'à 60m²</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              * Tarifs indicatifs. Devis personnalisé selon vos besoins spécifiques et la distance exacte.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="section bg-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-6xl mb-4">🏠</div>
              <blockquote className="text-lg text-white/90 italic mb-4">
                "Excellent service de déménagement  à toulouse. 
                L'équipe a été professionnelle et efficace. 
                Je recommande vivement cette formule pour un déménagement réussi."
              </blockquote>
              <div className="text-white/70">
                <div className="font-semibold">Client satisfait</div>
                <div className="text-sm">Déménagement  à toulouse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Questions fréquentes
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Les réponses à vos questions sur la formule 
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Pourquoi choisir la formule  ?
              </h3>
              <p className="text-white/80">
                La formule  est adaptée à vos besoins et à votre budget. 
                Elle offre le meilleur rapport qualité-prix pour votre type de déménagement à toulouse.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Quels sont les tarifs de cette formule ?
              </h3>
              <p className="text-white/80">
                Les tarifs varient selon la distance et les contraintes d'accès à toulouse. 
                Consultez notre grille tarifaire ou demandez un devis personnalisé gratuit.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Comment se déroule cette formule ?
              </h3>
              <p className="text-white/80">
                Notre processus est simple : inventaire en ligne, devis personnalisé, planification, 
                déménagement par nos partenaires certifiés spécialisés dans toulouse.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Peut-on personnaliser cette formule ?
              </h3>
              <p className="text-white/80">
                Oui, vous pouvez ajouter des services complémentaires comme l'emballage d'objets fragiles 
                ou le démontage de meubles. Ces options sont facturées en supplément.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaPrimary placement="inline" label="Prêt pour votre déménagement  ?" />
    </main>
  );
}
