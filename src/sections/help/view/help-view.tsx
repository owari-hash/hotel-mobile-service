'use client';

import { Box, Stack, Container, Typography } from '@mui/material';

export default function HelpView() {
  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Stack spacing={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Тусламж (Help)
        </Typography>
        <Typography variant="body1">
          Энэ бол тусламжийн хуудас юм. Таны асуултуудад хариулах, тусламж үзүүлэх зорилготой.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Дэлгэрэнгүй мэдээллийг доорх хэсгээс харна уу.
        </Typography>
        {/* Add more content here as needed, e.g., FAQs, contact info */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Түгээмэл асуултууд
          </Typography>
          <Typography variant="body2"> - Үйлчилгээ хэрхэн захиалах вэ?</Typography>
          <Typography variant="body2"> - Төлбөрийн нөхцөлүүд юу вэ?</Typography>
          <Typography variant="body2"> - Захиалгыг цуцлах боломжтой юу?</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
