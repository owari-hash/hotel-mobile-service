'use client';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Iconify from 'src/components/iconify';
import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
import { CartItem } from 'src/sections/cart/context/cart-context';

// ----------------------------------------------------------------------

interface Order {
  id: string;
  orderNumber: string;
  orderDate: Date;
  totalAmount: number;
  status: 'Pending' | 'Completed' | 'Cancelled';
  items: CartItem[];
}

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterName, setFilterName] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedOrders = localStorage.getItem('user_orders');
        setOrders(
          savedOrders
            ? JSON.parse(savedOrders).map((order: any) => ({
                ...order,
                orderDate: new Date(order.orderDate), // Convert date string back to Date object
              }))
            : []
        );
      } catch (error) {
        console.error('Failed to load orders:', error);
        setOrders([]);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('user_orders', JSON.stringify(orders));
      } catch (error) {
        console.error('Failed to save orders:', error);
      }
    }
  }, [orders]);

  const generateOrderNumber = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp}-${random}`;
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
    setPage(0);
  };

  const handleFilterByStatus = (event: SelectChangeEvent<string>) => {
    setFilterStatus(event.target.value);
    setPage(0);
  };

  const handleOpenDetails = (order: Order) => {
    setSelectedOrder(order);
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesName =
      order.orderNumber.toLowerCase().includes(filterName.toLowerCase()) ||
      order.items.some((item) => item.title.toLowerCase().includes(filterName.toLowerCase()));
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesName && matchesStatus;
  });

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredOrders.length) : 0;

  return (
    <>
      <Card>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
          sx={{ p: 2.5, pr: 2.5 }}
        >
          <TextField
            value={filterName}
            onChange={handleFilterByName}
            placeholder="Захиалгын дугаар эсвэл барааны нэрээр хайх..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
            sx={{ width: { xs: '100%', sm: 'auto' }, mb: { xs: 2, sm: 0 } }}
          />

          <Select
            value={filterStatus}
            onChange={handleFilterByStatus}
            sx={{ ml: { sm: 2 }, width: { xs: '100%', sm: 150 } }}
          >
            <MenuItem value="all">Бүх төлөв</MenuItem>
            <MenuItem value="Pending">Хүлээгдэж буй</MenuItem>
            <MenuItem value="Completed">Биелэгдсэн</MenuItem>
            <MenuItem value="Cancelled">Цуцлагдсан</MenuItem>
          </Select>
        </Stack>

        {/* Desktop and Tablet View */}
        <TableContainer component={Paper} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Table sx={{ minWidth: 650 }} aria-label="orders table">
            <TableHead>
              <TableRow>
                <TableCell>Захиалгын дугаар</TableCell>
                <TableCell>Захиалгын огноо</TableCell>
                <TableCell align="right">Нийт дүн</TableCell>
                <TableCell>Төлөв</TableCell>
                <TableCell align="center">Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order.orderNumber}
                    </TableCell>
                    <TableCell>{fDate(order.orderDate)}</TableCell>
                    <TableCell align="right">{fCurrency(order.totalAmount)}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleOpenDetails(order)}
                      >
                        Дэлгэрэнгүй
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
              {filteredOrders.length === 0 && emptyRows === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                    Захиалга олдсонгүй.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Mobile View (Cards) */}
        <Box sx={{ display: { xs: 'block', sm: 'none' }, p: 2.5 }}>
          <Grid container spacing={2}>
            {filteredOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <Grid item xs={12} key={order.id}>
                  <Card sx={{ p: 2 }}>
                    <Typography variant="subtitle2">
                      Захиалгын дугаар: {order.orderNumber}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Захиалгын огноо: {fDate(order.orderDate)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Нийт дүн: {fCurrency(order.totalAmount)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Төлөв: {order.status}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleOpenDetails(order)}
                      sx={{ mt: 1 }}
                    >
                      Дэлгэрэнгүй
                    </Button>
                  </Card>
                </Grid>
              ))}
            {filteredOrders.length === 0 && (
              <Grid item xs={12}>
                <Typography align="center" sx={{ py: 3, color: 'text.secondary' }}>
                  Захиалга олдсонгүй.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredOrders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

      <Dialog open={openDetails} onClose={handleCloseDetails} fullWidth maxWidth="sm">
        <DialogTitle>Захиалгын дэлгэрэнгүй: {selectedOrder?.orderNumber}</DialogTitle>
        <DialogContent dividers>
          {selectedOrder && (
            <List>
              <ListItem>
                <ListItemText
                  primary="Захиалгын огноо"
                  secondary={fDate(selectedOrder.orderDate)}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Нийт дүн" secondary={fCurrency(selectedOrder.totalAmount)} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Төлөв" secondary={selectedOrder.status} />
              </ListItem>
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Бараанууд:
              </Typography>
              {selectedOrder.items.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={`${item.title} (x${item.quantity})`}
                    secondary={fCurrency((item.price || 0) * item.quantity)}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails}>Хаах</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
