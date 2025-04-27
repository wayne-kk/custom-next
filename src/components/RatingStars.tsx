interface RatingStarsProps {
  rating: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function RatingStars({ rating, label, size = 'md' }: RatingStarsProps) {
  // Function to render stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    const starSizes = {
      sm: 'text-sm',
      md: 'text-xl',
      lg: 'text-2xl'
    };
    
    return (
      <div className={`flex ${starSizes[size]}`}>
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
    <div className="flex items-center">
      {label && <span className="mr-2 font-comfortaa text-gray-600">{label}</span>}
      {renderStars()}
      <span className="ml-1 text-gray-500 font-comfortaa">{rating.toFixed(1)}</span>
    </div>
  );
}