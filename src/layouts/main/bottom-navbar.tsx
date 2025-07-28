'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, Typography } from '@mui/material';

import { ProductTemplate } from 'src/types/service';
import Iconify from 'src/components/iconify';
import ServiceDialog from 'src/components/dialog/ServiceDialog';
import ServiceMenuDialog from 'src/components/dialog/ServiceMenuDialog';

import { navData } from './nav/config-navigation';

export default function BottomNavbar() {
  const [openServiceDialog, setOpenServiceDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<ProductTemplate | null>(null);

  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ top: 'auto', bottom: 0, backgroundColor: theme.palette.background.default, py: 0.25 }}
      >
        <Toolbar
          disableGutters
          sx={{ width: '100%', mx: 'auto', height: 56, display: 'flex', justifyContent: 'center' }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-around"
            sx={{
              width: { xs: '100%', sm: '80%', lg: '40%' },
              mx: 'auto',
              px: 0,
            }}
          >
            {navData.map((item) => {
              const isActive = pathname === item.path;
              const isService = item.title === 'Үйлчилгээ';

              return (
                <Stack
                  key={item.title}
                  alignItems="center"
                  spacing={0.25}
                  onClick={() => (isService ? setOpenServiceDialog(true) : router.push(item.path))}
                  sx={{
                    cursor: 'pointer',
                    minWidth: 56,
                    px: 1,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  <Iconify icon={item.icon} width={24} height={24} />
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

      <ServiceMenuDialog
        open={openServiceDialog}
        onClose={() => setOpenServiceDialog(false)}
        // services={mockServices}
        onSelect={(service) => {
          setOpenServiceDialog(false);
          setSelectedService(service);
        }}
        services={[]}
      />

      {/* Service Detail Dialog */}
      <ServiceDialog
        open={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
}
