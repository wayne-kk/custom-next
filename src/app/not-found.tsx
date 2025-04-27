import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="relative h-64 w-full mb-8 animate-float">
          <Image 
            src="/images/sad-pet.png" 
            alt="Sad pet" 
            fill
            className="object-contain"
          />
        </div>
        
        <h1 className="font-bubblegum text-4xl md:text-5xl text-primary-dark mb-4">Oops! Page Not Found</h1>
        <p className="font-comfortaa text-lg text-gray-700 mb-8">
          We couldn't find the treat you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-primary hover:bg-primary-dark text-white font-bubblegum py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center"
          >
            Go Home
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link 
            href="/snacks" 
            className="bg-white hover:bg-gray-100 text-primary-dark font-bubblegum py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center border-2 border-primary"
          >
            Browse Treats
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}