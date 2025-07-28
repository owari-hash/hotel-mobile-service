// ----------------------------------------------------------------------

export const paths = {
  service: {
    root: '/service',
    // Dynamic service page with slug
    details: (id: string) => `/service/${id}`, // Changed slug to id
    category: (id: string) => `/service/category/${id}`,
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
