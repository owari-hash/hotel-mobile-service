import { Button } from '@mui/material';

import { useLocales } from 'src/locales';
import { Service } from 'src/types/service';

interface OrderButtonProps {
  onOrderClick: (service: Service) => void;
  service: Service;
}

export default function OrderButton({ onOrderClick, service }: OrderButtonProps) {
  const { currentLang } = useLocales();
  const language = currentLang.value;

  return (
    <Button variant="contained" size="small" onClick={() => onOrderClick(service)}>
      {language === 'mn' ? 'Захиалах' : 'Order'}
    </Button>
  );
}
