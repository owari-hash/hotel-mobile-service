import Carousel from 'react-slick';

import { Box, Card, Rating, Avatar, Container, Typography } from '@mui/material';

const TESTIMONIALS = [
  {
    name: 'John Doe',
    role: 'Business Traveler',
    rating: 5,
    review: 'Excellent service and comfortable rooms.',
    avatar: '/assets/avatars/avatar_1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Tourist',
    rating: 5,
    review: 'Great location and friendly staff.',
    avatar: '/assets/avatars/avatar_2.jpg',
  },
];

export default function HomeTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box sx={{ py: { xs: 5, md: 10 }, bgcolor: 'background.neutral' }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          What Our Guests Say
        </Typography>

        <Carousel {...settings}>
          {TESTIMONIALS.map((testimonial) => (
            <Box key={testimonial.name} sx={{ px: 2 }}>
              <Card
                sx={{
                  p: 4,
                  textAlign: 'center',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                />
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {/* "{testimonial.review}" */}
                </Typography>
                <Typography variant="subtitle1">{testimonial.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {testimonial.role}
                </Typography>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
