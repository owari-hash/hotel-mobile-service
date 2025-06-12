import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import EmptyContent from 'src/components/empty-content';

type CartEmptyProps = {
  language: string;
};

export default function CartEmpty({ language }: CartEmptyProps) {
  return (
    <Card sx={{ p: 5, textAlign: 'center' }}>
      <EmptyContent
        title={language === 'mn' ? 'Сагс хоосон байна' : 'Your cart is empty'}
        description={
          language === 'mn'
            ? 'Үйлчилгээ нэмэхийн тулд үйлчилгээний хуудас руу очно уу'
            : 'Go to services page to add items to your cart'
        }
        img="/assets/illustrations/illustration_empty_cart.svg"
        sx={{ py: 5 }}
      />

      <Button
        component={RouterLink}
        href={paths.service.root}
        size="large"
        variant="contained"
        startIcon={<Iconify icon="eva:arrow-back-fill" />}
        sx={{ mt: 3 }}
      >
        {language === 'mn' ? 'Үйлчилгээ рүү буцах' : 'Go to Services'}
      </Button>
    </Card>
  );
}
