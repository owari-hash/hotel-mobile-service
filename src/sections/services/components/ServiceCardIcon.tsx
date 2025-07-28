import { Box } from '@mui/material';

import Iconify from 'src/components/iconify';

type ServiceCardIconProps = {
  icon?: string; // Assuming the icon name is passed as a prop, now optional
};

export default function ServiceCardIcon({ icon }: ServiceCardIconProps) {
  return (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: 1,
        bgcolor: 'primary.lighter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 2,
      }}
    >
      <Iconify
        icon={icon || 'default_icon'}
        sx={{ color: 'primary.main', width: 24, height: 24 }}
      />
    </Box>
  );
}
