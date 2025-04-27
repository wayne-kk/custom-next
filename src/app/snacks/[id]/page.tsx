import { getSnackById, getRelatedSnacks } from '@/data/petSnacks';
import Image from 'next/image';
import Link from 'next/link';
import RatingStars from '@/components/RatingStars';
import SnackCard from '@/components/SnackCard';
import { notFound } from 'next/navigation';

interface SnackDetailPageProps {
  params: {
    id: string;
  };
}

export default function SnackDetailPage({ params }: SnackDetailPageProps) {
  const snack = getSnackById(params.id);
  
  if (!snack) {
    notFound();
  }
  
  const relatedSnacks = getRelatedSnacks(snack.id);
  
  // Function to render pet type badge
  const renderPetTypeBadge = () => {
    if (snack.petType === 'dog') {
      return <span className="bg-secondary-light text-secondary-dark px-3 py-1 rounded-full text-sm font-bold">🐶 Dog Treat</span>;
    }
    if (snack.petType === 'cat') {
      return <span className="bg-accent-light text-accent-dark px-3 py-1 rounded-full text-sm font-bold">🐱 Cat Treat</span>;
    }
    return <span className="bg-warmGray text-gray-700 px-3 py-1 rounded-full text-sm font-bold">🐶 🐱 For All Pets</span>;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/snacks" className="text-secondary-dark hover:text-primary transition-colors font-comfortaa flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to All Treats
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="relative h-80 lg:h-full w-full bg-warmGray">
              <Image
                src={snack.imageUrl}
                alt={snack.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {renderPetTypeBadge()}
              {snack.categories.map(category => (
                <Link 
                  key={category} 
                  href={`/snacks?category=${category}`}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-comfortaa hover:bg-gray-200 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
            
            <h1 className="font-bubblegum text-3xl lg:text-4xl text-primary-dark mb-2">{snack.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 font-comfortaa mr-4">By {snack.brand}</span>
              <span className="text-primary font-bubblegum text-xl">${snack.price.toFixed(2)}</span>
            </div>
            
            <p className="font-comfortaa text-gray-700 mb-6">{snack.description}</p>
            
            <div className="mb-6">
              <h3 className="font-bubblegum text-xl text-secondary-dark mb-3">Ratings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <RatingStars rating={snack.rating.taste} label="Taste:" size="md" />
                <RatingStars rating={snack.rating.quality} label="Quality:" size="md" />
                <RatingStars rating={snack.rating.value} label="Value:" size="md" />
                <RatingStars rating={snack.rating.overall} label="Overall:" size="md" />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bubblegum text-xl text-secondary-dark mb-3">Flavor</h3>
              <p className="font-comfortaa text-gray-700">{snack.flavor}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bubblegum text-xl text-secondary-dark mb-3">Recommended For</h3>
              <div className="flex flex-wrap gap-2">
                {snack.recommendedFor.map((recommendation, index) => (
                  <span 
                    key={index} 
                    className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm font-comfortaa"
                  >
                    {recommendation}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bubblegum text-2xl text-secondary-dark mb-4">Key Benefits</h3>
              <ul className="space-y-2 font-comfortaa">
                {snack.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bubblegum text-2xl text-secondary-dark mb-4">Ingredients</h3>
              <ul className="space-y-2 font-comfortaa">
                {snack.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {relatedSnacks.length > 0 && (
        <div className="mt-12">
          <h2 className="font-bubblegum text-3xl text-primary-dark mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedSnacks.map(relatedSnack => (
              <SnackCard key={relatedSnack.id} snack={relatedSnack} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}