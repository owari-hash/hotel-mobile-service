import { Box, Typography } from '@mui/material';

import { Product } from 'src/types/service';

type ServiceCardContentProps = {
  service: Product;
};

export default function ServiceCardContent({ service }: ServiceCardContentProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle1">{service.title}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {service.content}
      </Typography>
    </Box>
  );
}
