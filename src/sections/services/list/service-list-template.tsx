'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

import { ProductTemplate, Category, HotelService, Product } from 'src/types/service';
import MobileContainer from 'src/components/mobile-container/index';
import ServiceDialog from 'src/components/dialog/ServiceDialog';
import CategoryBar from 'src/sections/services/components/category-bar';
import ServiceHeader from 'src/sections/services/components/service-header';
import ServiceContentList from 'src/sections/services/components/service-content-list';
import {
  useGetHotelServiceTypes,
  useGetAllHotelServices,
  useGetProductCategories,
} from 'src/api/service';

interface ServiceListTemplateProps {
  categoryName: string;
}

export default function ServiceListTemplate({ categoryName }: ServiceListTemplateProps) {
  console.log('ServiceListTemplate mounted');
  const theme = useTheme();

  const {
    hotelServiceTypes: serviceCategories,
    hotelServiceTypesLoading: serviceCategoriesLoading,
    hotelServiceTypesError: serviceCategoriesError,
  } = useGetHotelServiceTypes();
  const {
    allHotelServices: services,
    allHotelServicesLoading: servicesLoading,
    allHotelServicesError: servicesError,
  } = useGetAllHotelServices();

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const categoryBarRef = useRef<HTMLDivElement>(null);
  const stickyHeaderRef = useRef<HTMLDivElement>(null);

  const scrollSectionIntoView = useCallback((sectionId: string) => {
    const sectionButton = document.getElementById(`category-${sectionId}`);
    if (sectionButton && categoryBarRef.current) {
      const scrollContainer = categoryBarRef.current;
      const buttonLeft = sectionButton.offsetLeft;
      const containerWidth = scrollContainer.offsetWidth;
      const scrollPosition = buttonLeft - containerWidth / 2 + sectionButton.offsetWidth / 2;

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'auto',
      });
    }
  }, []);

  const scrollToContentSection = useCallback((sectionId: string) => {
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement) {
      const headerOffset = stickyHeaderRef.current ? stickyHeaderRef.current.offsetHeight : 0;
      window.scrollTo({
        top: sectionElement.offsetTop - headerOffset,
        behavior: 'smooth',
      });
    }
  }, []);

  const [activeSection, setActiveSection] = useState<string>('');
  const [activeSubcategory, setActiveSubcategory] = useState<string>(categoryName);
  const [language, setLanguage] = useState<string>('mn'); // 'mn' for Mongolian, 'en' for English
  const { productCategories, productCategoriesLoading, productCategoriesError } =
    useGetProductCategories();

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<ProductTemplate | null>(null);

  const currentCategory = useMemo(
    () =>
      productCategories?.find((cat) => String(cat.id) === String(categoryName)) ||
      productCategories?.[0],
    [productCategories, categoryName]
  );

  const subcategories = useMemo(() => {
    if (!services || !serviceCategories || !currentCategory) return []; // Add currentCategory check

    const servicesInCurrentCategory = services.filter(
      (s: HotelService) => s.service_categ?.id === Number(currentCategory.id)
    );
    const uniqueServiceTypeIds = new Set(
      servicesInCurrentCategory.map((s) => s.service_type_id?.id).filter((id) => id !== undefined)
    );

    return serviceCategories
      .filter((cat: Category) => uniqueServiceTypeIds.has(Number(cat.id)))
      .map((cat: Category) => ({
        id: String(cat.id),
        name: cat.name,
        icon: cat.icon || '',
      }));
  }, [services, serviceCategories, categoryName]);

  const groupedServices = useMemo(() => {
    if (!services || !subcategories.length) return {};

    const servicesInCurrentCategory = services.filter(
      (s: HotelService) => s.service_categ?.name === categoryName
    );

    return subcategories.reduce(
      (acc: Record<string, { id: string; name: string; services: ProductTemplate[] }>, subcat) => {
        const filtered = servicesInCurrentCategory.filter(
          (s: HotelService) => s.service_type_id?.id === Number(subcat.id)
        );

        if (filtered.length) {
          acc[subcat.id] = {
            id: subcat.id,
            name: subcat.name,
            services: filtered.map(
              (s: HotelService): ProductTemplate => ({
                id: String(s.id),
                name: s.name || '',
                description: s.description,
                list_price: undefined,
                active: true,
                image_1920: s.image,
                categ_id: {
                  id: String(s.service_categ.id),
                  name: s.service_categ.name || '',
                  image: s.service_categ.image,
                  source: 'hotelService',
                } as Category,
                title: s.title || s.name || '',
                content: s.content || s.description,
                image: s.image,
                price: undefined,
                icon: s.icon,
                location: undefined,
                deadline: undefined,
                ratings: undefined,
                numberOfReviews: undefined,
                subcategory: s.service_type_id?.name,
              })
            ),
          };
        }
        return acc;
      },
      {} as Record<string, { id: string; name: string; services: ProductTemplate[] }>
    );
  }, [services, subcategories, categoryName]);

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = '';

      Object.entries(sectionRefs.current).forEach(([sectionId, ref]) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const headerOffset = stickyHeaderRef.current ? stickyHeaderRef.current.offsetHeight : 0;
          if (top <= headerOffset && bottom > headerOffset) {
            currentActive = sectionId;
          }
        }
      });

      if (currentActive) {
        setActiveSection(currentActive);
        if (subcategories.length > 0) {
          setActiveSubcategory(currentActive);
        } else if (categoryName) {
          setActiveSubcategory(categoryName);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categoryName, subcategories]);

  useEffect(() => {
    if (activeSection) {
      scrollSectionIntoView(activeSection);
    } else if (subcategories.length > 0) {
      setActiveSection(subcategories[0].id);
      setActiveSubcategory(subcategories[0].id);
    } else if (categoryName && currentCategory) {
      setActiveSection(String(currentCategory.id));
      setActiveSubcategory(String(currentCategory.id));
    }
  }, [activeSection, scrollSectionIntoView, subcategories, categoryName, currentCategory]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

  const handleCategoryClick = useCallback(
    (id: string) => {
      setActiveSubcategory(id);
      setActiveSection(id);
      scrollToContentSection(id);
    },
    [scrollToContentSection]
  );

  const handleOrderClick = useCallback((serviceData: ProductTemplate) => {
    setSelectedService(serviceData);
    setOpenDialog(true);
  }, []);

  if (serviceCategoriesLoading || servicesLoading || productCategoriesLoading) {
    return (
      <Container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (serviceCategoriesError || servicesError || productCategoriesError) {
    return (
      <Container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}
      >
        <Alert severity="error">Error loading services. Please try again later.</Alert>
      </Container>
    );
  }
  console.log('services:', services);
  console.log('serviceCategories:', serviceCategories);
  console.log('productCategories:', productCategories);
  console.log('currentCategory:', currentCategory);
  console.log('subcategories:', subcategories);
  console.log('groupedServices:', groupedServices);

  const content = (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Stack spacing={3}>
        <Box
          ref={stickyHeaderRef}
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            bgcolor: 'background.paper',
            borderBottom: () => `1px solid ${theme.palette.divider}`,
            pt: 1,
          }}
        >
          <ServiceHeader
            title={language === 'mn' ? 'Үйлчилгээ' : 'Services'}
            language={language}
            onLanguageToggle={toggleLanguage}
          />

          {subcategories.length > 0 ? (
            <CategoryBar
              categories={subcategories}
              activeCategory={activeSubcategory}
              onCategoryClick={handleCategoryClick}
              categoryBarRef={categoryBarRef}
            />
          ) : (
            currentCategory && (
              <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, pb: 2 }}>
                <CategoryBar
                  categories={[
                    { id: String(currentCategory.id), name: currentCategory.name, icon: '' },
                  ]}
                  activeCategory={String(currentCategory.id)}
                  onCategoryClick={() => {}}
                  categoryBarRef={categoryBarRef}
                />
              </Stack>
            )
          )}
        </Box>

        {currentCategory && (
          <ServiceContentList
            groupedServices={groupedServices}
            sectionRefs={sectionRefs}
            language={language}
            onOrderClick={handleOrderClick}
          />
        )}

        <ServiceDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          service={selectedService as ProductTemplate}
        />
      </Stack>
    </Box>
  );

  return (
    <MobileContainer>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Stack spacing={3}>
          <Box
            ref={stickyHeaderRef}
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              bgcolor: 'background.paper',
              borderBottom: () => `1px solid ${theme.palette.divider}`,
              pt: 1,
            }}
          >
            <ServiceHeader
              title={language === 'mn' ? 'Үйлчилгээ' : 'Services'}
              language={language}
              onLanguageToggle={toggleLanguage}
            />

            {subcategories.length > 0 ? (
              <CategoryBar
                categories={subcategories}
                activeCategory={activeSubcategory}
                onCategoryClick={handleCategoryClick}
                categoryBarRef={categoryBarRef}
              />
            ) : (
              currentCategory && (
                <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 2, pb: 2 }}>
                  <CategoryBar
                    categories={[
                      { id: String(currentCategory.id), name: currentCategory.name, icon: '' },
                    ]}
                    activeCategory={String(currentCategory.id)}
                    onCategoryClick={() => {}}
                    categoryBarRef={categoryBarRef}
                  />
                </Stack>
              )
            )}
          </Box>

          {currentCategory && (
            <ServiceContentList
              groupedServices={groupedServices}
              sectionRefs={sectionRefs}
              language={language}
              onOrderClick={handleOrderClick}
            />
          )}

          <ServiceDialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            service={selectedService as ProductTemplate}
          />
        </Stack>
      </Box>
    </MobileContainer>
  );
}
