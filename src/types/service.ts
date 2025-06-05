export type IHotelServiceProps = {
  id: string;
  title: string;
  category: string;
  type: string;
  content: string;
  price: number;
  favorited: boolean;
  createdAt: Date | string | number;
  available: boolean;
  experience: string;
  location: string;
  ratings: number;
  numberOfReviews: number;
  deadline: Date | string | number;
  icon: string; // Added icon property
  name: string; // Added name for category display
  totalService?: number; // Added optional totalJobs for category count
  details: {
    amenities: string[];
    features: string[];
    includes: string[];
  };
  images: {
    small: string;
    medium: string;
    large: string;
  };
  likes: number;
  totalViews: number;
  skills?: string[];
  benefits?: string[];
  company?: {
    name: string;
    logo: string;
    phoneNumber: string;
  };
};

// Add this new type for categories
export type IHotelCategoryProps = {
  id: string;
  icon: string;
  name: string;
  totalService: number;
};
