import Image from 'next/image';
import Link from 'next/link';
import { PetSnack } from '@/data/petSnacks';

interface SnackCardProps {
  snack: PetSnack;
}

export default function SnackCard({ snack }: SnackCardProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">⯨</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
      </div>
    );
  };

  return (
    <Link href={`/snacks/${snack.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full transform hover:-translate-y-1 hover:scale-[1.02] transition-transform">
        <div className="relative h-48 w-full bg-warmGray">
          <Image
            src={snack.imageUrl}
            alt={snack.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-primary-light text-primary-dark px-2 py-1 rounded-full text-xs font-bold">
            ${snack.price.toFixed(2)}
          </div>
          {snack.petType === 'dog' && (
            <div className="absolute top-2 left-2 bg-secondary-light text-secondary-dark px-2 py-1 rounded-full text-xs font-bold">
              🐶 Dog
            </div>
          )}
          {snack.petType === 'cat' && (
            <div className="absolute top-2 left-2 bg-accent-light text-accent-dark px-2 py-1 rounded-full text-xs font-bold">
              🐱 Cat
            </div>
          )}
          {snack.petType === 'both' && (
            <div className="absolute top-2 left-2 bg-warmGray text-gray-700 px-2 py-1 rounded-full text-xs font-bold">
              🐶 🐱 Both
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bubblegum text-xl text-primary-dark mb-1">{snack.name}</h3>
          <p className="text-gray-600 text-sm mb-2 font-comfortaa line-clamp-2">{snack.description}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 font-comfortaa">{snack.brand}</div>
            <div className="flex items-center">
              {renderStars(snack.rating.overall)}
              <span className="ml-1 text-xs text-gray-500">({snack.rating.overall})</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {snack.categories.map(category => (
              <span 
                key={category} 
                className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-comfortaa"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}