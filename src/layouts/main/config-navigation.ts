import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
      { title: 'Pricing 01', path: paths.pricing01 },
      { title: 'Pricing 02', path: paths.pricing02 },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

export const navConfig = [
  {
    title: 'Нүүр',
    path: '/',
    icon: 'carbon:home',
  },
  {
    title: 'Үйлчилгээ',
    path: paths.service.root,
    icon: 'carbon:service-desk',
  },
  {
    title: 'Тусламж',
    path: paths.help,
    icon: 'carbon:help',
  },
  {
    title: 'Захиалга',
    path: paths.service.help,

    icon: 'carbon:document',
  },
  {
    title: 'Сагс',
    path: paths.cart,
    icon: 'carbon:shopping-cart',
  },
];
