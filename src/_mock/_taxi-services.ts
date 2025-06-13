import { _mock } from './_mock';

export const TAXI_SERVICES = [
  {
    id: _mock.id(13),
    title: 'Такси захиалах',
    icon: 'carbon:taxi',
    category: 'Такси',
    subcategory: 'Такси захиалах',
    price: 30000,
  },
  {
    id: _mock.id(14),
    title: 'Нисэх онгоцны буудал',
    icon: 'carbon:airport',
    category: 'Такси',
    subcategory: 'Нисэх онгоцны буудал',
    price: 50000,
  },
  {
    id: _mock.id(15),
    title: 'Хот тойрох',
    icon: 'carbon:car',
    category: 'Такси',
    subcategory: 'Хот тойрох',
    price: 100000,
  },
  {
    id: _mock.id(54),
    title: 'Түрээсийн машин',
    icon: 'carbon:car-rental',
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
    icon: 'carbon:delivery',
    category: 'Такси',
    subcategory: 'Ачаа тээвэр',
    price: 50000,
    content: `
      <h5>Ачаа тээвэр</h5>
      <p>Хүнд болон хөнгөн ачаа тээврийн үйлчилгээ.</p>
    `,
  },
];
