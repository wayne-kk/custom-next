import HeroSection from "@/components/HeroSection";
import FeaturedSnacks from "@/components/FeaturedSnacks";
import CategoryShowcase from "@/components/CategoryShowcase";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <FeaturedSnacks />
      
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 relative">
              <div className="relative h-64 md:h-80 w-full">
                <Image 
                  src="/images/happy-pets.png" 
                  alt="Happy pets enjoying treats" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 animate-wiggle hidden md:block">
                <Image 
                  src="/images/paw-print.png" 
                  alt="Paw print" 
                  width={50}
                  height={50}
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="font-bubblegum text-3xl text-primary-dark mb-4">Why Choose Our Treats?</h2>
              <div className="space-y-4 font-comfortaa">
                <div className="flex items-start">
                  <div className="bg-secondary-light p-2 rounded-full mr-3 text-xl">🌟</div>
                  <div>
                    <h3 className="font-bubblegum text-xl text-secondary-dark">Premium Quality</h3>
                    <p className="text-gray-700">We carefully select only the highest quality ingredients for our treats.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-light p-2 rounded-full mr-3 text-xl">🌱</div>
                  <div>
                    <h3 className="font-bubblegum text-xl text-secondary-dark">Natural Ingredients</h3>
                    <p className="text-gray-700">No artificial preservatives, colors, or flavors - just wholesome goodness.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-light p-2 rounded-full mr-3 text-xl">❤️</div>
                  <div>
                    <h3 className="font-bubblegum text-xl text-secondary-dark">Pet-Approved Taste</h3>
                    <p className="text-gray-700">Delicious flavors that even the pickiest pets can't resist!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-light p-2 rounded-full mr-3 text-xl">🔍</div>
                  <div>
                    <h3 className="font-bubblegum text-xl text-secondary-dark">Carefully Tested</h3>
                    <p className="text-gray-700">All our treats undergo rigorous quality and safety testing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CategoryShowcase />
      
      <section className="py-16 bg-gradient-to-r from-secondary-light to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bubblegum text-3xl text-primary-dark mb-4">Ready to Treat Your Pet?</h2>
          <p className="font-comfortaa text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our collection of delicious, healthy treats that your furry friends will love!
          </p>
          <Link 
            href="/snacks" 
            className="bg-primary hover:bg-primary-dark text-white font-bubblegum py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center"
          >
            Browse All Treats
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
