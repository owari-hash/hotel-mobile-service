import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { FOOD_SERVICES, MEAL_CATEGORIES } from 'src/_mock/_food-services';

type ServiceFoodProps = {
  language: string;
  onOrderClick: (service: any) => void;
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

      <Stack spacing={2}>
        {filteredServices.map((service) => (
          <Card key={service.id} sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    borderRadius: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.neutral',
                  }}
                >
                  <Iconify icon={service.icon} width={24} />
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {service.content}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', mt: 0.5 }}>
                    {service.price}₮
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  onClick={() => onOrderClick(service)}
                  startIcon={<Iconify icon="carbon:shopping-cart" />}
                >
                  {language === 'mn' ? 'Захиалах' : 'Order'}
                </Button>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
