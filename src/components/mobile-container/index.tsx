import { Container, ContainerProps } from '@mui/material';

import { CONTAINER_SIZES } from 'src/theme/config';

type Props = ContainerProps & {
  variant?: keyof typeof CONTAINER_SIZES;
};

export default function MobileContainer({
  children,
  sx,
  variant = 'mobile',
  disableGutters = false,
  ...other
}: Props) {
  return (
    <Container
      disableGutters={disableGutters}
      sx={{
        ...CONTAINER_SIZES[variant],
        ...sx,
      }}
      {...other}
    >
      {children}
    </Container>
  );
}
