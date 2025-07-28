import groupBy from 'lodash/groupBy';
import { useMemo, useCallback } from 'react';

import { Service, Category } from 'src/types/service';
import { _service, _servicesByCategories } from 'src/_mock/_services';

interface Subcategory {
  id: string;
  name: string;
  icon?: string; // icon is optional now
  items: Service[];
}

export function useServiceData(categoryName: string) {
  const getServicesByCategory = useCallback(
    (name: string): Service[] => _service.filter((service) => service.category.name === name),
    []
  );

  const getSubcategoriesForCategory = useCallback((name: string): Subcategory[] => {
    const category = _servicesByCategories.find((cat) => cat.name === name);
    if (category && category.subcategories) {
      return category.subcategories.map((sub) => ({
        id: sub.id,
        name: sub.name || '', // Ensure name is a string
        icon: sub.icon,
        items: _service.filter(
          (service) => service.category.name === name && service.subcategory === sub.name
        ),
      }));
    }
    return [];
  }, []);

  const services = useMemo(
    () => getServicesByCategory(categoryName),
    [categoryName, getServicesByCategory]
  );
  const subcategories = useMemo(
    () => getSubcategoriesForCategory(categoryName),
    [categoryName, getSubcategoriesForCategory]
  );

  const groupedServices = useMemo(() => {
    if (subcategories.length > 0) {
      return groupBy(services, 'subcategory');
    }
    return { [categoryName]: services };
  }, [categoryName, services, subcategories]);

  return {
    services,
    subcategories,
    groupedServices,
    getServicesByCategory,
    getSubcategoriesForCategory,
  };
}
