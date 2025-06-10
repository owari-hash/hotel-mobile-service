'use client';

import React from 'react';

import { TransitionProps } from '@mui/material/transitions';
import {
  Box,
  List,
  Slide,
  Dialog,
  Button,
  ListItem,
  Typography,
  DialogTitle,
  ListItemIcon,
  ListItemText,
  DialogContent,
  ListItemButton,
} from '@mui/material';

import Iconify from '../iconify/iconify';
import { Service } from '../../types/service';
import { RouterLink } from '../../routes/components';

// Mock data for service categories
const SERVICE_CATEGORIES = [
  {
    id: '1',
    name: 'Өрөөний үйлчилгээ',
    icon: 'carbon:clean',
    path: '/service',
  },
  {
    id: '2',
    name: 'Нэмэлт үйлчилгээ',
    icon: 'carbon:add-alt',
    path: '/service',
  },
  {
    id: '3',
    name: 'Хоол',
    icon: 'carbon:restaurant',
    path: '/service',
  },
  {
    id: '4',
    name: 'Энтертайнмент',
    icon: 'carbon:game-console',
    path: '/services/entertainment',
  },
  {
    id: '5',
    name: 'Такси',
    icon: 'carbon:taxi',
    path: '/services/taxi',
  },
  {
    id: '6',
    name: 'Хөтөч',
    icon: 'carbon:compass',
    path: '/services/maps',
  },
];

const Transition = React.forwardRef(
  (props: TransitionProps & { children: React.ReactElement }, ref: React.Ref<unknown>) => (
    <Slide direction="up" ref={ref} {...props} />
  )
);

type Props = {
  open: boolean;
  onClose: () => void;
  services?: Service[];
  onSelect: (service: Service) => void;
  onSelectCategory?: (category: { id: string; name: string; path: string }) => void;
};

export default function ServiceMenuDialog({
  open,
  onClose,
  services,
  onSelect,
  onSelectCategory = () => {},
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="xs"
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'flex-end',
        },
        '& .MuiPaper-root': {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          p: 2,
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h6">Үйлчилгээнүүд</Typography>
      </DialogTitle>

      <DialogContent dividers>
        <List disablePadding>
          {SERVICE_CATEGORIES.map((category) => (
            <ListItem key={category.id} disableGutters>
              <ListItemButton
                component={RouterLink}
                href={category.path}
                onClick={() => {
                  onSelectCategory(category);
                  onClose();
                }}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <ListItemIcon>
                  <Iconify icon={category.icon} width={24} />
                </ListItemIcon>
                <ListItemText
                  primary={category.name}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <Box p={2}>
        <Button fullWidth variant="outlined" onClick={onClose}>
          Хаах
        </Button>
      </Box>
    </Dialog>
  );
}
