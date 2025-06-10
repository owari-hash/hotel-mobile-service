import { memo } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0, textDecoration: 'none' }}
    >
      <Box
        sx={{
          width: 'auto',
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          ...sx,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: PRIMARY_MAIN,
            fontWeight: 700,
          }}
        >
          {single ? 'HTBooking' : 'HTBooking'}
        </Typography>
      </Box>
    </Link>
  );
}

export default memo(Logo);
