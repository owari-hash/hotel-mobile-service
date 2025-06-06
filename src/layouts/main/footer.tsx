import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
        width: { xs: '100%', sm: '80%', lg: '40%' },
        mx: 'auto',
        textAlign: 'center',
        py: { xs: 2, sm: 3 },
        px: { xs: 2, sm: 3 },
        mb: { xs: 10, sm: 11 },
        position: 'relative',
        zIndex: 1200,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z8,
      }}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{
            py: { xs: 1, sm: 2 },
          }}
        >
          <Link
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
            }}
          >
            Тусламж
          </Link>

          <Link
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
            }}
          >
            Үйлчилгээний нөхцөл
          </Link>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
          }}
        >
          © 2025. Бүх эрх хуулиар хамгаалагдсан.
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
