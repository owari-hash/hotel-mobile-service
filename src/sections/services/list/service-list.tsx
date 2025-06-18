// 'use client';

// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import { useTheme } from '@mui/material/styles';

// import { _service, _servicesByCategories } from 'src/_mock/_services';
// import ServiceHeader from '../components/service-header';
// import ServiceCard from 'src/components/service-card/service-card';
// import ServiceDialog from 'src/components/dialog/ServiceDialog';
// import CategoryBar from '../components/category-bar';
// import { useServiceNavigation } from '../hooks/use-service-navigation';
// import { useServiceFilters } from '../hooks/use-service-filters';

// export default function ServiceList() {
//   const theme = useTheme();
//   const [language, setLanguage] = useState<string>('mn');
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedService, setSelectedService] = useState<any>(null);
//   const { selectedCategory, setSelectedCategory, getFilteredServices } = useServiceFilters();
//   const { activeCategory, categoryRefs, categoryBarRef } = useServiceNavigation();

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//       <Stack spacing={3}>
//         <Box sx={{ position: 'sticky', top: 0, zIndex: 10, bgcolor: 'background.paper' }}>
//           <ServiceHeader
//             title={language === 'mn' ? 'Үйлчилгээ' : 'Services'}
//             language={language}
//             onLanguageToggle={() => setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'))}
//           />

//           <CategoryBar
//             categories={_servicesByCategories}
//             activeCategory={activeCategory}
//             onCategoryClick={(id) => {
//               categoryRefs.current[id]?.scrollIntoView({ behavior: 'auto' });
//               setActiveCategory(id);
//               setSelectedCategory(id);
//             }}
//             categoryBarRef={categoryBarRef}
//           />
//         </Box>

//         <Box sx={{ px: 2, pb: 4 }}>
//           <Stack spacing={5}>
//             {_servicesByCategories.map((category) => (
//               <Box
//                 key={category.id}
//                 ref={(el) => {
//                   categoryRefs.current[category.id] = el as HTMLDivElement | null;
//                 }}
//                 sx={{ scrollMarginTop: { xs: 120, sm: 140 } }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 3,
//                     pb: 1,
//                     fontWeight: 600,
//                     borderBottom: () => `1px solid ${theme.palette.divider}`,
//                   }}
//                 >
//                   {category.name}
//                 </Typography>

//                 <Stack spacing={2}>
//                   {getServicesByCategory(category.name).map((service) => (
//                     <ServiceCard
//                       key={service.id}
//                       service={service}
//                       language={language}
//                       onOrderClick={() => {
//                         setSelectedService(service);
//                         setOpenDialog(true);
//                       }}
//                     />
//                   ))}
//                 </Stack>
//               </Box>
//             ))}
//           </Stack>
//         </Box>

//         <ServiceDialog
//           open={openDialog}
//           onClose={() => setOpenDialog(false)}
//           service={selectedService}
//         />
//       </Stack>
//     </Box>
//   );
// }
//                 ref={(el) => {
//                   categoryRefs.current[category.id] = el as HTMLDivElement | null;
//                 }}
//                 sx={{ scrollMarginTop: { xs: 120, sm: 140 } }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 3,
//                     pb: 1,
//                     fontWeight: 600,
//                     borderBottom: () => `1px solid ${theme.palette.divider}`,
//                   }}
//                 >
//                   {category.name}
//                 </Typography>

//                 <Stack spacing={2}>
//                   {getServicesByCategory(category.name).map((service) => (
//                     <ServiceCard
//                       key={service.id}
//                       service={service}
//                       language={language}
//                       onOrderClick={() => {
//                         setSelectedService(service);
//                         setOpenDialog(true);
//                       }}
//                     />
//                   ))}
//                 </Stack>
//               </Box>
//             ))}
//           </Stack>
//         </Box>

