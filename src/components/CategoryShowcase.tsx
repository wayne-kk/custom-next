import Link from 'next/link';
import Image from 'next/image';
import { getAllCategories, getCategoryName, Category } from '@/data/petSnacks';

export default function CategoryShowcase() {
  const categories = getAllCategories();
  
  const getCategoryImage = (category: Category): string => {
    const images: Record<Category, string> = {
      'organic': '/images/categories/organic.jpg',
      'grain-free': '/images/categories/grain-free.jpg',
      'dental': '/images/categories/dental.jpg',
      'training': '/images/categories/training.jpg',
      'treats': '/images/categories/treats.jpg'
    };
    return images[category];
  };
  
  const getCategoryIcon = (category: Category): string => {
    const icons: Record<Category, string> = {
      'organic': '🌱',
      'grain-free': '🌾',
      'dental': '😁',
      'training': '🏆',
      'treats': '🍪'
    };
    return icons[category];
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-bubblegum text-3xl text-primary-dark text-center mb-8">Browse by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(category => (
            <Link key={category} href={`/snacks?category=${category}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="relative h-40 w-full">
                  <Image
                    src={getCategoryImage(category)}
                    alt={getCategoryName(category)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-2xl mb-1">{getCategoryIcon(category)}</div>
                  <h3 className="font-bubblegum text-lg text-secondary-dark group-hover:text-primary transition-colors">
                    {getCategoryName(category)}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}