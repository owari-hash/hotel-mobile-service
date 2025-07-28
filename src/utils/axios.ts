import axios from 'axios';
import { HOST_API } from 'src/config-global';

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const endpoints = {
  chat: '/chat',
  kanban: '/kanban',
  mail: '/mail',
  auth: {
    me: '/auth/me',
    login: '/auth/login',
    register: '/auth/register',
  },
  booking: {
    hotels: '/booking/hotels',
    room: '/booking/room',
    checkout: '/booking/checkout',
  },
  product: {
    list: '/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
  post: {
    list: '/post/list',
    details: '/post/details',
    latest: '/post/latest',
    search: '/post/search',
  },
  items: {
    list: '/items/',
    details: (id: string) => `/items/${id}/`,
  },

  productCategories: {
    list: '/product/product-categories/',
  },
  productTemplates: {
    list: '/product/product-templates/',
    detail: (id: string) => `/product/product-templates/${id}/`,
    listByCategory: (categoryId: string) =>
      `/product/product-templates/?category_id=${categoryId}&isservice=false`,
  },
  listByCategory: (categoryId: string) =>
    `/product/product-templates/?category_id=${categoryId}&isservice=false`,

  hotelServiceTypes: {
    list: '/hotel/hotel-service-type/',
  },
  hotelServices: {
    list: '/hotel/hotel-service/',
    detail: (id: string | number) => `/hotel/hotel-service/${id}/`,
    listByTypeId: (typeId: string | number) => `/hotel/hotel-service/?service_type_id=${typeId}`,
  },
  hotelRoomAmenityTypes: {
    list: '/hotel/hotel_amenities_type',
  },
  hotelRoomAmenityDetails: {
    list: '/hotel/hotel-amenities/',
    detail: (id: string) => `/hotel_amenities/${id}/`,
  },
  hotelRoomAmenities: {
    listByTypeId: (typeId: string) => `/api/hotel_amenities?type_id=${typeId}`,
  },
};
