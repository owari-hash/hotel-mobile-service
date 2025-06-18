import { _mock } from './_mock';

export const GUIDE_SERVICES = [
  {
    id: _mock.id(1),
    title: 'Хотын аялал',
    icon: 'carbon:tool-box',
    image: '/assets/Food/food.jpg', // Add image path
    category: 'Хөтөч',
    subcategory: 'Хотын аялал',
    price: 50000,
    content: `
      <h5>Хотын аялал</h5>
      <p>Улаанбаатар хотын түүх, соёлын дурсгалт газруудаар аялах хөтөчтэй аялал.</p>
      <ul>
        <li>Төв талбай</li>
        <li>Гандан хийд</li>
        <li>Чингис хааны музей</li>
      </ul>
    `,
  },
  {
    id: _mock.id(2),
    title: 'Байгалийн аялал',
    icon: 'carbon:tool-box',
    image: '/assets/images/guides/guide-2.jpg',
    category: 'Хөтөч',
    subcategory: 'Байгалийн аялал',
    price: 80000,
    content: `
      <h5>Байгалийн аялал</h5>
      <p>Тэрэлж, Богдхан уул зэрэг байгалийн үзэсгэлэнт газруудаар аялах.</p>
      <ul>
        <li>Тэрэлж үндэсний парк</li>
        <li>Мэлхий хад</li>
        <li>Арибал бясалгалын төв</li>
      </ul>
    `,
  },
  {
    id: _mock.id(3),
    title: 'Соёлын аялал',
    icon: 'carbon:tool-box',
    category: 'Хөтөч',
    subcategory: 'Соёлын аялал',
    price: 60000,
    content: `
      <h5>Соёлын аялал</h5>
      <p>Монголын үндэсний урлаг, соёлыг танин мэдэх аялал.</p>
      <ul>
        <li>Үндэсний урлагийн их театр</li>
        <li>Богд хааны ордон музей</li>
        <li>Занабазарын музей</li>
      </ul>
    `,
  },
  {
    id: _mock.id(4),
    title: 'Гэр бааз',
    icon: 'carbon:tool-box',
    category: 'Хөтөч',
    subcategory: 'Гэр бааз',
    price: 120000,
    content: `
      <h5>Гэр бааз</h5>
      <p>Хөдөө орон нутгийн гэр баазад амрах, малчин айлд зочлох.</p>
      <ul>
        <li>Малчин айлд зочлох</li>
        <li>Морь унах</li>
        <li>Цагаан идээ амсах</li>
      </ul>
    `,
  },
  {
    id: _mock.id(5),
    title: 'Түүхэн аялал',
    icon: 'carbon:tool-box',
    category: 'Хөтөч',
    subcategory: 'Түүхэн аялал',
    price: 70000,
    content: `
      <h5>Түүхэн аялал</h5>
      <p>Монголын эзэнт гүрний түүхтэй холбоотой газруудаар аялах.</p>
      <ul>
        <li>Хархорум</li>
        <li>Эрдэнэзуу хийд</li>
        <li>Чингис хааны морьт хөшөө</li>
      </ul>
    `,
  },
];

export const GUIDE_SUBCATEGORIES = [
  {
    name: 'Хотын аялал',
    icon: '/assets/icons/services/service-guide.svg',
    items: GUIDE_SERVICES.filter((item) => item.subcategory === 'Хотын аялал'),
  },
  {
    name: 'Байгалийн аялал',
    icon: '/assets/icons/services/service-guide.svg',
    items: GUIDE_SERVICES.filter((item) => item.subcategory === 'Байгалийн аялал'),
  },
  {
    name: 'Соёлын аялал',
    icon: '/assets/icons/services/service-guide.svg',
    items: GUIDE_SERVICES.filter((item) => item.subcategory === 'Соёлын аялал'),
  },
  {
    name: 'Гэр бааз',
    icon: '/assets/icons/services/service-guide.svg',
    items: GUIDE_SERVICES.filter((item) => item.subcategory === 'Гэр бааз'),
  },
  {
    name: 'Түүхэн аялал',
    icon: '/assets/icons/services/service-guide.svg',
    items: GUIDE_SERVICES.filter((item) => item.subcategory === 'Түүхэн аялал'),
  },
];
