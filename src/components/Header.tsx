import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-cream shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 mr-3 animate-wiggle">
              <Image 
                src="/images/logo.png" 
                alt="PetTreats Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-primary-dark font-bubblegum text-3xl">PetTreats</span>
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link href="/snacks" className="text-secondary-dark hover:text-primary transition-colors font-comfortaa">
            All Snacks
          </Link>
          <Link href="/snacks?petType=dog" className="text-secondary-dark hover:text-primary transition-colors font-comfortaa">
            Dog Treats
          </Link>
          <Link href="/snacks?petType=cat" className="text-secondary-dark hover:text-primary transition-colors font-comfortaa">
            Cat Treats
          </Link>
          <Link href="/about" className="text-secondary-dark hover:text-primary transition-colors font-comfortaa">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}