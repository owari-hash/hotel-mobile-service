export type IHotelServiceProps = {
  id: string;
  title: string;
  icon: string;
  content: string;
  deadline: string;
  available: boolean;
  favorited: boolean;
  likes: number;
  ratings: number;
  numberOfReviews: number;
  location: string;
  category: string;
};

export type IHotelCategoryProps = {
  id: string;
  name: string;
  icon: string;
  path: string;
  totalService?: number;
};

export type Service = {
  id: string;
  title: string;
  content?: string;
  category: string;
  subcategory?: string;

  icon: string;
  price?: number;
  location?: string;
  deadline?: string;
  ratings?: number;
  numberOfReviews?: number;
};
