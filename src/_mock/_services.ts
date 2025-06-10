import { _mock } from './_mock';

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

const HOTEL_SERVICES = [
  // Өрөөний үйлчилгээ
  {
    id: '0',
    title: 'Менежертэй холбогдох',
    icon: 'carbon:phone',
    category: 'Өрөөний үйлчилгээ',
    content: `Менежертэй холбогдох үйлчилгээ нь таны санал, хүсэлт, асуудлыг шуурхай шийдвэрлэхэд тусална.`,
  },
  {
    id: '1',
    title: 'Өрөө цэвэрлэх',
    icon: 'carbon:clean',
    category: 'Өрөөний үйлчилгээ',
    price: 12000,
    content: `
      Өрөө цэвэрлэх үйлчилгээ
      Таны өрөөг өдөр бүр стандартын дагуу цэвэрлэж, тав тухтай орчинг бүрдүүлнэ.

      Бүтэн өрөөний тоос соруулах
      Ариун цэврийн өрөө цэвэрлэх
      Тавилга арчих

    `,
  },
  {
    id: '2',

    title: 'Өрөөний үйлчилгээ',
    icon: 'carbon:room-service',
    category: 'Өрөөний үйлчилгээ',
    price: 15000,
  },
  {
    id: '3',

    title: 'Ор дэвсгэр солих',
    icon: 'carbon:bed',
    category: 'Өрөөний үйлчилгээ',
    price: 10000,
  },

  // Нэмэлт үйлчилгээ
  {
    id: '4',
    title: 'Хувцас угаах',
    icon: 'carbon:wash',
    category: 'Нэмэлт үйлчилгээ',
    price: 20000,
    content: `
      <h5>Хувцас угаах үйлчилгээ</h5>
      <p>Бид таны хувцсыг угааж, индүүдэж, анхилуун үнэртэй болгоно.</p>
      <ul>
        <li>Өдөрт 3 кг хүртэл хувцас угаах</li>
        <li>Хурдан шуурхай (24 цагийн дотор)</li>
        <li>Антиаллерген угаалгын бодис</li>
      </ul>
    `,
  },
  {
    id: '5',
    title: 'Хувцас индүүдэх',
    icon: 'carbon:iron',
    category: 'Нэмэлт үйлчилгээ',
    price: 15000,
  },
  {
    id: '6',
    title: 'Өрөө үнэртүүлэх',
    icon: 'carbon:scent',
    category: 'Нэмэлт үйлчилгээ',
    price: 5000,
  },

  // Хоол
  {
    id: '7',
    title: 'Өрөөнд хоол захиалах',
    icon: 'carbon:restaurant',
    category: 'Хоол',
    price: 45000,
    content: `
      <h5>Өрөөнд хоол хүргэлт</h5>
      <p>Манай мэргэжлийн тогоочоос шинэхэн, амттай хоолыг өрөөндөө захиалан авах боломжтой.</p>
      <ul>
        <li>Монгол болон Европ хоолнууд</li>
        <li>Хоолны тусгай цэс</li>
        <li>Хүргэлтийн хугацаа: 30 минут</li>
      </ul>
    `,
  },
  {
    id: '8',
    title: 'Өглөөний цай',
    icon: 'carbon:cafe',
    category: 'Хоол',
    price: 25000,
  },
  {
    id: '9',
    title: 'Мини бар',
    icon: 'carbon:bar',
    category: 'Хоол',
    price: 35000,
  },

  // Энтертайнмент
  {
    id: '10',
    title: 'Спа массаж',
    icon: 'carbon:spa',
    category: 'Энтертайнмент',
    price: 120000,
  },
  {
    id: '11',
    title: 'Фитнесс',
    icon: 'carbon:gym',
    category: 'Энтертайнмент',
    price: 50000,
  },
  {
    id: '12',
    title: 'Усан сан',
    icon: 'carbon:swim',
    category: 'Энтертайнмент',
    price: 80000,
  },

  // Такси
  {
    id: '13',
    title: 'Такси захиалах',
    icon: 'carbon:taxi',
    category: 'Такси',
    price: 30000,
  },
  {
    id: '14',
    title: 'Нисэх онгоцны буудал',
    icon: 'carbon:airport',
    category: 'Такси',
    price: 50000,
  },
  {
    id: '15',
    title: 'Хот тойрох',
    icon: 'carbon:car',
    category: 'Такси',
    price: 100000,
  },

  // Хөтөч
  {
    id: '16',
    title: 'Хөтөч захиалах',
    icon: 'carbon:guide',
    category: 'Хөтөч',
    price: 150000,
  },
  {
    id: '17',
    title: 'Орчуулагч',
    icon: 'carbon:translate',
    category: 'Хөтөч',
    price: 100000,
  },
  {
    id: '18',
    title: 'Аялал',
    icon: 'carbon:map',
    category: 'Хөтөч',
    price: 200000,
  },
  {
    id: '19',
    title: 'Нэмэлт гоо сайхны хэрэгсэл',
    icon: 'carbon:face-cool',
    category: 'Нэмэлт үйлчилгээ',
    price: 3000,
    content: `
      <h5>Гоо сайхны багц</h5>
      <p>Шампунь, шүршүүрийн гель, үсний ангижруулагч, лосьон, малгай, саван зэрэг хэрэгсэл орно.</p>
    `,
  },
  {
    id: '20',
    title: 'Хувийн багц',
    icon: 'carbon:kit',
    category: 'Нэмэлт үйлчилгээ',
    price: 5000,
    content: `
      <h5>Нэмэлт хэрэгслийн багц</h5>
      <p>Шүдний оо, сахлын багц, оёдлын багц, гоо сайхны хэрэгслүүд</p>
    `,
  },
  {
    id: '21',
    title: 'Уурын индүү',
    icon: 'carbon:machine',
    category: 'Нэмэлт үйлчилгээ',
    price: 10000,
  },
  {
    id: '22',
    title: 'Алчуур',
    icon: 'carbon:towel',
    category: 'Нэмэлт үйлчилгээ',
    price: 3000,
    content: `
      <h5>Алчуур</h5>
      <p>Биеийн, нүүрний болон гарын алчуур</p>
    `,
  },
  {
    id: '23',
    title: 'Дэр',
    icon: 'carbon:bed-double',
    category: 'Нэмэлт үйлчилгээ',
    price: 8000,
    content: `
      <h5>Дэр</h5>
      <p>Хатуу, зөөлөн, ортопед, будаатай дэр зэрэг төрлүүд</p>
    `,
  },
  {
    id: '24',
    title: 'Жорлонгийн цаас',
    icon: 'carbon:document',
    category: 'Нэмэлт үйлчилгээ',
    price: 1500,
  },
  {
    id: '25',
    title: 'Унтлагын углааш',
    icon: 'carbon:slippers',
    category: 'Нэмэлт үйлчилгээ',
    price: 2000,
  },
  {
    id: '26',
    title: 'Халат',
    icon: 'carbon:shirt',
    category: 'Нэмэлт үйлчилгээ',
    price: 7000,
  },
  {
    id: '27',
    title: 'Тавиур',
    icon: 'carbon:hanger',
    category: 'Нэмэлт үйлчилгээ',
    price: 2000,
  },
  {
    id: '28',
    title: 'Сам',
    icon: 'carbon:comb',
    category: 'Нэмэлт үйлчилгээ',
    price: 1500,
  },
  {
    id: '29',
    title: 'Чихний бөглөөс',
    icon: 'carbon:ear',
    category: 'Нэмэлт үйлчилгээ',
    price: 1000,
  },
  {
    id: '30',
    title: 'Гутлын хуулга',
    icon: 'carbon:shoe',
    category: 'Нэмэлт үйлчилгээ',
    price: 1000,
  },
  {
    id: '31',
    title: 'Гутлын хөөс',
    icon: 'carbon:bubble',
    category: 'Нэмэлт үйлчилгээ',
    price: 1500,
  },
  {
    id: '32',
    title: 'Гутал хатаагч',
    icon: 'carbon:uv-light',
    category: 'Нэмэлт үйлчилгээ',
    price: 10000,
  },
  {
    id: '33',
    title: 'Ор хожуу суллах (18:00 хүртэл)',
    icon: 'carbon:clock',
    category: 'Өрөөний үйлчилгээ',
    price: 30000,
    content: `
      <h5>Ор хожуу суллах</h5>
      <p>18:00 цаг хүртэл өрөөг ашиглах боломжтой. Нөхцөлөөс шалтгаалан төлбөртэй.</p>
    `,
  },
  {
    id: '34',
    title: 'Дуудлага сэрүүлэг',
    icon: 'carbon:alarm',
    category: 'Өрөөний үйлчилгээ',
    price: 0,
  },
  {
    id: '35',
    title: 'Нэмэлт өрөөний хугацаа',
    icon: 'carbon:time',
    category: 'Өрөөний үйлчилгээ',
    price: 20000,
  },
  {
    id: '36',
    title: 'Менежерт зурвас илгээх',
    icon: 'carbon:message',
    category: 'Өрөөний үйлчилгээ',
    price: 0,
    content: `
      <h5>Менежерт зурвас</h5>
      <p>Танд санал, хүсэлт, асуудал байгаа бол эндээс шууд мессеж илгээнэ үү.</p>
    `,
  },
];

