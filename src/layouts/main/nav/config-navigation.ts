import { paths } from 'src/routes/paths';

import { NavItemBaseProps } from './types';

export const navData: NavItemBaseProps[] = [
  {
    title: 'Нүүр',
    path: '/',
    icon: 'solar:home-smile-bold',
  },
  {
    title: 'Үйлчилгээ',
    path: paths.service.root,
    icon: 'solar:bell-bing-bold',
    children: [
      {
        subheader: 'Үйлчилгээ',
        items: [
          { title: 'Хоол', path: paths.service.category('food') },
          { title: 'Өрөө', path: paths.service.category('room') },
          { title: 'Энтертайнмент', path: paths.service.category('entertainment') },
          { title: 'Такси', path: paths.service.category('taxi') },
          { title: 'Хөтөч', path: paths.service.category('guide') },
          { title: 'Нэмэлт', path: paths.service.category('extra') },
        ],
      },
    ],
  },
  {
    title: 'Тусламж',
    path: paths.help,
    icon: 'solar:notebook-bold',
  },
  {
    title: 'Захиалга',
    path: paths.order,
    icon: 'solar:bill-list-bold',
  },
  {
    title: 'Сагс ',
    path: paths.cart,
    icon: 'solar:cart-bold',
  },
];
