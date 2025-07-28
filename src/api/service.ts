'use client';

import { useEffect, useMemo, useState } from 'react';
import axiosInstance, { endpoints } from 'src/utils/axios';
import {
  ProductTemplate,
  Category,
  HotelRoomAmenity,
  HotelRoomAmenityCategoryDetail,
  HotelService,
  Product,
} from 'src/types/service';

// Generic Axios fetcher
const fetcher = async <T = any>(url: string): Promise<T> => {
  const res = await axiosInstance.get<T>(url);
  return res.data;
};

// ------------------------ PRODUCT TEMPLATE HOOKS ------------------------

export function useGetProductTemplates() {
  const [data, setData] = useState<ProductTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher<ProductTemplate[]>(endpoints.productTemplates.list)
      .then((res) => {
        console.log('Raw productTemplates data:', res); // Add this line
        setData(res);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const productTemplates = useMemo<Product[]>(() => {
    return data.map((p) => ({
      ...p,
      title: p.name,
      content: p.description,
      category: p.categ_id,
      image: p.image_1920,
      price: p.list_price,
    }));
  }, [data]);

  return {
    productTemplates,
    productTemplatesLoading: loading,
    productTemplatesError: error,
    productTemplatesEmpty: !loading && productTemplates.length === 0,
  };
}

export function useGetProductTemplate(id: string) {
  const [data, setData] = useState<ProductTemplate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;
    fetcher<ProductTemplate>(endpoints.productTemplates.detail(id))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return {
    productTemplate: data,
    productTemplateLoading: loading,
    productTemplateError: error,
  };
}

export function useGetProductCategories() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher<Category[]>(endpoints.productCategories.list)
      .then((res) => {
        console.log('Raw productCategories data:', res); // Add this line
        setData(res);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    productCategories: data,
    productCategoriesLoading: loading,
    productCategoriesError: error,
  };
}

// ------------------------ HOTEL SERVICE TYPES ------------------------

export function useGetHotelServiceTypes() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher<Category[]>(endpoints.hotelServiceTypes.list)
      .then((res) => {
        console.log('Raw hotelServiceTypes data:', res); // Add this line
        setData(res);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    hotelServiceTypes: data,
    hotelServiceTypesLoading: loading,
    hotelServiceTypesError: error,
    hotelServiceTypesEmpty: !loading && data.length === 0,
  };
}

// ------------------------ HOTEL SERVICES ------------------------

export function useGetAllHotelServices() {
  const [data, setData] = useState<HotelService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher<HotelService[]>(endpoints.hotelServices.list)
      .then((res) => {
        console.log('Raw allHotelServices data:', res); // Add this line
        setData(res);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    allHotelServices: data,
    allHotelServicesLoading: loading,
    allHotelServicesError: error,
    allHotelServicesEmpty: !loading && data.length === 0,
  };
}

export function useGetHotelServicesByTypeId(typeId: string) {
  const [data, setData] = useState<HotelService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!typeId) return;
    fetcher<HotelService[]>(endpoints.hotelServices.listByTypeId(typeId))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [typeId]);

  return {
    hotelServices: data,
    hotelServicesLoading: loading,
    hotelServicesError: error,
  };
}

// ------------------------ ROOM AMENITY TYPES & DETAILS ------------------------

export function useGetHotelRoomAmenityTypes() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher<Category[]>(endpoints.hotelRoomAmenityTypes.list)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    hotelRoomAmenityTypes: data,
    hotelRoomAmenityTypesLoading: loading,
    hotelRoomAmenityTypesError: error,
    hotelRoomAmenityTypesEmpty: !loading && data.length === 0,
  };
}

export function useGetHotelRoomAmenityDetails() {
  const [data, setData] = useState<HotelRoomAmenity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher<HotelRoomAmenity[]>(endpoints.hotelRoomAmenityDetails.list)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    hotelRoomAmenities: data,
    hotelRoomAmenitiesLoading: loading,
    hotelRoomAmenitiesError: error,
    hotelRoomAmenitiesEmpty: !loading && data.length === 0,
  };
}

export function useGetHotelRoomAmenitiesByTypeId(typeId: string) {
  const [data, setData] = useState<HotelRoomAmenity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!typeId) return;
    fetcher<HotelRoomAmenity[]>(endpoints.hotelRoomAmenities.listByTypeId(typeId))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [typeId]);

  return {
    hotelRoomAmenities: data,
    hotelRoomAmenitiesLoading: loading,
    hotelRoomAmenitiesError: error,
  };
}

export function useGetHotelRoomAmenityCategoryDetail(categoryId: string) {
  const [data, setData] = useState<HotelRoomAmenityCategoryDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!categoryId) return;
    fetcher<HotelRoomAmenityCategoryDetail>(endpoints.hotelRoomAmenityDetails.detail(categoryId))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [categoryId]);

  return {
    hotelRoomAmenityCategoryDetail: data,
    hotelRoomAmenityCategoryDetailLoading: loading,
    hotelRoomAmenityCategoryDetailError: error,
  };
}
