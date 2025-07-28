export type Category = {
  id: string;
  name: string;
  complete_name?: string;
  parent_id?: number | null;
  parent_path?: string;
  parent?: number | null; // Add this line
  image?: string; // category image
  icon?: string; // optional for UI
  description?: string; // optional
  totalService?: number;

  // Useful for frontend
  source?:
    | 'product'
    | 'hotelServiceType'
    | 'hotelRoomAmenity'
    | 'productCategory'
    | 'hotelService'
    | 'hotelRoomAmenity';
  path?: string;
  subcategories?: {
    id: string;
    name?: string;
    path?: string;
    icon?: string;
  }[];
};

export type HotelService = {
  id: number;
  product: number; // This links to a ProductTemplate ID
  service_categ: {
    id: number;
    name?: string;
    image?: string;
  };
  service_type_id?: {
    id: number;
    name: string;
    icon?: string;
  };
  create_uid: number | null;
  write_uid: number | null;
  create_date: string;
  write_date: string;

  // Optional frontend mapping
  name?: string;
  description?: string;
  image?: string;
  title?: string;
  icon?: string;
  category?: Category;
  content?: string;
};

export type HotelRoomAmenity = {
  id: string;
  product_id: number;
  name: string;
  icon: string;
  description: string;
  amenities_category_id: string;
  amenities_category_name: string;
  amenity_type: number;
  active: boolean;
};

export type HotelRoomAmenityCategoryDetail = {
  id: string;
  name: string;
  amenities: HotelRoomAmenity[];
};

export type ProductTemplate = {
  id: string;
  name: string;
  description?: string;
  list_price?: number;
  active: boolean;
  image_1920?: string;
  categ_id: Category;

  // Derived for frontend
  title: string;
  content?: string;
  image?: string;
  price?: number;
  icon?: string;
  location?: string;
  deadline?: string;
  ratings?: number;
  numberOfReviews?: number;
  subcategory?: string;
};

export type Product = ProductTemplate;
export type Service = ProductTemplate;