export const _service = HOTEL_SERVICES.map((service, index) => ({
  id: _mock.id(index),
  title: service.title,
  icon: service.icon,
  category: service.category,
  price: service.price,
  content: service.content,
  deadline: '24/7',
  available: true,
  favorited: [1, 3].includes(index),
  likes: _mock.number.nativeL(index),
  ratings: _mock.number.rating(index),
  numberOfReviews: _mock.number.nativeL(index),
  location: _mock.address.fullAddress(index),
}));

export const _servicesByCategories = [
  {
    id: '1',
    name: 'Өрөөний үйлчилгээ',
    icon: '/assets/icons/services/service-bell.svg',
    path: '/services',
  },
  {
    id: '2',
    name: 'Нэмэлт үйлчилгээ',
    icon: '/assets/icons/services/service-extra.svg',
    path: '/services',
  },
  {
    id: '3',
    name: 'Хоол',
    icon: '/assets/icons/services/service-food.svg',
    path: '/services/food',
  },
  {
    id: '4',
    name: 'Энтертайнмент',
    icon: '/assets/icons/services/service-entertainment.svg',
    path: '/services/entertainment',
  },
  {
    id: '5',
    name: 'Такси',
    icon: '/assets/icons/services/service-taxi.svg',
    path: '/services/taxi',
  },
  {
    id: '6',
    name: 'Хөтөч',
    icon: '/assets/icons/services/service-guide.svg',
    path: '/services/guide',
  },
];

export const _servicesRecommended = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.serviceTitle(index),
  coverUrl: _mock.image.travel(index),
  price: _mock.number.price(index),
  rating: _mock.number.rating(index),
  numberOfReviews: _mock.number.nativeL(index),
}));
