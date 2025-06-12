import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Theme, SxProps } from '@mui/material/styles';

import Image from '../image';

type EmptyContentProps = {
  title: string;
  description?: string;
  img?: string;
  sx?: SxProps<Theme>;
};

export default function EmptyContent({ title, description, img, sx }: EmptyContentProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={3}
      sx={{
        height: 1,
        textAlign: 'center',
        ...sx,
      }}
    >
      {img && (
        <Image
          alt="empty content"
          src={img}
          sx={{
            width: 240,
            height: 240,
            mb: 3,
          }}
        />
      )}

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