//         <ServiceDialog
//           open={openDialog}
//           onClose={() => setOpenDialog(false)}
//           service={selectedService}
//         />
//       </Stack>
//     </Box>
//   );
// }
//                 '&:hover': {
//                   bgcolor: theme.palette.action.hover,
//                 },
//                 width: 40,
//                 height: 40,
//               }}
//               size="small"
//             >
//               <Iconify
//                 icon="eva:arrow-ios-back-fill"
//                 width={20}
//               />
//             </IconButton>
//           </Stack>
//           {/* Category Bar */}
//           <Stack
//             ref={categoryBarRef}
//             direction="row"
//             spacing={1}
//             sx={{
//               px: 2,
//               pb: 2,
//               overflowX: 'auto',
//               '&::-webkit-scrollbar': { display: 'none' },
//               scrollbarWidth: 'none',
//               scrollBehavior: 'smooth',
//             }}
//           >
//             {_servicesByCategories.map((category) => (
//               <Chip
//                 id={`category-${category.id}`}
//                 key={category.id}
//                 label={category.name}
//                 variant={activeCategory === category.id ? 'filled' : 'outlined'}
//                 color={activeCategory === category.id ? 'primary' : 'default'}
//                 onClick={() => {
//                   categoryRefs.current[category.id]?.scrollIntoView({ behavior: 'auto' });
//                   setActiveCategory(category.id);
//                 }}
//                 icon={
//                   <Iconify
//                     icon="eva:arrow-ios-back-fill"
//                     width={20}
//                     sx={{
//                       color: activeCategory === category.id ? 'common.white' : 'primary.main',
//                     }}
//                   />
//                 }
//                 sx={{
//                   px: 1,
//                   height: 36,
//                   minWidth: 'max-content',
//                   '& .MuiChip-label': {
//                     px: 0.5,
//                     fontWeight: 500,
//                   },
//                 }}
//               />
//             ))}
//           </Stack>
//         </Box>

//         <Box sx={{ px: 2, pb: 4 }}>
//           <Stack spacing={5}>
//             {_servicesByCategories.map((category) => (
//               <Box
//                 key={category.id}
//                 ref={(el) => {
//                   categoryRefs.current[category.id] = el as HTMLDivElement | null;
//                 }}
//                 sx={{
//                   scrollMarginTop: { xs: 120, sm: 140 },
//                   minHeight: { xs: '60vh', sm: '50vh' },
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 3,
//                     pb: 1,
//                     fontWeight: 600,
//                     borderBottom: () => `1px solid ${theme.palette.divider}`,
//                   }}
//                 >
//                   {category.name}
//                 </Typography>

//                 <Stack spacing={2}>
//                   {getServicesByCategory(category.name)
//                     .filter((service) => typeof service.id === 'string' && service.id.trim() !== '')
//                     .map((service) => (
//                       <Card
//                         key={service.id}
//                         sx={{
//                           p: 3,
//                           minHeight: 120,
//                           transition: 'all 0.2s ease-in-out',
//                           '&:hover': {
//                             boxShadow: theme.customShadows.z16,
//                             transform: 'translateY(-2px)',
//                           },
//                         }}
//                       >
//                         <Stack spacing={2} sx={{ height: '100%' }}>
//                           <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
//                             <Box
//                               sx={{
//                                 width: 48,
//                                 height: 48,
//                                 display: 'flex',
//                                 borderRadius: 1,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 bgcolor: 'background.neutral',
//                               }}
//                             >
//                               <Iconify icon="eva:arrow-ios-back-fill" width={24} />
//                             </Box>

//                             <Box sx={{ flexGrow: 1 }}>
//                               <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//                                 {service.title}
//                               </Typography>
//                               <Typography
//                                 variant="body2"
//                                 sx={{
//                                   color: 'text.secondary',
//                                   mt: 0.5,
//                                   lineHeight: 1.5,
//                                 }}
//                               >
//                                 {service.content || ''}
//                               </Typography>
//                             </Box>

//                             <Typography
//                               variant="subtitle1"
//                               sx={{ color: 'primary.main', whiteSpace: 'nowrap' }}
//                             />
//                           </Stack>

//                           <Stack direction="row" justifyContent="flex-end">
//                             <Button
//                               variant="contained"
//                               startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
//                               onClick={() => {
//                                 setSelectedService(service);
//                                 setOpenDialog(true);
//                               }}
//                               sx={{
//                                 width: { xs: '40%', sm: 'auto' },
//                                 py: 1.5,
//                                 fontWeight: 600,
//                               }}
//                             >
//                               {language === 'mn' ? 'Захиалах' : 'Order'}
//                             </Button>
//                           </Stack>
//                         </Stack>
//                       </Card>
//                     ))}
//                 </Stack>
//               </Box>
//             ))}
//           </Stack>
//         </Box>

//         <ServiceDialog
//           open={openDialog}
//           onClose={() => setOpenDialog(false)}
//           service={selectedService}
//         />
//       </Stack>
//     </Box>
//   );
// }
