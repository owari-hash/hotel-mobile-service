import { _mock } from './_mock';

export const ENTERTAINMENT_SERVICES = [
  {
    id: _mock.id(10),
    title: 'Спа массаж',
    icon: 'carbon:tool-box',
    category: 'Энтертайнмент',
    subcategory: 'Спа массаж',
    price: 120000,
  },
  {
    id: _mock.id(11),
    title: 'Фитнесс',
    icon: 'carbon:tool-box',
    category: 'Энтертайнмент',
    subcategory: 'Фитнесс',
    price: 50000,
  },
  {
    id: _mock.id(12),
    title: 'Усан сан',
    icon: 'carbon:tool-box',
    category: 'Энтертайнмент',
    subcategory: 'Усан сан',
    price: 80000,
  },
  {
    id: _mock.id(50),
    title: 'Караоке',
    icon: 'carbon:tool-box',
    category: 'Энтертайнмент',
    subcategory: 'Караоке',
    price: 100000,
  },
  {
    id: _mock.id(51),
    title: 'Бильярд',
    icon: 'carbon:tool-box',
    category: 'Энтертайнмент',
    subcategory: 'Бильярд',
    price: 20000,
  },
  {
    id: _mock.id(52),
    title: 'Боулинг',
    icon: 'carbon:tool-box',
    category: 'Энтертайнмент',
    subcategory: 'Боулинг',
    price: 30000,
  },
  {
    id: _mock.id(53),
    title: 'Кино театр',
    icon: 'carbon:tool-box',
    category: 'Энтертайнмент',
    subcategory: 'Кино театр',
    price: 25000,
  },
];

export const ENTERTAINMENT_SUBCATEGORIES = [
  {
    name: 'Спа массаж',
    icon: '/assets/icons/services/service-entertainment.svg',
    items: ENTERTAINMENT_SERVICES.filter((item) => item.subcategory === 'Спа массаж'),
  },
  {
    name: 'Фитнесс',
    icon: '/assets/icons/services/service-entertainment.svg',
    items: ENTERTAINMENT_SERVICES.filter((item) => item.subcategory === 'Фитнесс'),
  },
  {
    name: 'Усан сан',
    icon: '/assets/icons/services/service-entertainment.svg',
    items: ENTERTAINMENT_SERVICES.filter((item) => item.subcategory === 'Усан сан'),
  },
  {
    name: 'Караоке',
    icon: '/assets/icons/services/service-entertainment.svg',
    items: ENTERTAINMENT_SERVICES.filter((item) => item.subcategory === 'Караоке'),
  },
  {
    name: 'Бильярд',
    icon: '/assets/icons/services/service-entertainment.svg',
    items: ENTERTAINMENT_SERVICES.filter((item) => item.subcategory === 'Бильярд'),
  },
  {
    name: 'Боулинг',
    icon: '/assets/icons/services/service-entertainment.svg',
    items: ENTERTAINMENT_SERVICES.filter((item) => item.subcategory === 'Боулинг'),
  },
  {
    name: 'Кино театр',
    icon: '/assets/icons/services/service-entertainment.svg',
    items: ENTERTAINMENT_SERVICES.filter((item) => item.subcategory === 'Кино театр'),
  },
];
