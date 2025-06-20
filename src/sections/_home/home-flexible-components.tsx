import { m } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Fab from '@mui/material/Fab';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { _mock } from 'src/_mock';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FASHION_CATEGORY = [
  { value: 'clothes', label: 'Clothes' },
  { value: 'footwear', label: 'Footwear' },
  { value: 'jean', label: 'Jean' },
];

// ----------------------------------------------------------------------

export default function HomeFlexibleComponents() {
  const [tab, setTab] = useState('angular');

  const [progress, setProgress] = useState(0);

  const [alignment, setAlignment] = useState('left');

  const [category, setCategory] = useState('clothes');

  const [rating, setRating] = useState<number | null>(5);

  const [date, setDate] = useState<Date | null>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  const handleChangeAlignment = useCallback(
    (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    },
    []
  );

  const handleChangeCategory = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  }, []);

  return (
    <Box sx={{ py: { xs: 5, md: 10 } }}>
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 3, md: 2 }} justifyContent="center">
          <Grid xs={12}>
            <MotionViewport
              sx={{
                textAlign: 'center',
                mb: { xs: 3, md: 5 },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Interface Starter Kit
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  variant="h2"
                  sx={{
                    my: 3,
                    fontSize: {
                      xs: '1.875rem',
                      md: '2.25rem',
                    },
                  }}
                >
                  Flexible Components
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    mb: 5,
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  Pre-set components are easy to customize and use.
                </Typography>
              </m.div>
            </MotionViewport>
          </Grid>

          <Grid xs={12}>
            <Stack
              spacing={3}
              sx={{
                borderRadius: 2,
                p: { xs: 2, sm: 3, md: 4 },
                border: (theme) => `dashed 1px ${theme.palette.divider}`,
              }}
            >
              <Stack
                flexWrap="wrap"
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 2, sm: 3 }}
                sx={{ width: 1 }}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
                >
                  Add to cart
                </Button>

                <Fab variant="extended" color="inherit" aria-label="upload">
                  <Iconify icon="eva:arrow-ios-back-fill" width={24} />
                  Upload
                </Fab>

                <Fab color="info" aria-label="media">
                  <Iconify icon="eva:arrow-ios-back-fill" />
                </Fab>

                <CircularProgress
                  color="warning"
                  variant="determinate"
                  aria-label="Progress"
                  value={progress}
                />
              </Stack>

              <Stack
                flexWrap="wrap"
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 2, sm: 3 }}
                sx={{ width: 1 }}
              >
                <Tabs value={tab} onChange={handleChangeTab}>
                  <Tab value="angular" label="Angular" />
                  <Tab value="react" label="React" />
                  <Tab value="vue" label="Vue" />
                </Tabs>

                <ToggleButtonGroup
                  exclusive
                  color="primary"
                  value={alignment}
                  onChange={handleChangeAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="alignment left">
                    <Iconify icon="eva:arrow-ios-back-fill" />
                  </ToggleButton>

                  <ToggleButton value="center" aria-label="alignment center">
                    <Iconify icon="eva:arrow-ios-back-fill" />
                  </ToggleButton>

                  <ToggleButton value="right" aria-label="alignment right">
                    <Iconify icon="eva:arrow-ios-back-fill" />
                  </ToggleButton>
                </ToggleButtonGroup>

                <Chip
                  variant="soft"
                  color="primary"
                  label="Pamela"
                  onDelete={() => {}}
                  avatar={<Avatar alt="Pamela">P</Avatar>}
                />
              </Stack>

              <Stack
                flexWrap="wrap"
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 2, sm: 3 }}
                sx={{ width: 1 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={_mock.image.avatar(4)}
                  sx={{ width: 64, height: 64 }}
                />

                <AvatarGroup max={4}>
                  {[...Array(8)].map((_, index) => (
                    <Avatar
                      key={index}
                      alt={_mock.fullName(index)}
                      src={_mock.image.avatar(index)}
                    />
                  ))}
                </AvatarGroup>

                <Tooltip title="Add" placement="top" arrow>
                  <Button color="inherit">Hover Me</Button>
                </Tooltip>

                <Rating
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Stack>

              <Stack
                flexWrap="wrap"
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 2, sm: 3 }}
                sx={{ width: 1 }}
              >
                <Slider
                  size="small"
                  defaultValue={72}
                  valueLabelDisplay="on"
                  aria-label="demo slider"
                  sx={{ maxWidth: { xs: 1, md: 0.5 } }}
                />

                <Alert
                  severity="success"
                  action={
                    <IconButton color="inherit" size="small" aria-label="close" onClick={() => {}}>
                      <Iconify icon="eva:arrow-ios-back-fill" />
                    </IconButton>
                  }
                >
                  This is a <strong>success</strong> alert
                </Alert>
              </Stack>

              <Stack
                flexWrap="wrap"
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 2, sm: 3 }}
                sx={{ width: 1 }}
              >
                <Card sx={{ boxShadow: (theme) => theme.customShadows.z24 }}>
                  <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
                </Card>

                <Stack spacing={2.5} flexGrow={1}>
                  <FormControlLabel control={<Switch defaultChecked />} label="Switch" />

                  <FormControlLabel control={<Checkbox />} label="Checkbox" />

                  <FormControlLabel
                    value="Radio"
                    control={<Radio defaultChecked />}
                    label="Radio Button"
                  />

                  <TextField label="Full Name" defaultValue="Pamela Mclellan" />

                  <TextField
                    select
                    label="Category"
                    value={category}
                    onChange={handleChangeCategory}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {FASHION_CATEGORY.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
