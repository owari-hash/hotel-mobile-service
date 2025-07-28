import { Card, Link, Stack, CardActionArea } from '@mui/material';

import { Product } from 'src/types/service';
import { RouterLink } from 'src/routes/components';
import ServiceCardIcon from 'src/sections/services/components/ServiceCardIcon';
import ServiceCardContent from 'src/sections/services/components/ServiceCardContent';

interface ServiceCardProps {
  service: Product;
  language: string;
  onOrderClick: (service: Product) => void;
}

export default function ServiceCard({ service, language, onOrderClick }: ServiceCardProps) {
  const linkTo = `/services/${service.id.toString()}`; // Convert id to string for href

  return (
    <Card>
      <CardActionArea component={RouterLink} href={linkTo} sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center">
          <ServiceCardIcon icon={service.icon} />
          <ServiceCardContent service={service} />
        </Stack>
      </CardActionArea>
    </Card>
  );
}
