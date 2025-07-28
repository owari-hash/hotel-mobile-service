'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

interface ServiceListHeaderProps {
  language: string;
  toggleLanguage: () => void;
}

export default function ServiceListHeader({ language, toggleLanguage }: ServiceListHeaderProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderBottom: () => `1px solid ${theme.palette.divider}`,
        pt: 1,
        position: 'sticky',
        top: 0,
        zIndex: 1101, // Ensure it stays above other content
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
      >
        <IconButton
          onClick={() => router.back()}
          sx={{
            bgcolor: 'background.default',
            boxShadow: theme.customShadows.z8,
            '&:hover': {
              bgcolor: theme.palette.action.hover,
            },
            width: 40,
            height: 40,
            pointerEvents: 'auto',
          }}
          size="small"
        >
          <Iconify icon="eva:arrow-ios-back-fill" />
        </IconButton>

        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {language === 'mn' ? 'Үйлчилгээ' : 'Services'}
        </Typography>

        <IconButton
          onClick={toggleLanguage}
          sx={{
            bgcolor: 'background.default',
            boxShadow: theme.customShadows.z8,
            '&:hover': {
              bgcolor: theme.palette.action.hover,
            },
            width: 40,
            height: 40,
            pointerEvents: 'auto',
          }}
          size="small"
        >
          <Iconify
            icon={
              language === 'mn' ? 'emojione:flag-for-united-states' : 'emojione:flag-for-mongolia'
            }
            width={20}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
