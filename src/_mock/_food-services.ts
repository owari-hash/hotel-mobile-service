import { _mock } from './_mock';

export const MEAL_CATEGORIES = [
  { id: 'all', label: 'Бүгд' },
  { id: 'breakfast', label: 'Өглөөний хоол' },
  { id: 'lunch', label: 'Өдрийн хоол' },
  { id: 'dinner', label: 'Оройн хоол' },
  { id: 'drinks', label: 'Ундаа' },
  { id: 'snacks', label: 'Зууш' },
];

export const FOOD_SERVICES = [
  {
    id: _mock.id(1),
    title: 'Өглөөний цай',
    icon: '/assets/icons/services/service-food.svg',
    image: '/assets/Food/food.jpg',
    category: 'Хоол',
    subcategory: 'Өглөөний хоол',
    mealType: 'breakfast',
    price: 25000,
    content: 'Цай, талх, өндөг, жимс.',
  },
  {
    id: _mock.id(2),
    title: 'Өдрийн хоол - Цагаан хоол',
    icon: '/assets/icons/services/service-food.svg',
    image: '/assets/Food/food.jpg',
    category: 'Хоол',
    subcategory: 'Өдрийн хоол',
    mealType: 'lunch',
    price: 35000,
    content: 'Ногооны салат, будаа, шөл.',
  },
  {
    id: _mock.id(3),
    title: 'Оройн хоол - Махан хоол',
    icon: '/assets/icons/services/service-food.svg',
    image: '/assets/Food/food.jpg',
    category: 'Хоол',
    subcategory: 'Оройн хоол',
    mealType: 'dinner',
    price: 45000,
    content: 'Махтай хоол, салат, амттан',
  },
  {
    id: _mock.id(4),
    title: 'Кофе',
    icon: '/assets/icons/services/service-food.svg',
    image: '/assets/Food/food.jpg',
    category: 'Хоол',
    subcategory: 'Ундаа',
    mealType: 'drinks',
    price: 8000,
  },
  {
    id: _mock.id(5),
    title: 'Жүүс',
    icon: '/assets/icons/services/service-food.svg',
    image: '/assets/Food/food.jpg',
    category: 'Хоол',
    subcategory: 'Ундаа',
    mealType: 'drinks',
    price: 7000,
  },
  {
    id: _mock.id(6),
    title: 'Чипс & Самар',
    icon: '/assets/icons/services/service-food.svg',
    image: '/assets/Food/food.jpg',
    category: 'Хоол',
    subcategory: 'Зууш',
    mealType: 'snacks',
    price: 15000,
  },
  // ... add more items as needed
];

export const FOOD_SUBCATEGORIES = [
  {
    name: 'Өглөөний хоол',
    icon: '/assets/icons/services/service-food.svg',
    items: FOOD_SERVICES.filter((item) => item.subcategory === 'Өглөөний хоол'),
  },
  {
    name: 'Өдрийн хоол',
    icon: '/assets/icons/services/service-food.svg',
    items: FOOD_SERVICES.filter((item) => item.subcategory === 'Өдрийн хоол'),
  },
  {
    name: 'Оройн хоол',
    icon: '/assets/icons/services/service-food.svg',
    items: FOOD_SERVICES.filter((item) => item.subcategory === 'Оройн хоол'),
  },
  {
    name: 'Ундаа',
    icon: '/assets/icons/services/service-food.svg',
    items: FOOD_SERVICES.filter((item) => item.subcategory === 'Ундаа'),
  },
  {
    name: 'Зууш',
    icon: '/assets/icons/services/service-food.svg',
    items: FOOD_SERVICES.filter((item) => item.subcategory === 'Зууш'),
  },
];
