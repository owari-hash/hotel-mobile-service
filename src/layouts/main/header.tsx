'use client';

import { useRouter, usePathname } from 'next/navigation';

import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

import { HEADER } from '../config-layout';

import { navConfig } from './config-navigation';

type Props = {
  headerOnDark?: boolean; // Made optional with ?
};

export default function Header({ headerOnDark = false }: Props) {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: theme.palette.background.default,
        py: { xs: 0.5, sm: 1, md: 1.5 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: { xs: '100%', sm: '80%', lg: '60%' },
          mx: 'auto',
          height: HEADER.H_MOBILE,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 3 }} // Added responsive spacing
          justifyContent="space-around"
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: 480, md: 560, lg: 640 },
          }}
        >
          {navConfig.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Stack
                key={item.title}
                alignItems="center"
                spacing={0.5}
                onClick={() => router.push(item.path)}
                sx={{
                  cursor: 'pointer',
                  minWidth: { xs: 56, sm: 80, md: 100 },
                  px: { xs: 1, sm: 2, md: 3 },
                  color: isActive ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <Iconify
                  icon={item.icon}
                  width={{ xs: 24, sm: 28, md: 32 }}
                  height={{ xs: 24, sm: 28, md: 32 }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                    textAlign: 'center',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.title}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
