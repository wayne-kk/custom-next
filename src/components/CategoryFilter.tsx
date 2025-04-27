import { Category, getAllCategories, getCategoryName } from '@/data/petSnacks';
import Link from 'next/link';

interface CategoryFilterProps {
  selectedCategory?: Category;
  petType?: string;
}

export default function CategoryFilter({ selectedCategory, petType }: CategoryFilterProps) {
  const categories = getAllCategories();
  
  const getFilterUrl = (category: Category) => {
    const params = new URLSearchParams();
    if (petType) params.append('petType', petType);
    params.append('category', category);
    return `/snacks?${params.toString()}`;
  };
  
  const getAllUrl = () => {
    return petType ? `/snacks?petType=${petType}` : '/snacks';
  };

  return (
    <div className="mb-8">
      <h3 className="font-bubblegum text-xl text-secondary-dark mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <Link 
          href={getAllUrl()}
          className={`px-4 py-2 rounded-full font-comfortaa text-sm transition-colors ${
            !selectedCategory 
              ? 'bg-secondary-dark text-white font-bold' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </Link>
        
        {categories.map(category => (
          <Link 
            key={category}
            href={getFilterUrl(category)}
            className={`px-4 py-2 rounded-full font-comfortaa text-sm transition-colors ${
              selectedCategory === category 
                ? 'bg-secondary-dark text-white font-bold' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getCategoryName(category)}
          </Link>
        ))}
      </div>
    </div>
  );
}