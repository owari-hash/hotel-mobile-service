import { IHotelCategoryProps } from 'src/types/service';

import { _mock } from './_mock';

// ----------------------------------------------------------------------

const CONTENT = `
<h5>Үйлчилгээний тайлбар</h5>
<br/>
<p>Тухайн өрөөний тайлбар, онцлог, давуу тал, үйлчилгээний нөхцөл гэх мэт мэдээллийг энд бичнэ.</p>

<br/>
<br/>

<h5>Үндсэн үйлчилгээнүүд</h5>
<br/>
<ul>
  <li>Өрөөний цэвэрлэгээ</li>
  <li>24/7 үйлчилгээ</li>
  <li>Wifi</li>
  <li>Зочны үйлчилгээ</li>
  <li>Ариун цэврийн өрөө</li>
  <li>Кондишн</li>
  <li>Зочны өрөө</li>
</ul>
`;

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

const ICONS = [
  '/assets/icons/services/service-bell.svg',
  '/assets/icons/services/service-extra.svg',
  '/assets/icons/services/service-food.svg',
  '/assets/icons/services/service-entertainment.svg',
  '/assets/icons/services/service-taxi.svg',
  '/assets/icons/services/service-guide.svg',
];

const HOTEL_SERVICES = [
  // Өрөөний үйлчилгээ
  {
    title: 'Өрөө цэвэрлэх',
    icon: 'carbon:clean',
    category: 'Өрөөний үйлчилгээ',
    price: 25000,
  },
  {
    title: 'Өрөөний үйлчилгээ',
    icon: 'carbon:room-service',
    category: 'Өрөөний үйлчилгээ',
    price: 15000,
  },
  {
    title: 'Ор дэвсгэр солих',
    icon: 'carbon:bed',
    category: 'Өрөөний үйлчилгээ',
    price: 10000,
  },

  // Нэмэлт үйлчилгээ
  {
    title: 'Хувцас угаах',
    icon: 'carbon:wash',
    category: 'Нэмэлт үйлчилгээ',
    price: 20000,
  },
  {
    title: 'Хувцас индүүдэх',
    icon: 'carbon:iron',
    category: 'Нэмэлт үйлчилгээ',
    price: 15000,
  },
  {
    title: 'Өрөө үнэртүүлэх',
    icon: 'carbon:scent',
    category: 'Нэмэлт үйлчилгээ',
    price: 5000,
  },

  // Хоол
  {
    title: 'Өрөөнд хоол захиалах',
    icon: 'carbon:restaurant',
    category: 'Хоол',
    price: 45000,
  },
  {
    title: 'Өглөөний цай',
    icon: 'carbon:cafe',
    category: 'Хоол',
    price: 25000,
  },
  {
    title: 'Мини бар',
    icon: 'carbon:bar',
    category: 'Хоол',
    price: 35000,
  },

  // Энтертайнмент
  {
    title: 'Спа массаж',
    icon: 'carbon:spa',
    category: 'Энтертайнмент',
    price: 120000,
  },
  {
    title: 'Фитнесс',
    icon: 'carbon:gym',
    category: 'Энтертайнмент',
    price: 50000,
  },
  {
    title: 'Усан сан',
    icon: 'carbon:swim',
    category: 'Энтертайнмент',
    price: 80000,
  },

  // Такси
  {
    title: 'Такси захиалах',
    icon: 'carbon:taxi',
    category: 'Такси',
    price: 30000,
  },
  {
    title: 'Нисэх онгоцны буудал',
    icon: 'carbon:airport',
    category: 'Такси',
    price: 50000,
  },
  {
    title: 'Хот тойрох',
    icon: 'carbon:car',
    category: 'Такси',
    price: 100000,
  },

  // Хөтөч
  {
    title: 'Хөтөч захиалах',
    icon: 'carbon:guide',
    category: 'Хөтөч',
    price: 150000,
  },
  {
    title: 'Орчуулагч',
    icon: 'carbon:translate',
    category: 'Хөтөч',
    price: 100000,
  },
  {
    title: 'Аялал',
    icon: 'carbon:map',
    category: 'Хөтөч',
    price: 200000,
  },
];

export const _service = HOTEL_SERVICES.map((service, index) => ({
  id: _mock.id(index),
  title: service.title,
  icon: service.icon,
  category: service.category,
  content: 'Үйлчилгээний дэлгэрэнгүй тайлбар энд бичигдэнэ...',
  deadline: '24/7',
  available: true,
  favorited: [1, 3].includes(index),
  likes: _mock.number.nativeL(index),
  ratings: _mock.number.rating(index),
  numberOfReviews: _mock.number.nativeL(index),
  location: _mock.address.fullAddress(index),
}));

export const _servicesByCategories: IHotelCategoryProps[] = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  icon: ICONS[index],
  name:
    ['Өрөөний үйлчилгээ', 'Нэмэлт үйлчилгээ', 'Хоол', 'Энтертайнмент', 'Такси', 'Хөтөч'][index] ||
    'Other',
  path: `/service/${_mock.slug(index)}`,

  totalService: _mock.number.nativeM(index),
}));

export const _servicesRecommended = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.serviceTitle(index),
  coverUrl: _mock.image.travel(index),
  price: _mock.number.price(index),
  rating: _mock.number.rating(index),
  numberOfReviews: _mock.number.nativeL(index),
}));
