import { _mock } from './_mock';

export const TAXI_SERVICES = [
  {
    id: _mock.id(13),
    title: 'Такси захиалах',
    icon: 'carbon:tool-box',
    category: 'Такси',
    subcategory: 'Такси захиалах',
    price: 30000,
  },
  {
    id: _mock.id(14),
    title: 'Нисэх онгоцны буудал',
    icon: 'carbon:tool-box',
    category: 'Такси',
    subcategory: 'Нисэх онгоцны буудал',
    price: 50000,
  },
  {
    id: _mock.id(15),
    title: 'Хот тойрох',
    icon: 'carbon:tool-box',
    category: 'Такси',
    subcategory: 'Хот тойрох',
    price: 100000,
  },
  {
    id: _mock.id(54),
    title: 'Түрээсийн машин',
    icon: 'carbon:tool-box',
    category: 'Такси',
    subcategory: 'Түрээсийн машин',
    price: 200000,
    content: `
      <h5>Түрээсийн машин</h5>
      <p>Жолоочтой болон жолоочгүй түрээсийн машин.</p>
    `,
  },
  {
    id: _mock.id(55),
    title: 'Ачаа тээвэр',
    icon: 'carbon:tool-box',
    category: 'Такси',
    subcategory: 'Ачаа тээвэр',
    price: 50000,
    content: `
      <h5>Ачаа тээвэр</h5>
      <p>Хүнд болон хөнгөн ачаа тээврийн үйлчилгээ.</p>
    `,
  },
];

export const TAXI_SUBCATEGORIES = [
  {
    name: 'Такси захиалах',
    icon: '/assets/icons/services/service-taxi.svg',
    items: TAXI_SERVICES.filter((item) => item.subcategory === 'Такси захиалах'),
  },
  {
    name: 'Нисэх онгоцны буудал',
    icon: '/assets/icons/services/service-taxi.svg',
    items: TAXI_SERVICES.filter((item) => item.subcategory === 'Нисэх онгоцны буудал'),
  },
  {
    name: 'Хот тойрох',
    icon: '/assets/icons/services/service-taxi.svg',
    items: TAXI_SERVICES.filter((item) => item.subcategory === 'Хот тойрох'),
  },
  {
    name: 'Түрээсийн машин',
    icon: '/assets/icons/services/service-taxi.svg',
    items: TAXI_SERVICES.filter((item) => item.subcategory === 'Түрээсийн машин'),
  },
  {
    name: 'Ачаа тээвэр',
    icon: '/assets/icons/services/service-taxi.svg',
    items: TAXI_SERVICES.filter((item) => item.subcategory === 'Ачаа тээвэр'),
  },
];
