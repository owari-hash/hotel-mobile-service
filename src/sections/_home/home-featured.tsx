import { Box, Grid, Card, Container, Typography } from '@mui/material';

import Image from 'src/components/image';

const FEATURES = [
  {
    title: 'Premium Rooms',
    description: 'Luxury accommodation with modern amenities',
    image: '/assets/features/feature_1.jpg',
  },
  {
    title: 'Best Locations',
    description: 'Hotels in prime city locations',
    image: '/assets/features/feature_2.jpg',
  },
  {
    title: 'Special Offers',
    description: 'Exclusive deals and packages',
    image: '/assets/features/feature_3.jpg',
  },
];

export default function HomeFeatured() {
  return (
    <Box sx={{ py: { xs: 5, md: 10 } }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          Featured Services
        </Typography>

        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid key={feature.title} item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s',
                  },
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  ratio="16/9"
                  sx={{ borderRadius: 1, mb: 2 }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
