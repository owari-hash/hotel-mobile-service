import { useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import Grid from '@mui/material/Unstable_Grid2';

import Label from 'src/components/label';
import Image from 'src/components/image';
import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavListProps, NavItemBaseProps } from '../types';

import { NavItem } from './nav-item';
import { StyledMenu, StyledSubheader } from './styles';

// ----------------------------------------------------------------------

export default function NavList({ item }: { item: NavItemBaseProps }) {
  const pathname = usePathname();

  const menuOpen = useBoolean();

  const active = useActiveLink(item.path, false);

  const externalLink = item.path.includes('http');

  const mainList = item.children || [];

  useEffect(() => {
    if (menuOpen.value) {
      menuOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (item.children) {
      menuOpen.onTrue();
    }
  }, [item.children, menuOpen]);

  return (
    <>
      <NavItem
        item={item}
        active={active}
        open={menuOpen.value}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={menuOpen.onFalse}
      />

      {!!item.children && menuOpen.value && (
        <Portal>
          <Fade in={menuOpen.value}>
            <StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={menuOpen.onFalse}>
              <Grid container columns={15} justifyContent="center" alignItems="center">
                <Grid xs={15}>
                  <Box
                    gap={5}
                    display="grid"
                    gridTemplateColumns="repeat(5, 1fr)"
                    sx={{
                      p: 5,
                      height: 1,
                      position: 'relative',
                      bgcolor: 'background.neutral',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      '& > *': {
                        textAlign: 'center',
                      },
                    }}
                  >
                    {mainList
                      .filter((list) => list && list.subheader && Array.isArray(list.items))
                      .map((list) => (
                        <NavSubList
                          key={list.subheader}
                          subheader={list.subheader}
                          cover={list.cover}
                          items={list.items}
                          isNew={list.isNew}
                        />
                      ))}
                  </Box>
                </Grid>
              </Grid>
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, cover, items }: NavListProps) {
  const pathname = usePathname();
  const coverPath = items.length ? items[0].path : '';

  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        width: '100%',
        mx: 'auto',
      }}
    >
      <StyledSubheader>
        {subheader}
        {isNew && (
          <Label color="info" sx={{ ml: 1 }}>
            NEW
          </Label>
        )}
      </StyledSubheader>

      <Link
        component={RouterLink}
        href={coverPath}
        sx={{
          width: '100%',
          display: 'block',
        }}
      >
        <Image
          disabledEffect
          alt={subheader}
          src={cover || '/assets/placeholder.svg'}
          ratio="16/9"
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'cover',
            borderRadius: 1,
            cursor: 'pointer',
            boxShadow: (theme) => theme.customShadows.z8,
            transition: (theme) => theme.transitions.create('all'),
            '&:hover': {
              opacity: 0.8,
              boxShadow: (theme) => theme.customShadows.z24,
            },
          }}
        />
      </Link>

      <Stack spacing={1.5} alignItems="center" sx={{ width: '100%' }}>
        {items.map((item) => {
          const active = pathname === item.path || pathname === `${item.path}/`;
          return <NavItem key={item.title} item={item} active={active} subItem />;
        })}
      </Stack>
    </Stack>
  );
}
