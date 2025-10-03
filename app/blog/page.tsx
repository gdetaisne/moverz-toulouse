import { getAllBlogPosts, getPilierPosts } from '@/lib/blog';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Catégories du blog (vides pour l'instant)
const blogCategories = [];

export default function BlogPage() {
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
            Blog Déménagement
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Conseils, astuces et guides pour réussir votre déménagement
          </p>
        </div>
        
        <div className="text-center text-white/60">
          <p>Le contenu du blog sera ajouté prochainement.</p>
        </div>
      </div>
    </div>
  );
}
