import CountUp from 'react-countup';

import { Box, Grid, Container, Typography } from '@mui/material';

const STATS = [
  { number: 500, label: 'Happy Customers' },
  { number: 100, label: 'Available Rooms' },
  { number: 25, label: 'Hotel Partners' },
  { number: 10, label: 'Years Experience' },
];

export default function HomeStats() {
  return (
    <Box sx={{ py: { xs: 5, md: 10 }, bgcolor: 'background.neutral' }}>
      <Container>
        <Grid container spacing={3}>
          {STATS.map((stat) => (
            <Grid key={stat.label} item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  <CountUp end={stat.number} />+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
