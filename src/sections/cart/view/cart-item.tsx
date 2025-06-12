import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Service } from 'src/types/service';
import Iconify from 'src/components/iconify';

type CartItemProps = {
  item: Service & { quantity: number };
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, change: number) => void;
};

export default function CartItem({ item, onRemove, onQuantityChange }: CartItemProps) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              width: 48,
              height: 48,
              display: 'flex',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.neutral',
              flexShrink: 0,
            }}
          >
            <Iconify icon={item.icon} width={24} />
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            {' '}
            {/* Add minWidth: 0 to allow content to shrink */}
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }} noWrap>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {item.content}
            </Typography>
          </Box>

          <IconButton
            onClick={() => onRemove(item.id)}
            sx={{ color: 'text.secondary', flexShrink: 0 }}
          >
            {' '}
            {/* Ensure button doesn't shrink */}
            <Iconify icon="eva:trash-2-outline" width={20} />
          </IconButton>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pt: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              size="small"
              onClick={() => onQuantityChange(item.id, -1)}
              disabled={item.quantity <= 1}
              sx={{
                bgcolor: 'background.neutral',
                '&:hover': { bgcolor: 'background.neutral' },
              }}
            >
              <Iconify icon="eva:minus-fill" width={16} />
            </IconButton>

            <Typography variant="body2" sx={{ width: 40, textAlign: 'center' }}>
              {item.quantity}
            </Typography>

            <IconButton
              size="small"
              onClick={() => onQuantityChange(item.id, 1)}
              sx={{
                bgcolor: 'background.neutral',
                '&:hover': { bgcolor: 'background.neutral' },
              }}
            >
              <Iconify icon="eva:plus-fill" width={16} />
            </IconButton>
          </Stack>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main' }}>
            {((item.price || 0) * item.quantity).toLocaleString()}₮
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
