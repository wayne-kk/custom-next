import { petSnacks, PetSnack } from '@/data/petSnacks';
import SnackCard from './SnackCard';
import Link from 'next/link';

export default function FeaturedSnacks() {
  // Get top rated snacks (based on overall rating)
  const featuredSnacks = [...petSnacks]
    .sort((a, b) => b.rating.overall - a.rating.overall)
    .slice(0, 4);

  return (
    <section className="py-12 bg-warmGray">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bubblegum text-3xl text-primary-dark">Featured Treats</h2>
          <Link 
            href="/snacks" 
            className="font-comfortaa text-secondary-dark hover:text-primary transition-colors flex items-center"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSnacks.map(snack => (
            <SnackCard key={snack.id} snack={snack} />
          ))}
        </div>
      </div>
    </section>
  );
}