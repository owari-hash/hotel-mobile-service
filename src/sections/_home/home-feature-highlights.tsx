import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: '5 Prebuilt Websites', icon: 'eva:arrow-ios-back-fill' },
  { title: '60+ Demo Page', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Easy to Customize', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Color Presets', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Dark Mode', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Awesome Animation', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Google Fonts', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Figma Design', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Fully Responsive', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Mega Menu', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Clean Markup', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Free Updates', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Fast Support', icon: 'eva:arrow-ios-back-fill' },
  { title: 'Well Documented', icon: 'eva:arrow-ios-back-fill' },
];

// ----------------------------------------------------------------------

export default function HomeFeatureHighlights() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={{ xs: 8, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Feature Highlights
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3 }}>
              Have Everything You Need
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Let's see what makes our theme super powerful and user-friendly!`}
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={7}>
          <Box
            sx={{
              rowGap: 6,
              columnGap: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              },
            }}
          >
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <m.div key={feature.title} variants={varFade({ distance: 40 }).in}>
                <Box sx={{ textAlign: 'center' }}>
                  <Iconify icon={feature.icon} width={32} />

                  <Typography variant="subtitle2" component="div" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                </Box>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
