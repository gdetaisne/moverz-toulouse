import { getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FaStar, FaLightbulb, FaBook } from 'react-icons/fa'; // Icônes pour les catégories

export const metadata = {
  title: "Blog Déménagement Toulouse - Conseils et Guides Moverz",
  description: "Retrouvez tous nos conseils, astuces et guides pour un déménagement réussi à Toulouse. Articles sur les déménageurs, l'emballage, les démarches et plus encore.",
  alternates: {
    canonical: "https://www.devis-demenageur-toulousain.fr/blog/",
  },
  openGraph: {
    title: "Blog Déménagement Toulouse - Conseils et Guides Moverz",
    description: "Conseils, astuces et guides pour réussir votre déménagement à Toulouse.",
    url: "https://www.devis-demenageur-toulousain.fr/blog/",
    type: "website",
  },
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();

  // Grouper les articles par type de dossier
  const postsByCategory = allPosts.reduce((acc, post) => {
    if (!acc[post.folderType]) {
      acc[post.folderType] = [];
    }
    acc[post.folderType].push(post);
    return acc;
  }, {} as { [key: string]: any[] });

  // Trier les catégories par priorité
  const categoryOrder = ['piliers', 'satellites', 'categories'];
  const sortedCategories = categoryOrder.filter(cat => postsByCategory[cat]);

  const getCategoryTitle = (categorySlug: string) => {
    switch (categorySlug) {
      case 'piliers':
        return 'Guides Piliers';
      case 'satellites':
        return 'Articles Satellites';
      case 'categories':
        return 'Articles par Catégorie';
      default:
        return categorySlug;
    }
  };

  const getCategoryDescription = (categorySlug: string) => {
    switch (categorySlug) {
      case 'piliers':
        return 'Nos guides complets et essentiels pour maîtriser chaque aspect de votre déménagement.';
      case 'satellites':
        return 'Articles spécialisés et conseils pratiques pour des situations spécifiques ou des astuces du quotidien.';
      case 'categories':
        return 'Explorez nos articles classés par thèmes pour trouver rapidement l\'information dont vous avez besoin.';
      default:
        return '';
    }
  };

  const getCategoryIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case 'piliers':
        return <FaStar className="text-yellow-400 text-3xl" />;
      case 'satellites':
        return <FaLightbulb className="text-blue-400 text-3xl" />;
      case 'categories':
        return <FaBook className="text-green-400 text-3xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' }
        ]}
      />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog Déménagement Toulouse
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Retrouvez nos {allPosts.length} articles pour réussir votre déménagement à Toulouse.
          </p>
        </div>

        {sortedCategories.length > 0 ? (
          <div className="space-y-16">
            {sortedCategories.map(categorySlug => (
              <section key={categorySlug} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {getCategoryIcon(categorySlug)}
                    <h2 className="text-2xl font-bold text-white">
                      {getCategoryTitle(categorySlug)}
                    </h2>
                  </div>
                  <span className="text-white/60 text-sm">
                    {postsByCategory[categorySlug]?.length || 0} articles
                  </span>
                </div>
                <p className="text-white/80 max-w-3xl mb-8">
                  {getCategoryDescription(categorySlug)}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {postsByCategory[categorySlug]?.map((post, index) => (
                    <Link key={index} href={`/blog/${post.cleanCategory}/${post.cleanSlug}`} className="card-glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                      <div className="p-6">
                        <span className="text-xs font-semibold text-[#6bcfcf] uppercase mb-2 block">
                          {post.cleanCategory.replace(/-/g, ' ')}
                        </span>
                        <h3 className="text-xl font-semibold group-hover:text-[#6bcfcf] transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                          {post.meta_description?.substring(0, 120)}...
                        </p>
                        <div className="flex justify-between items-center text-xs text-white/60">
                          <span>{post.publish_date}</span>
                          <span className="text-[#6bcfcf] group-hover:text-[#2b7a78] transition-colors">
                            Lire →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center text-white/60">
            <p>Le contenu du blog sera ajouté prochainement.</p>
          </div>
        )}
      </div>
    </div>
  );
}