'use client';

import { usePathname } from 'next/navigation';

import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';

import { HEADER } from '../config-layout';

type Props = {
  headerOnDark?: boolean;
};

export default function Header({ headerOnDark = false }: Props) {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        backgroundColor: 'transparent',
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(headerOnDark && {
          backgroundColor: theme.palette.background.default,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      ></Toolbar>
    </AppBar>
  );
}
