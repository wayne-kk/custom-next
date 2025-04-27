export type PetType = 'dog' | 'cat' | 'both';
export type Category = 'organic' | 'grain-free' | 'dental' | 'training' | 'treats';

export interface PetSnack {
  id: string;
  name: string;
  description: string;
  petType: PetType;
  categories: Category[];
  brand: string;
  flavor: string;
  price: number;
  rating: {
    taste: number;
    quality: number;
    value: number;
    overall: number;
  };
  imageUrl: string;
  recommendedFor: string[];
  ingredients: string[];
  benefits: string[];
}

export const petSnacks: PetSnack[] = [
  {
    id: 'snack-1',
    name: 'Crunchy Chicken Bites',
    description: "Delicious freeze-dried chicken treats that dogs cannot resist. Made with 100% real chicken breast.",
    petType: 'dog',
    categories: ['organic', 'grain-free', 'treats'],
    brand: 'PawsDelight',
    flavor: 'Chicken',
    price: 12.99,
    rating: {
      taste: 5,
      quality: 4,
      value: 4,
      overall: 4.5
    },
    imageUrl: '/images/snacks/chicken-bites.jpg',
    recommendedFor: ['All dogs', 'Training rewards', 'Picky eaters'],
    ingredients: ['Chicken breast', 'Mixed tocopherols (natural preservative)'],
    benefits: ['High protein', 'Single ingredient', 'No fillers or additives']
  },
  {
    id: 'snack-2',
    name: 'Salmon Soft Chews',
    description: 'Soft and chewy salmon treats packed with omega-3 fatty acids for a healthy coat and skin.',
    petType: 'cat',
    categories: ['grain-free', 'treats'],
    brand: 'Meow Mix',
    flavor: 'Salmon',
    price: 9.99,
    rating: {
      taste: 5,
      quality: 5,
      value: 4,
      overall: 4.7
    },
    imageUrl: '/images/snacks/salmon-chews.jpg',
    recommendedFor: ['Adult cats', 'Cats with dry skin', 'Picky eaters'],
    ingredients: ['Salmon', 'Chicken meal', 'Tapioca starch', 'Fish oil', 'Natural flavors'],
    benefits: ['Omega-3 fatty acids', 'Supports skin and coat health', 'No artificial preservatives']
  },
  {
    id: 'snack-3',
    name: 'Dental Fresh Sticks',
    description: 'Triple-action dental sticks that clean teeth, freshen breath, and reduce plaque and tartar.',
    petType: 'dog',
    categories: ['dental', 'treats'],
    brand: 'DentaFresh',
    flavor: 'Mint',
    price: 14.99,
    rating: {
      taste: 4,
      quality: 5,
      value: 4,
      overall: 4.3
    },
    imageUrl: '/images/snacks/dental-sticks.jpg',
    recommendedFor: ['Dogs with dental issues', 'Bad breath', 'Daily dental care'],
    ingredients: ['Rice flour', 'Wheat starch', 'Glycerin', 'Calcium carbonate', 'Natural mint flavor'],
    benefits: ['Reduces plaque and tartar', 'Freshens breath', 'Supports dental health']
  },
  {
    id: 'snack-4',
    name: 'Training Reward Bits',
    description: "Small, low-calorie treats perfect for training sessions. Doesn't crumble in your pocket!",
    petType: 'dog',
    categories: ['training', 'treats'],
    brand: 'TrainPro',
    flavor: 'Beef',
    price: 8.99,
    rating: {
      taste: 5,
      quality: 4,
      value: 5,
      overall: 4.8
    },
    imageUrl: '/images/snacks/training-bits.jpg',
    recommendedFor: ['Puppies', 'Training sessions', 'Frequent rewards'],
    ingredients: ['Beef liver', 'Wheat flour', 'Molasses', 'Mixed tocopherols'],
    benefits: ['Low calorie', 'High value reward', 'Perfect training size']
  },
  {
    id: 'snack-5',
    name: 'Catnip Crunchers',
    description: 'Crunchy treats infused with premium catnip to stimulate play and provide enrichment.',
    petType: 'cat',
    categories: ['organic', 'treats'],
    brand: 'CatJoy',
    flavor: 'Catnip & Chicken',
    price: 7.99,
    rating: {
      taste: 5,
      quality: 4,
      value: 5,
      overall: 4.6
    },
    imageUrl: '/images/snacks/catnip-crunchers.jpg',
    recommendedFor: ['Adult cats', 'Playful cats', 'Enrichment'],
    ingredients: ['Chicken meal', 'Brown rice', 'Dried catnip', 'Brewers yeast'],
    benefits: ['Stimulates play', 'Provides enrichment', 'Supports dental health']
  },
  {
    id: 'snack-6',
    name: 'Veggie Crunch Biscuits',
    description: 'Plant-based crunchy biscuits made with wholesome vegetables and brown rice.',
    petType: 'dog',
    categories: ['organic', 'treats'],
    brand: 'GreenPaws',
    flavor: 'Pumpkin & Carrot',
    price: 10.99,
    rating: {
      taste: 4,
      quality: 5,
      value: 4,
      overall: 4.4
    },
    imageUrl: '/images/snacks/veggie-biscuits.jpg',
    recommendedFor: ['Dogs with meat sensitivities', 'Weight management', 'Vegetarian preference'],
    ingredients: ['Brown rice flour', 'Pumpkin', 'Carrots', 'Peas', 'Flaxseed'],
    benefits: ['Plant-based nutrition', 'Fiber-rich', 'Supports digestive health']
  },
  {
    id: 'snack-7',
    name: 'Tuna Flakes',
    description: 'Pure freeze-dried tuna flakes that can be served as a treat or meal topper.',
    petType: 'cat',
    categories: ['grain-free', 'treats'],
    brand: 'OceanHarvest',
    flavor: 'Tuna',
    price: 11.99,
    rating: {
      taste: 5,
      quality: 5,
      value: 4,
      overall: 4.7
    },
    imageUrl: '/images/snacks/tuna-flakes.jpg',
    recommendedFor: ['All cats', 'Picky eaters', 'Meal toppers'],
    ingredients: ['100% freeze-dried tuna'],
    benefits: ['High protein', 'Single ingredient', 'No additives or preservatives']
  },
  {
    id: 'snack-8',
    name: 'Joint Support Chews',
    description: 'Soft chews formulated with glucosamine and chondroitin to support joint health and mobility.',
    petType: 'both',
    categories: ['treats'],
    brand: 'VitalPet',
    flavor: 'Peanut Butter',
    price: 16.99,
    rating: {
      taste: 4,
      quality: 5,
      value: 4,
      overall: 4.5
    },
    imageUrl: '/images/snacks/joint-chews.jpg',
    recommendedFor: ['Senior pets', 'Active dogs', 'Pets with joint issues'],
    ingredients: ['Peanut butter', 'Brewers yeast', 'Glucosamine HCL', 'Chondroitin sulfate', 'MSM'],
    benefits: ['Supports joint health', 'Promotes mobility', 'Anti-inflammatory properties']
  },
  {
    id: 'snack-9',
    name: 'Calming Soft Chews',
    description: 'Calming treats with chamomile and L-theanine to reduce anxiety and stress.',
    petType: 'both',
    categories: ['treats'],
    brand: 'ZenPet',
    flavor: 'Turkey & Chamomile',
    price: 15.99,
    rating: {
      taste: 4,
      quality: 5,
      value: 4,
      overall: 4.4
    },
    imageUrl: '/images/snacks/calming-chews.jpg',
    recommendedFor: ['Anxious pets', 'Travel stress', 'Noise phobias'],
    ingredients: ['Turkey', 'Chamomile extract', 'L-theanine', 'Passion flower', 'Ginger root'],
    benefits: ['Reduces anxiety', 'Promotes relaxation', 'No drowsiness']
  },
  {
    id: 'snack-10',
    name: 'Jerky Strips',
    description: 'Chewy jerky strips made from premium beef. Perfect for longer chewing sessions.',
    petType: 'dog',
    categories: ['grain-free', 'treats'],
    brand: 'MeatMasters',
    flavor: 'Beef',
    price: 13.99,
    rating: {
      taste: 5,
      quality: 4,
      value: 4,
      overall: 4.5
    },
    imageUrl: '/images/snacks/jerky-strips.jpg',
    recommendedFor: ['Medium to large dogs', 'Power chewers', 'Treat motivation'],
    ingredients: ['Beef', 'Vegetable glycerin', 'Salt', 'Mixed tocopherols'],
    benefits: ['Long-lasting chew', 'High protein', 'Satisfies chewing instinct']
  },
  {
    id: 'snack-11',
    name: 'Seafood Medley',
    description: 'A delicious mix of freeze-dried shrimp, tuna, and whitefish that cats go crazy for.',
    petType: 'cat',
    categories: ['grain-free', 'treats'],
    brand: 'OceanHarvest',
    flavor: 'Seafood Mix',
    price: 12.99,
    rating: {
      taste: 5,
      quality: 5,
      value: 4,
      overall: 4.8
    },
    imageUrl: '/images/snacks/seafood-medley.jpg',
    recommendedFor: ['All cats', 'Seafood lovers', 'Special treats'],
    ingredients: ['Freeze-dried shrimp', 'Freeze-dried tuna', 'Freeze-dried whitefish'],
    benefits: ['High protein', 'Rich in omega-3', 'No additives']
  },
  {
    id: 'snack-12',
    name: 'Peanut Butter Cookies',
    description: 'Crunchy peanut butter cookies that make the perfect everyday treat.',
    petType: 'dog',
    categories: ['treats'],
    brand: 'PawsDelight',
    flavor: 'Peanut Butter',
    price: 9.99,
    rating: {
      taste: 5,
      quality: 4,
      value: 5,
      overall: 4.6
    },
    imageUrl: '/images/snacks/pb-cookies.jpg',
    recommendedFor: ['All dogs', 'Everyday treats', 'Peanut butter lovers'],
    ingredients: ['Whole wheat flour', 'Peanut butter', 'Eggs', 'Honey', 'Cinnamon'],
    benefits: ['Satisfying crunch', 'Made with human-grade ingredients', 'No artificial preservatives']
  }
];

