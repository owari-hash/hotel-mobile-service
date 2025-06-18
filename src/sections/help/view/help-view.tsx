'use client';

import { useState } from 'react';

import {
  Box,
  Link,
  Stack,
  TextField,
  Accordion,
  Container,
  Typography,
  InputAdornment,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import Iconify from 'src/components/iconify';

export default function HelpView() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'Үйлчилгээ хэрхэн захиалах вэ?',
      answer:
        'Манай аппликейшн дээрээс хүссэн үйлчилгээгээ сонгож, сагсанд нэмээд, захиалгаа баталгаажуулна уу. Таны захиалга шууд биелэгдэх болно.',
    },
    {
      id: 'panel2',
      question: 'Төлбөрийн нөхцөлүүд юу вэ?',
      answer:
        'Бид бүх төрлийн үндсэн төлбөрийн картууд (Visa, Mastercard) болон гар утасны төлбөрийн системүүдийг (QPay, SocialPay) хүлээн авдаг.',
    },
    {
      id: 'panel3',
      question: 'Захиалгыг цуцлах боломжтой юу?',
      answer:
        'Захиалгыг үйлчилгээ эхлэхээс өмнө цуцлах боломжтой. Цуцлах хүсэлтийг манай тусламжийн төвд хандаж гаргана уу.',
    },
    {
      id: 'panel4',
      question: 'Буцаан олголтын бодлого?',
      answer:
        'Үйлчилгээний нөхцөлөөс хамаарч буцаан олголт хийгдэнэ. Дэлгэрэнгүй мэдээллийг манай үйлчилгээний нөхцөлөөс харна уу.',
    },
    {
      id: 'panel5',
      question: 'Алдаа гарвал хэнд хандах вэ?',
      answer:
        'Хэрэв танд ямар нэгэн асуудал тулгарвал, доорх холбоо барих мэдээллээр бидэнтэй холбогдоно уу. Бид танд туслахад бэлэн байна.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'background.neutral',
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1" gutterBottom>
            Бид хэрхэн туслах вэ?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Таны асуултуудад хариулах, тусламж үзүүлэх зорилготой.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="sm" sx={{ pb: 5 }}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Түгээмэл асуултуудаас хайх..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 5 }}
          />

          <Box>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Түгээмэл асуултууд (FAQ)
            </Typography>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                >
                  <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                    <Typography variant="subtitle1">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                Хайлттай таарсан асуулт олдсонгүй.
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Холбоо барих
            </Typography>
            <Typography variant="body1">Асуух зүйл байвал бидэнтэй холбогдоно уу:</Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon="eva:email-fill" width={24} />
                <Link href="mailto:support@hotelapp.mn" color="inherit" underline="hover">
                  support@hotelapp.mn
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon="eva:phone-call-fill" width={24} />
                <Link href="tel:+97677118899" color="inherit" underline="hover">
                  +976 7711-8899
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon="eva:pin-fill" width={24} />
                <Typography variant="body2">Улаанбаатар, Монгол</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
