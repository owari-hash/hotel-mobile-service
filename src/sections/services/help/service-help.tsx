import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import Iconify from 'src/components/iconify';
import { IHotelServiceProps } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  service?: IHotelServiceProps;
};

export default function ServiceHelp({ service }: Props) {
  return (
    <Container>
      <Stack spacing={4}>
        {/* Service Instructions */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Үйлчилгээний заавар
          </Typography>

          <Timeline position="right">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Iconify icon="carbon:calendar" width={16} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="subtitle2">Захиалга өгөх</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Үйлчилгээг захиалахдаа үнийн мэдээлэл, хугацааг сайтар шалгана уу
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Iconify icon="carbon:time" width={16} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="subtitle2">Цуцлах хугацаа</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Үйлчилгээг цуцлах тохиолдолд 2 цагийн өмнө мэдэгдэх шаардлагатай
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Iconify icon="carbon:money" width={16} />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="subtitle2">Нэмэлт төлбөр</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Үйлчилгээний хугацаа хэтэрсэн тохиолдолд нэмэлт төлбөр тооцогдоно
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        {/* Important Notes */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Анхаарах зүйлс
          </Typography>

          <Stack spacing={2}>
            <Alert severity="info" icon={<Iconify icon="carbon:information" />}>
              Үйлчилгээг ажлын цагаар л авах боломжтой
            </Alert>

            <Alert severity="warning" icon={<Iconify icon="carbon:warning" />}>
              Үйлчилгээг урьдчилан захиалснаар илүү хурдан үйлчлүүлэх боломжтой
            </Alert>

            <Alert severity="error" icon={<Iconify icon="carbon:warning-alt" />}>
              Үйлчилгээг цуцлаагүй ирээгүй тохиолдолд торгууль тооцогдоно
            </Alert>
          </Stack>
        </Box>

        {/* Contact Information */}
        <Box
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: 'background.neutral',
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h6">Холбоо барих</Typography>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon="carbon:phone" width={20} />
                <Typography>+976 9911-2233</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon="carbon:email" width={20} />
                <Typography>service@htbooking.mn</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon="carbon:location" width={20} />
                <Typography>Ресепшн - 1 давхар</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
