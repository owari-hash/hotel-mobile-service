'use client';

import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';

import { HEADER } from '../config-layout';

import Header from './header';
import Footer from './footer';
import BottomNavbar from './bottom-navbar';

// ----------------------------------------------------------------------

const pathsOnDark = ['/career', '/travel'];

const spacingLayout = [...pathsOnDark, '/', '/service', '/help', '/e-learning', '/marketing'];

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const pathname = usePathname();

  const actionPage = (arr: string[]) => arr.some((path) => pathname.startsWith(path));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header headerOnDark={actionPage(pathsOnDark)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pb: { xs: 15, md: 0 }, // Increased padding-bottom
        }}
      >
        {!actionPage(spacingLayout) && <Spacing />}

        {children}
      </Box>

      <Footer />
      <BottomNavbar />
    </Box>
  );
}

// ----------------------------------------------------------------------

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE },
      }}
    />
  );
}
