import { _mock } from './_mock';

export const EXTRA_SERVICES = [
  {
    id: _mock.id(1),
    title: 'Угаалгын үйлчилгээ',
    icon: 'carbon:tool-box', // updated icon
    category: 'Нэмэлт үйлчилгээ',
    subcategory: 'Угаалга',
    price: 15000,
    content: 'Хувцас угаах үйлчилгээ',
  },
  {
    id: _mock.id(2),
    title: 'Индүүдэх үйлчилгээ',
    icon: 'carbon:tool-box', // updated icon
    category: 'Нэмэлт үйлчилгээ',
    subcategory: 'Угаалга',
    price: 10000,
    content: 'Хувцас индүүдэх үйлчилгээ',
  },
  {
    id: _mock.id(3),
    title: 'Фитнесс',
    icon: 'carbon:tool-box', // updated icon
    category: 'Нэмэлт үйлчилгээ',
    subcategory: 'Спорт',
    price: 25000,
    content: 'Фитнессийн төв',
  },
  {
    id: _mock.id(4),
    title: 'Усан сан',
    icon: 'carbon:tool-box', // updated icon
    category: 'Нэмэлт үйлчилгээ',
    subcategory: 'Спорт',
    price: 35000,
    content: 'Усан сангийн үйлчилгээ',
  },
  {
    id: _mock.id(5),
    title: 'Сауна',
    icon: 'carbon:tool-box', // updated icon
    category: 'Нэмэлт үйлчилгээ',
    subcategory: 'Спорт',
    price: 45000,
    content: 'Сауны үйлчилгээ',
  },
  // Add more extra services as needed
];

export const EXTRA_SUBCATEGORIES = [
  {
    name: 'Угаалга',
    icon: '/assets/icons/services/service-extra.svg',
    items: EXTRA_SERVICES.filter((item) => item.subcategory === 'Угаалга'),
  },
  {
    name: 'Спорт',
    icon: '/assets/icons/services/service-extra.svg',
    items: EXTRA_SERVICES.filter((item) => item.subcategory === 'Спорт'),
  },
];
