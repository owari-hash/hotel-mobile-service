import { useRouter } from 'next/navigation';

import { useTheme } from '@mui/material/styles';
import { Stack, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

type ServiceHeaderProps = {
  title: string;
  language: string;
  onLanguageToggle: () => void;
};

export default function ServiceHeader({ title, language, onLanguageToggle }: ServiceHeaderProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1 }}>
      <IconButton
        onClick={() => router.back()}
        sx={{
          bgcolor: 'background.default',
          boxShadow: theme.customShadows.z8,
          width: 40,
          height: 40,
        }}
      >
        <Iconify icon="eva:arrow-ios-back-fill" />
      </IconButton>

      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>

      <IconButton onClick={onLanguageToggle} sx={{ width: 40, height: 40 }}>
        <Iconify
          icon={language === 'mn' ? 'mdi:alpha-m-circle-outline' : 'mdi:alpha-e-circle-outline'}
          width={20}
        />
      </IconButton>
    </Stack>
  );
}
