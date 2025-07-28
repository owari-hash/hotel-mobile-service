import { paths } from 'src/routes/paths';

import { _mock } from './_mock';
import { ROOM_SERVICES } from './_room-services';
import { FOOD_SERVICES } from './_food-services';
import { TAXI_SERVICES } from './_taxi-services';
import { GUIDE_SERVICES } from './_guide-services';
import { EXTRA_SERVICES } from './_extra-services';
import { ENTERTAINMENT_SERVICES } from './_entertainment-services';

// ----------------------------------------------------------------------

export const _hotelServiceTypes: Category[] = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.serviceCategories[index],
  source: 'hotelServiceType',
  path: paths.service.category(_mock.id(index)),
  totalService: _mock.number.nativeL(index),
  image: _mock.image.travel(index),
}));

export const _hotelServices = [...Array(10)].map((_, index) => ({
  id: _mock.id(index),
  product_id: _mock.number.nativeL(index),
  name: _mock.serviceTitle(index),
  description: _mock.description(index),
  price: _mock.number.price(index),
  image: _mock.image.travel(index),
  service_type_id: _hotelServiceTypes[index % _hotelServiceTypes.length],
  active: true,
}));

export const _hotelRoomAmenityTypes: Category[] = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.roomAmenityCategories[index],
  source: 'hotel_room_amenity',
  path: paths.service.category(_mock.id(index)),
  totalService: _mock.number.nativeL(index),
  icon: _mock.image.travel(index),
}));

export const _hotelRoomAmenities = [...Array(15)].map((_, index) => ({
  id: _mock.id(index),
  product_id: _mock.number.nativeL(index),
  name: _mock.roomAmenityNames[index % _mock.roomAmenityNames.length],
  icon: _mock.image.travel(index),
  description: _mock.description(index),
  amenities_category_id: _hotelRoomAmenityTypes[index % _hotelRoomAmenityTypes.length].id,
  amenities_category_name: _hotelRoomAmenityTypes[index % _hotelRoomAmenityTypes.length].name,
  active: true,
  amenity_type: _mock.number.nativeL(index),
}));

export const SERVICE_AMENITIES_OPTIONS = [
  { value: 'Wifi', label: 'Wifi' },
  { value: 'Кондишн', label: 'Кондишн' },
  { value: 'Угаалгын өрөө', label: 'Угаалгын өрөө' },
  { value: 'Зочны өрөө', label: 'Зочны өрөө' },
  { value: 'Гал тогоо', label: 'Гал тогоо' },
  { value: 'Машины зогсоол', label: 'Машины зогсоол' },
  { value: 'Спорт заал', label: 'Спорт заал' },
  { value: 'Усан сан', label: 'Усан сан' },
  { value: 'Хүүхдийн тоглоомын өрөө', label: 'Хүүхдийн тоглоомын өрөө' },
  { value: 'Сауна', label: 'Сауна' },
];

import { Service, Category } from 'src/types/service';

interface BaseService {
  id: string;
  title: string;
  icon: string;
  category: string;
  price: number;
  content?: string;
  subcategory?: string;
  mealType?: string;
}

const ALL_SERVICES: BaseService[] = [
  ...ROOM_SERVICES,
  ...EXTRA_SERVICES,
  ...FOOD_SERVICES,
  ...ENTERTAINMENT_SERVICES,
  ...TAXI_SERVICES,
  ...GUIDE_SERVICES,
];

export const _service: Service[] = ALL_SERVICES.map((service, index) => {
  const commonProps = {
    id: service.id,
    name: service.title, // Map title to name for ProductTemplate
    title: service.title,
    icon: service.icon,
    category: {
      id: service.category, // Placeholder, ideally link to actual category object
      name: service.category,
      source: 'service' as const, // All these are services
    } as Category, // Explicitly cast to Category
    subcategory: service.subcategory,
    price: service.price,
    content: service.content || '',
    deadline: '24/7',
    available: true,
    favorited: [1, 3].includes(index),
    likes: _mock.number.nativeL(index),
    ratings: _mock.number.rating(index),
    numberOfReviews: _mock.number.nativeL(index),
    location: _mock.address.fullAddress(index),
    active: true, // Assuming active by default for mock services
    categ_id: {
      id: service.category,
      name: service.category,
      source: 'service' as const,
    } as Category, // Explicitly cast to Category
  };

  if (service.category === 'Хоол' && 'mealType' in service) {
    return {
      ...commonProps,
      mealType: service.mealType,
    };
  }

  return commonProps;
});

export const _servicesByCategories: Category[] = Array.from(
  new Set(ALL_SERVICES.map((service) => service.category))
).map((category, index) => {
  const servicesInCategory = ALL_SERVICES.filter((service) => service.category === category);
  const firstService = servicesInCategory[0];

  const slug = category.toLowerCase().replace(/ /g, '-'); // Generate slug from category name
  return {
    id: String(index + 1), // Simple ID generation
    name: category,
    slug, // Add slug field
    icon:
      (category === 'Өрөөний үйлчилгээ' && '/assets/icons/services/service-bell.svg') ||
      (category === 'Нэмэлт үйлчилгээ' && '/assets/icons/services/service-extra.svg') ||
      (category === 'Хоол' && '/assets/icons/services/service-food.svg') ||
      (category === 'Энтертайнмент' && '/assets/icons/services/service-entertainment.svg') ||
      (category === 'Такси' && '/assets/icons/services/service-taxi.svg') ||
      (category === 'Хөтөч' && '/assets/icons/services/service-guide.svg') ||
      '/assets/icons/services/service-bell.svg', // Fallback to default
    image:
      (category === 'Өрөөний үйлчилгээ' && '/assets/Food/food.jpg') ||
      (category === 'Нэмэлт үйлчилгээ' && '/assets/Food/food.jpg') ||
      (category === 'Хоол' && '/assets/Food/food.jpg') ||
      (category === 'Энтертайнмент' && '/assets/Food/food.jpg') ||
      (category === 'Такси' && '/assets/Food/food.jpg') ||
      (category === 'Хөтөч' && '/assets/Food/food.jpg') ||
      (category === 'test' && '/assets/Food/food.jpg') ||
      '/assets/images/category_default.jpg', // Fallback to default image
    path: paths.service.details(slug), // Use dynamic path with slug
    source: 'service' as const, // Explicitly define source
    subcategories: Array.from(
      new Set(servicesInCategory.map((service) => service.subcategory))
    ).map((subcategory, subIndex) => ({
      id: `${index + 1}-${subIndex + 1}`,
      name: subcategory || '', // Ensure name is a string
      path: paths.service.details(slug), // Subcategory path also uses dynamic slug
      icon: firstService.icon, // Use the icon of the first service in the category for subcategories
    })),
  };
});

export const _servicesRecommended = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.serviceTitle(index),
  coverUrl: _mock.image.travel(index),
  price: _mock.number.price(index),
  rating: _mock.number.rating(index),
  numberOfReviews: _mock.number.nativeL(index),
}));
