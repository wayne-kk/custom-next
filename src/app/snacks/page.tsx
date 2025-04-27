import { getSnacksByPetType, getSnacksByCategory, Category, PetType } from '@/data/petSnacks';
import SnackCard from '@/components/SnackCard';
import CategoryFilter from '@/components/CategoryFilter';
import Link from 'next/link';

interface SnacksPageProps {
  searchParams: {
    petType?: string;
    category?: string;
    sort?: string;
  };
}

export default function SnacksPage({ searchParams }: SnacksPageProps) {
  const petType = searchParams.petType as PetType | 'all' | undefined;
  const category = searchParams.category as Category | undefined;
  const sort = searchParams.sort || 'rating';
  
  // Get snacks based on filters
  let snacks = petType ? getSnacksByPetType(petType) : getSnacksByPetType('all');
  
  if (category) {
    snacks = snacks.filter(snack => snack.categories.includes(category as Category));
  }
  
  // Sort snacks
  if (sort === 'price-low') {
    snacks.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    snacks.sort((a, b) => b.price - a.price);
  } else {
    // Default: sort by rating
    snacks.sort((a, b) => b.rating.overall - a.rating.overall);
  }
  
  // Get page title based on filters
  const getPageTitle = () => {
    if (petType === 'dog') return 'Dog Treats';
    if (petType === 'cat') return 'Cat Treats';
    if (petType === 'both') return 'Treats for All Pets';
    return 'All Pet Treats';
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-bubblegum text-4xl text-primary-dark mb-2">{getPageTitle()}</h1>
        <p className="font-comfortaa text-gray-600">
          Discover the perfect treats for your furry friends!
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-bubblegum text-2xl text-secondary-dark mb-6">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-bubblegum text-xl text-secondary-dark mb-4">Pet Type</h3>
              <div className="space-y-2 font-comfortaa">
                <div>
                  <Link 
                    href={`/snacks${category ? `?category=${category}` : ''}`}
                    className={`block px-4 py-2 rounded-md transition-colors ${!petType ? 'bg-secondary-dark text-white font-bold' : 'hover:bg-gray-100'}`}
                  >
                    All Pets
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/snacks?petType=dog${category ? `&category=${category}` : ''}`}
                    className={`block px-4 py-2 rounded-md transition-colors ${petType === 'dog' ? 'bg-secondary-dark text-white font-bold' : 'hover:bg-gray-100'}`}
                  >
                    Dogs 🐶
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/snacks?petType=cat${category ? `&category=${category}` : ''}`}
                    className={`block px-4 py-2 rounded-md transition-colors ${petType === 'cat' ? 'bg-secondary-dark text-white font-bold' : 'hover:bg-gray-100'}`}
                  >
                    Cats 🐱
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/snacks?petType=both${category ? `&category=${category}` : ''}`}
                    className={`block px-4 py-2 rounded-md transition-colors ${petType === 'both' ? 'bg-secondary-dark text-white font-bold' : 'hover:bg-gray-100'}`}
                  >
                    Both 🐶🐱
                  </Link>
                </div>
              </div>
            </div>
            
            <CategoryFilter selectedCategory={category as Category} petType={petType} />
            
            <div className="mb-6">
              <h3 className="font-bubblegum text-xl text-secondary-dark mb-4">Sort By</h3>
              <div className="space-y-2 font-comfortaa">
                <div>
                  <Link 
                    href={`/snacks?${new URLSearchParams({
                      ...(petType ? { petType } : {}),
                      ...(category ? { category } : {}),
                      sort: 'rating'
                    }).toString()}`}
                    className={`block px-4 py-2 rounded-md transition-colors ${sort === 'rating' ? 'bg-secondary-dark text-white font-bold' : 'hover:bg-gray-100'}`}
                  >
                    Highest Rated
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/snacks?${new URLSearchParams({
                      ...(petType ? { petType } : {}),
                      ...(category ? { category } : {}),
                      sort: 'price-low'
                    }).toString()}`}
                    className={`block px-4 py-2 rounded-md transition-colors ${sort === 'price-low' ? 'bg-secondary-dark text-white font-bold' : 'hover:bg-gray-100'}`}
                  >
                    Price: Low to High
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/snacks?${new URLSearchParams({
                      ...(petType ? { petType } : {}),
                      ...(category ? { category } : {}),
                      sort: 'price-high'
                    }).toString()}`}
                    className={`block px-4 py-2 rounded-md transition-colors ${sort === 'price-high' ? 'bg-secondary-dark text-white font-bold' : 'hover:bg-gray-100'}`}
                  >
                    Price: High to Low
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/4">
          {snacks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {snacks.map(snack => (
                <SnackCard key={snack.id} snack={snack} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="font-bubblegum text-2xl text-secondary-dark mb-4">No treats found</h3>
              <p className="font-comfortaa text-gray-600 mb-6">
                We couldn't find any treats matching your filters. Try adjusting your search criteria.
              </p>
              <Link 
                href="/snacks" 
                className="bg-primary hover:bg-primary-dark text-white font-bubblegum py-2 px-6 rounded-full transition-colors inline-block"
              >
                View All Treats
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}