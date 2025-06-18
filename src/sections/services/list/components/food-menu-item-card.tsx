import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

type FoodMenuItemCardProps = {
  service: FoodService;
  language: string;
  onOrderClick: (service: FoodService) => void;
};

export default function FoodMenuItemCard({
  service,
  language,
  onOrderClick,
}: FoodMenuItemCardProps) {
  return (
    <Card
      sx={{
        p: 2,
        px: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1.5,
          overflow: 'hidden',
          flexShrink: 0,
          mr: 2,
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
          {service.title}
        </Typography>
        {service.content && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            {service.content}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', ml: 2 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'info.main',
            color: 'common.white',
            borderRadius: 2,
            px: 1.5,
            py: 0.5,
            minWidth: 0,
            height: 36,
            '&:hover': {
              bgcolor: 'info.dark',
            },
          }}
          onClick={() => onOrderClick(service)}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {service.price} ₽
          </Typography>
        </Button>
      </Box>
    </Card>
  );
}
