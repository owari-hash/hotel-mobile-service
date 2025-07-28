import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Service } from 'src/types/service';
import ServiceCard from 'src/components/service-card/service-card';

interface ServiceContentListProps {
  groupedServices: Record<string, { id: string; name: string; services: Service[] }>;
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
  language: string;
  onOrderClick: (service: Service) => void;
}

export default function ServiceContentList({
  groupedServices,
  sectionRefs,
  language,
  onOrderClick,
}: ServiceContentListProps) {
  return (
    <Box sx={{ px: 2, pb: 4 }}>
      <Stack spacing={2}>
        {Object.entries(groupedServices).map(([sectionId, sectionData]) => (
          <Box
            key={sectionId}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[sectionId] = el;
            }}
            sx={{ pt: 2 }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              {sectionData.name}
            </Typography>
            <Stack spacing={2}>
              {sectionData.services.map((service: Service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  language={language}
                  onOrderClick={onOrderClick}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
