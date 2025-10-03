import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  h1?: string;
  category: string;
  type?: string;
  keywords: string[];
  word_count?: number;
  publish_date: string;
  featured?: boolean;
  content: string;
  // URLs optimisées
  cleanSlug: string;
  cleanCategory: string;
  folderType: string; // piliers, satellites, categories
}

// Mapping des catégories pour les URLs propres
const CATEGORY_MAPPING: { [key: string]: string } = {
  'demenagement-etudiant-toulouse': 'aide-demenagement',
  'demenagement-bureau-toulouse': 'aide-demenagement',
  'demenagement-toulouse-usa': 'aide-demenagement',
  'aide-demenagement': 'aide-demenagement',
  'piliers': 'piliers',
  'satellites': 'satellites',
  'categories': 'categories',
};

function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cleanSlug(originalSlug: string, category: string): string {
  // Supprimer les accents d'abord
  let cleanSlug = removeAccents(originalSlug);
  
  // Patterns de nettoyage spécifiques (ordre important!)
  const cleanPatterns = [
    // D'abord, retirer les préfixes de catégorie complets
    { from: /^demenagement-etudiant-toulouse-/, to: '' },
    { from: /^demenagement-bureau-toulouse-/, to: '' },
    { from: /^demenagement-toulouse-usa-/, to: '' },
    { from: /^aide-demenagement-/, to: '' },
    
    // Ensuite, retirer les préfixes génériques
    { from: /^demenagement-toulouse-/, to: '' },
    { from: /^demenagement-/, to: '' },
    { from: /^toulouse-/, to: '' },
    
    // Retirer les suffixes courants
    { from: /-toulouse$/, to: '' },
    { from: /-demenagement$/, to: '' },
    { from: /-pas-cher$/, to: '' },
    { from: /-gratuit$/, to: '' },
    { from: /-guide$/, to: '' },
    
    // Nettoyer les caractères spéciaux
    { from: /[^a-z0-9-]/g, to: '-' },
    { from: /-+/g, to: '-' },
    { from: /^-+|-+$/g, to: '' },
  ];

  // Appliquer les patterns de nettoyage
  cleanPatterns.forEach(pattern => {
    cleanSlug = cleanSlug.replace(pattern.from, pattern.to);
  });

  // S'assurer qu'on a un slug valide
  if (!cleanSlug || cleanSlug.length < 2) {
    cleanSlug = 'article';
  }

  return cleanSlug;
}

function extractCategoryFromPath(filePath: string): string {
  const pathParts = filePath.split('/');
  const blogIndex = pathParts.findIndex(part => part === 'blog');
  if (blogIndex !== -1 && pathParts[blogIndex + 1]) {
    return pathParts[blogIndex + 1];
  }
  return 'uncategorized';
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    const blogDirectory = '/Users/guillaumestehelin/moverz_CENTRAL-2/sites/toulouse/content/blog';
    
    if (!fs.existsSync(blogDirectory)) {
      console.log('ERROR: blogDirectory does not exist');
      return [];
    }
    
    const categories = fs.readdirSync(blogDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const allPosts: BlogPost[] = [];

    categories.forEach(category => {
      const categoryPath = path.join(blogDirectory, category);
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md') && file !== 'README.md');

      files.forEach(file => {
        const filePath = path.join(categoryPath, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        const originalSlug = data.slug || file.replace('.md', '');
        
        // Utiliser la catégorie du frontmatter ou extraire du chemin
        const category = data.category || extractCategoryFromPath(filePath);
        const cleanCategorySlug = cleanSlug(originalSlug, category);
        const cleanCategory = removeAccents(CATEGORY_MAPPING[category as keyof typeof CATEGORY_MAPPING] || category);

        // Gérer les keywords (peuvent être string ou array)
        let keywordsArray: string[] = [];
        if (data.keywords) {
          if (typeof data.keywords === 'string') {
            keywordsArray = data.keywords.split(',').map(k => k.trim()).filter(k => k.length > 0);
          } else if (Array.isArray(data.keywords)) {
            keywordsArray = data.keywords;
          }
        }

        // Déterminer le type de dossier (piliers, satellites, categories)
        const folderType = path.basename(path.dirname(filePath));

        allPosts.push({
          slug: originalSlug,
          title: data.title,
          meta_title: data.meta_title,
          meta_description: data.meta_description,
          h1: data.h1,
          category: category,
          type: data.type,
          keywords: keywordsArray,
          word_count: data.word_count,
          publish_date: data.publish_date || data.date || new Date().toISOString().split('T')[0],
          featured: data.featured || false,
          content,
          // URLs optimisées
          cleanSlug: cleanCategorySlug,
          cleanCategory,
          folderType, // Ajout du folderType
        });
      });
    });

    return allPosts.sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
  } catch (error) {
    console.log('ERROR in getAllBlogPosts:', error);
    return [];
  }
}

export function getBlogPostByCleanSlug(category: string, slug: string): BlogPost | null {
  try {
    const allPosts = getAllBlogPosts();
    
    // Nettoyer le slug et la catégorie pour la comparaison
    const cleanCategory = removeAccents(category);
    const cleanSlugToFind = removeAccents(slug);
    
    const post = allPosts.find(p => 
      removeAccents(p.cleanCategory) === cleanCategory && 
      removeAccents(p.cleanSlug) === cleanSlugToFind
    );
    
    return post || null;
  } catch (error) {
    console.log('ERROR in getBlogPostByCleanSlug:', error);
    return null;
  }
}

export function getPilierPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.folderType === 'piliers');
}

export function getSatellitePosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.folderType === 'satellites');
}

export function getBlogPostsByCleanCategory(category: string): BlogPost[] {
  try {
    const allPosts = getAllBlogPosts();
    const cleanCategory = removeAccents(category);
    
    return allPosts.filter(post => 
      removeAccents(post.cleanCategory) === cleanCategory
    );
  } catch (error) {
    console.log('ERROR in getBlogPostsByCleanCategory:', error);
    return [];
  }
}