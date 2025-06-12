// 'use client';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Divider from '@mui/material/Divider';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

// import { RouterLink } from 'src/routes/components';

// // ----------------------------------------------------------------------

// // ----------------------------------------------------------------------

// export default function ComponentsView() {
//   return (
//     <Container sx={{ mt: 5, mb: 10 }}>
//       <Typography variant="h4" paragraph>
//         MUI Components
//       </Typography>

//       <Link href="https://mui.com/components/" target="_blank" rel="noopener">
//         https://mui.com/components/
//       </Link>

//       <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

//       <Typography variant="h4" paragraph>
//         Extra Components
//       </Typography>

//       <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
//         Extension components and 3rd party dependencies.
//       </Typography>

//       <Box
//         gap={3}
//         display="grid"
//         gridTemplateColumns={{
//           xs: 'repeat(2, 1fr)',
//           sm: 'repeat(3, 1fr)',
//           md: 'repeat(4, 1fr)',
//         }}
//       >
//         {.map((item) => (
//           <Link
//             component={RouterLink}
//             href={item.path}
//             key={item.title}
//             color="inherit"
//             underline="none"
//           >
//             <Paper
//               variant="outlined"
//               sx={{
//                 px: 3,
//                 py: 5,
//                 typography: 'h6',
//                 borderRadius: 1.5,
//                 textAlign: 'center',
//                 '&:hover': {
//                   boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
//                 },
//               }}
//             >
//               {item.title}
//             </Paper>
//           </Link>
//         ))}
//       </Box>
//     </Container>
//   );
// }
