import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bubblegum text-4xl text-primary-dark mb-6 text-center">About PetTreats</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="/images/about-banner.jpg"
              alt="Happy pets with their owners"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="font-bubblegum text-3xl mb-2">Our Story</h2>
                <p className="font-comfortaa">Sharing the joy of quality pet treats since 2023</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="prose max-w-none font-comfortaa text-gray-700">
              <p className="mb-4">
                Welcome to PetTreats, where we believe that every pet deserves the very best! Our journey began with a simple observation: pet parents were struggling to find treats that were both nutritious and irresistibly delicious to their furry companions.
              </p>
              
              <p className="mb-4">
                Founded by a team of passionate pet lovers and nutrition experts, PetTreats was born from our desire to create a one-stop resource for discovering premium-quality treats that pets love and pet parents can feel good about.
              </p>
              
              <h3 className="font-bubblegum text-2xl text-secondary-dark my-6">Our Mission</h3>
              
              <p className="mb-4">
                Our mission is simple: to help pet parents discover the perfect treats that contribute to their pets' health, happiness, and well-being. We believe that what goes into your pet's body matters, and that's why we're committed to showcasing only the highest quality treats made with wholesome ingredients.
              </p>
              
              <div className="bg-cream p-6 rounded-lg my-8">
                <h3 className="font-bubblegum text-xl text-primary-dark mb-4">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-2">✓</span>
                    <span><strong>Curated Selection:</strong> We carefully review and select treats based on ingredient quality, nutritional value, and pet satisfaction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-2">✓</span>
                    <span><strong>Transparent Information:</strong> We provide detailed information about each treat, including ingredients, benefits, and recommended uses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-2">✓</span>
                    <span><strong>Pet-Tested:</strong> All treats featured on our platform have been tested and approved by real pets!</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary text-xl mr-2">✓</span>
                    <span><strong>Community-Focused:</strong> We value the experiences and feedback of our pet parent community.</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="font-bubblegum text-2xl text-secondary-dark my-6">Our Values</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary-light p-5 rounded-lg">
                  <h4 className="font-bubblegum text-xl text-secondary-dark mb-2">Quality First</h4>
                  <p>We never compromise on the quality of treats we feature. Every product meets our strict standards for ingredients and manufacturing processes.</p>
                </div>
                
                <div className="bg-primary-light p-5 rounded-lg">
                  <h4 className="font-bubblegum text-xl text-primary-dark mb-2">Pet Happiness</h4>
                  <p>We believe happy pets make happy homes. Our goal is to enhance the bond between pets and their humans through quality treats.</p>
                </div>
                
                <div className="bg-accent-light p-5 rounded-lg">
                  <h4 className="font-bubblegum text-xl text-accent-dark mb-2">Education</h4>
                  <p>We're committed to helping pet parents make informed decisions about their pets' nutrition and well-being.</p>
                </div>
                
                <div className="bg-warmGray p-5 rounded-lg">
                  <h4 className="font-bubblegum text-xl text-gray-700 mb-2">Community</h4>
                  <p>We foster a community of pet lovers who share experiences, tips, and the joy of pet parenthood.</p>
                </div>
              </div>
              
              <h3 className="font-bubblegum text-2xl text-secondary-dark my-6">Join Our Community</h3>
              
              <p className="mb-6">
                We invite you to explore our curated selection of treats, share your experiences, and become part of our growing community of pet lovers. Together, we can make every treat time a special moment for our beloved companions!
              </p>
              
              <div className="text-center mt-8">
                <Link 
                  href="/snacks" 
                  className="bg-primary hover:bg-primary-dark text-white font-bubblegum py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center justify-center"
                >
                  Explore Our Treats
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="font-bubblegum text-3xl text-primary-dark mb-6 text-center">Contact Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bubblegum text-xl text-secondary-dark mb-4">Get in Touch</h3>
                <div className="space-y-4 font-comfortaa">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:hello@pettreats.com" className="text-gray-700 hover:text-primary transition-colors">hello@pettreats.com</a>
                  </p>
                  
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">123 Pet Street, Treatville, PT 12345</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bubblegum text-xl text-secondary-dark mb-4">Follow Us</h3>
                <div className="space-y-4 font-comfortaa">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <a href="https://instagram.com/pettreats" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">@pettreats</a>
                  </p>
                  
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    <a href="https://facebook.com/pettreats" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">PetTreats</a>
                  </p>
                  
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    <a href="https://twitter.com/pettreats" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">@pettreats</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}