import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';

import { NavListProps } from './nav/types';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Container
      sx={{
        width: { xs: '100%', sm: '80%', lg: '40%' }, // Match navbar width
        mx: 'auto',
        textAlign: 'center',
        py: { xs: 2, sm: 3 }, // Reduced padding
        px: { xs: 2, sm: 3 },
      }}
    >
      <Stack spacing={2}>
        <Logo single />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{
            py: { xs: 1, sm: 2 },
          }}
        >
          <Link variant="caption" sx={{ color: 'text.secondary' }}>
            Help Center
          </Link>

          <Link variant="caption" sx={{ color: 'text.secondary' }}>
            Terms of Service
          </Link>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
          }}
        >
          © 2023. All rights reserved
        </Typography>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }: { list: NavListProps }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ListMobile({ list }: { list: NavListProps }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

// ----------------------------------------------------------------------
