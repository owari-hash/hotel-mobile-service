'use client';

import { useParams } from 'src/routes/hook/';
import ServiceListTemplate from 'src/sections/services/list/service-list-template';

export default function ServicePage() {
  const params = useParams();
  const { category } = params;

  return <ServiceListTemplate categoryName={category as string} />;
}
