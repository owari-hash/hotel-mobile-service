import { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { FOOD_SERVICES, MEAL_CATEGORIES } from 'src/_mock/_food-services';

import FoodMenuItemCard from './food-menu-item-card';

interface FoodService {
  id: string;
  title: string;
  icon: string;
  image: string;
  category: string;
  subcategory: string;
  mealType: string;
  price: number;
  content?: string;
}

type ServiceFoodProps = {
  language: string;
  onOrderClick: (service: FoodService) => void;
};

export default function ServiceFood({ language, onOrderClick }: ServiceFoodProps) {
  const [selectedMeal, setSelectedMeal] = useState('all');

  const filteredServices = FOOD_SERVICES.filter(
    (service) => selectedMeal === 'all' || service.mealType === selectedMeal
  );

  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {language === 'mn' ? 'Хоол' : 'Food'}
        </Typography>
        <Chip size="small" color="primary" label={`${filteredServices.length}`} />
        <Chip
          size="small"
          variant="outlined"
          color="default"
          icon={<Iconify icon="ic:round-access-time" width={16} />}
          label="30-40 мин"
        />
        <Chip
          size="small"
          variant="outlined"
          color="info"
          icon={<Iconify icon="ic:round-restaurant" width={16} />}
          label="Хүргэлттэй"
        />
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          mb: 3,
          overflowX: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {MEAL_CATEGORIES.map((category) => (
          <Chip
            key={category.id}
            label={category.label}
            onClick={() => setSelectedMeal(category.id)}
            color={selectedMeal === category.id ? 'primary' : 'default'}
            variant={selectedMeal === category.id ? 'filled' : 'outlined'}
          />
        ))}
      </Stack>

      <Grid container spacing={2}>
        {filteredServices.map((service) => (
          <Grid item xs={12} sm={6} key={service.id}>
            <FoodMenuItemCard service={service} language={language} onOrderClick={onOrderClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