export const getSnackById = (id: string): PetSnack | undefined => {
  return petSnacks.find(snack => snack.id === id);
};

export const getSnacksByPetType = (petType: PetType | 'all'): PetSnack[] => {
  if (petType === 'all') return petSnacks;
  return petSnacks.filter(snack => snack.petType === petType || snack.petType === 'both');
};

export const getSnacksByCategory = (category: Category): PetSnack[] => {
  return petSnacks.filter(snack => snack.categories.includes(category));
};

export const getRelatedSnacks = (currentSnackId: string, count: number = 4): PetSnack[] => {
  const currentSnack = getSnackById(currentSnackId);
  if (!currentSnack) return [];
  
  // Get snacks with the same pet type and at least one matching category
  const related = petSnacks.filter(snack => 
    snack.id !== currentSnackId && 
    (snack.petType === currentSnack.petType || snack.petType === 'both' || currentSnack.petType === 'both') &&
    snack.categories.some(category => currentSnack.categories.includes(category))
  );
  
  // Sort by number of matching categories
  related.sort((a, b) => {
    const aMatches = a.categories.filter(category => currentSnack.categories.includes(category)).length;
    const bMatches = b.categories.filter(category => currentSnack.categories.includes(category)).length;
    return bMatches - aMatches;
  });
  
  return related.slice(0, count);
};

export const getAllCategories = (): Category[] => {
  return ['organic', 'grain-free', 'dental', 'training', 'treats'];
};

export const getCategoryName = (category: Category): string => {
  const names: Record<Category, string> = {
    'organic': 'Organic',
    'grain-free': 'Grain-Free',
    'dental': 'Dental Care',
    'training': 'Training Rewards',
    'treats': 'Treats & Snacks'
  };
  return names[category];
};