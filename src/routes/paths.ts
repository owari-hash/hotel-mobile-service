// ----------------------------------------------------------------------

export const paths = {
  service: {
    root: '/service',
    room: '/service/room-service',
    food: '/service/food-service',
    extra: '/service/extra-service',
    entertainment: '/service/entertainment-service',
    taxi: '/service/taxi-service',
    guide: '/service/guide-service',
  },

  help: '/help', // Add new path for the help page

  cart: '/cart',

  order: '/order', // Add new path for the order page

  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  pricing01: '/pricing-01',
  pricing02: '/pricing-02',
  payment: '/payment',
  support: '/support',
  page404: '/error/404',
  page500: '/error/500',
} as const;
