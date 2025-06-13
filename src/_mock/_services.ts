import { paths } from 'src/routes/paths';

import { _mock } from './_mock';
import { ROOM_SERVICES } from './_room-services';
import { FOOD_SERVICES } from './_food-services';
import { TAXI_SERVICES } from './_taxi-services';
import { GUIDE_SERVICES } from './_guide-services';
import { EXTRA_SERVICES } from './_extra-services';
import { ENTERTAINMENT_SERVICES } from './_entertainment-services';

// ----------------------------------------------------------------------

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

export const _service = ALL_SERVICES.map((service, index) => {
  const commonProps = {
    id: service.id,
    title: service.title,
    icon: service.icon,
    category: service.category,
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
  };

  if (service.category === 'Хоол' && 'mealType' in service) {
    return {
      ...commonProps,
      mealType: service.mealType,
    };
  }

  return commonProps;
});

export const _servicesByCategories = Array.from(
  new Set(ALL_SERVICES.map((service) => service.category))
).map((category, index) => {
  const servicesInCategory = ALL_SERVICES.filter((service) => service.category === category);
  const firstService = servicesInCategory[0];

  return {
    id: String(index + 1), // Simple ID generation
    name: category,
    icon: firstService?.icon || '/assets/icons/services/service-bell.svg', // Use first service's icon or a default
    path:
      paths.service[category.toLowerCase().replace(/ /g, '') as keyof typeof paths.service] ||
      paths.service.root, // Dynamic path
    subcategories: Array.from(
      new Set(servicesInCategory.map((service) => service.subcategory))
    ).map((subcategory, subIndex) => ({
      id: `${index + 1}-${subIndex + 1}`,
      name: subcategory,
      path:
        paths.service[category.toLowerCase().replace(/ /g, '') as keyof typeof paths.service] ||
        paths.service.root, // Subcategory path might need more specific routing
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
