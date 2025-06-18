import { _mock } from './_mock';

export const ROOM_SERVICE_CATEGORIES = [
  { id: 'all', label: 'Бүгд' },
  { id: 'cleaning', label: 'Өрөө цэвэрлэгээ' },
  { id: 'laundry', label: 'Хувцас угаалга' },
  { id: 'maintenance', label: 'Засвар үйлчилгээ' },
  { id: 'extra_bed', label: 'Нэмэлт ор' },
];

export const ROOM_SERVICES = [
  {
    id: _mock.id(1),
    title: 'Өрөө цэвэрлэгээ',
    icon: 'carbon:tool-box',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Өрөө цэвэрлэгээ',
    price: 0,
    content: 'Өрөөг бүрэн цэвэрлэнэ.',
  },
  {
    id: _mock.id(2),
    title: 'Хувцас угаалга (Энгийн)',
    icon: 'carbon:tool-box',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Хувцас угаалга',
    price: 15000,
    content: 'Энгийн хувцас угаалга, индүүдлэг.',
  },
  {
    id: _mock.id(3),
    title: 'Хувцас угаалга (Хими цэвэрлэгээ)',
    icon: 'carbon:tool-box',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Хувцас угаалга',
    price: 30000,
    content: 'Хими цэвэрлэгээ шаардлагатай хувцас.',
  },
  {
    id: _mock.id(4),
    title: 'Агааржуулагчийн засвар',
    icon: 'carbon:tool-box',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Засвар үйлчилгээ',
    price: 0,
    content: 'Агааржуулагчийн хэвийн ажиллагааг хангана.',
  },
  {
    id: _mock.id(5),
    title: 'Сантехникийн засвар',
    icon: 'carbon:tool-box',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Засвар үйлчилгээ',
    price: 0,
    content: 'Ус алдагдах, бөглөрөх зэрэг асуудлыг шийдвэрлэнэ.',
  },
  {
    id: _mock.id(6),
    title: 'Нэмэлт ор',
    icon: 'carbon:tool-box',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Нэмэлт ор',
    price: 50000,
    content: 'Нэг хүний нэмэлт ор.',
  },
];

export const ROOM_SUBCATEGORIES = [
  {
    name: 'Өрөө цэвэрлэгээ',
    icon: '/assets/icons/services/service-bell.svg',
    items: ROOM_SERVICES.filter((item) => item.subcategory === 'Өрөө цэвэрлэгээ'),
  },
  {
    name: 'Хувцас угаалга',
    icon: '/assets/icons/services/service-extra.svg',
    items: ROOM_SERVICES.filter((item) => item.subcategory === 'Хувцас угаалга'),
  },
  {
    name: 'Засвар үйлчилгээ',
    icon: '/assets/icons/services/service-bell.svg',
    items: ROOM_SERVICES.filter((item) => item.subcategory === 'Засвар үйлчилгээ'),
  },
  {
    name: 'Нэмэлт ор',
    icon: '/assets/icons/services/service-bell.svg',
    items: ROOM_SERVICES.filter((item) => item.subcategory === 'Нэмэлт ор'),
  },
];
