import { _mock } from './_mock';

export const MEAL_CATEGORIES = [
  { id: 'all', label: 'Бүгд' },
  { id: 'breakfast', label: 'Өглөөний хоол' },
  { id: 'lunch', label: 'Өдрийн хоол' },
  { id: 'dinner', label: 'Оройн хоол' },
  { id: 'snacks', label: 'Зууш' },
];

export const FOOD_SERVICES = [
  {
    id: _mock.id(7),
    title: 'Өрөөнд хоол захиалах',
    icon: 'carbon:restaurant',
    category: 'Хоол',
    subcategory: 'Өрөөнд хоол захиалах',
    mealType: 'all',
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
    id: _mock.id(8),
    title: 'Өглөөний цай',
    icon: 'carbon:cafe',
    category: 'Хоол',
    subcategory: 'Өглөөний цай',
    mealType: 'breakfast',
    price: 25000,
  },
  {
    id: _mock.id(9),
    title: 'Мини бар',
    icon: 'carbon:bar',
    category: 'Хоол',
    subcategory: 'Мини бар',
    mealType: 'snacks',
    price: 35000,
  },
  {
    id: _mock.id(37),
    title: 'Оройн хоол',
    icon: 'carbon:dinner',
    category: 'Хоол',
    subcategory: 'Оройн хоол',
    mealType: 'dinner',
    price: 60000,
    content: `
      <h5>Оройн хоолны тусгай цэс</h5>
      <p>Манай рестораны шилдэг тогооч нарын бэлтгэсэн оройн хоолны цэснээс сонголт хийнэ үү.</p>
      <ul>
        <li>Үндсэн хоол</li>
        <li>Салад</li>
        <li>Амттан</li>
        <li>Ундаа</li>
      </ul>
    `,
  },
  {
    id: _mock.id(38),
    title: 'Хүүхдийн хоол',
    icon: 'carbon:baby-bottle',
    category: 'Хоол',
    subcategory: 'Хүүхдийн хоол',
    mealType: 'lunch',
    price: 20000,
    content: `
      <h5>Хүүхдийн тусгай хоол</h5>
      <p>Хүүхдэд зориулсан эрүүл, амттай хоолны сонголтууд.</p>
      <ul>
        <li>Зутан шөл</li>
        <li>Будаатай хуурга</li>
        <li>Жимсний салат</li>
      </ul>
    `,
  },
  {
    id: _mock.id(39),
    title: 'Цай, кофе',
    icon: 'carbon:cafe',
    category: 'Хоол',
    subcategory: 'Цай, кофе',
    mealType: 'snacks',
    price: 8000,
  },
  {
    id: _mock.id(40),
    title: 'Ундаа, жүүс',
    icon: 'carbon:drink',
    category: 'Хоол',
    subcategory: 'Ундаа, жүүс',
    mealType: 'snacks',
    price: 7000,
  },
  {
    id: _mock.id(41),
    title: 'Амттан',
    icon: 'carbon:icecream',
    category: 'Хоол',
    subcategory: 'Амттан',
    mealType: 'snacks',
    price: 15000,
  },
];
