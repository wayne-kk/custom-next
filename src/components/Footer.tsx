import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-cream py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-primary-dark font-bubblegum text-2xl mb-2">PetTreats</h3>
            <p className="text-gray-600 font-comfortaa">Discover the best treats for your furry friends 🐾</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-bubblegum text-secondary-dark text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2 font-comfortaa">
                <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/snacks" className="text-gray-600 hover:text-primary transition-colors">All Snacks</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bubblegum text-secondary-dark text-lg mb-3">Categories</h4>
              <ul className="space-y-2 font-comfortaa">
                <li><Link href="/snacks?category=organic" className="text-gray-600 hover:text-primary transition-colors">Organic</Link></li>
                <li><Link href="/snacks?category=grain-free" className="text-gray-600 hover:text-primary transition-colors">Grain-Free</Link></li>
                <li><Link href="/snacks?category=dental" className="text-gray-600 hover:text-primary transition-colors">Dental Care</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bubblegum text-secondary-dark text-lg mb-3">Contact</h4>
              <ul className="space-y-2 font-comfortaa">
                <li><a href="mailto:hello@pettreats.com" className="text-gray-600 hover:text-primary transition-colors">hello@pettreats.com</a></li>
                <li><a href="https://instagram.com/pettreats" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="https://facebook.com/pettreats" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-comfortaa">© {new Date().getFullYear()} PetTreats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}