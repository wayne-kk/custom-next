import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-cream to-primary-light py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="font-bubblegum text-4xl md:text-5xl lg:text-6xl text-primary-dark mb-4">
            Discover the Tastiest Pet Treats 🍖
          </h1>
          <p className="font-comfortaa text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Explore our collection of premium, healthy, and delicious treats that your furry friends will absolutely love!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/snacks" 
              className="bg-primary hover:bg-primary-dark text-white font-bubblegum py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center"
            >
              Browse All Treats
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="/about" 
              className="bg-white hover:bg-gray-100 text-primary-dark font-bubblegum py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center border-2 border-primary"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative h-64 md:h-96 w-full animate-float">
            <Image 
              src="/images/hero-pets.png" 
              alt="Happy pets with treats" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 animate-wiggle hidden md:block">
            <Image 
              src="/images/paw-print.png" 
              alt="Paw print" 
              width={60}
              height={60}
            />
          </div>
          <div className="absolute -top-6 -right-6 animate-wiggle hidden md:block">
            <Image 
              src="/images/bone.png" 
              alt="Bone" 
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}