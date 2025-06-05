import { add } from 'date-fns';

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
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
  '/assets/icons/services/test.svg',
];

// Make sure these icon files exist in your public folder at:
// public/assets/icons/services/

export const _service = [...Array(12)].map((_, index) => {
  const amenities = SERVICE_AMENITIES_OPTIONS.slice(0, 5).map((option) => option.label);

  const type = (index % 2 && 'apartment') || (index % 4 && 'villa') || 'hotel';

  const category = (index % 2 && 'premium') || (index % 4 && 'standard') || 'deluxe';

  const company = {
    name: _mock.companyName(index),
    logo: _mock.image.company(index),
    phoneNumber: _mock.phoneNumber(index),
  };

  return {
    id: _mock.id(index),
    type,
    category,
    title: _mock.serviceTitle(index),
    content: CONTENT,
    price: _mock.number.price(index),
    createdAt: new Date(),
    available: true,
    favorited: [2, 4].includes(index),
    location: _mock.address.fullAddress(index),
    ratings: _mock.number.rating(index),
    numberOfReviews: _mock.number.nativeL(index),
    deadline: add(new Date(), { months: index }),
    amenities,
    details: {
      amenities,
      features: ['Free Wifi', '24/7 Service', 'Cleaning'],
      includes: ['Breakfast', 'Parking', 'Wifi'],
    },
    images: {
      small: _mock.image.travel(index),
      medium: _mock.image.travel(index + 1),
      large: _mock.image.travel(index + 2),
    },
    likes: _mock.number.nativeL(index),
    totalViews: _mock.number.nativeL(index),
    company,
  };
});

export const _servicesByCategories: IHotelCategoryProps[] = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  icon: ICONS[index],
  name:
    ['Зочид буудал', 'Амралт', 'Виллa', 'Resort', 'Cottage', 'Cabin', 'Camping'][index] || 'Other',
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
