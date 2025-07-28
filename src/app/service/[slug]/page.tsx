'use client';

import MainLayout from 'src/layouts/main';
import ServiceView from 'src/sections/services/view/service-view';

// ----------------------------------------------------------------------

type Props = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: Props) {
  const { slug } = params;

  return (
    <MainLayout>
      <ServiceView id={slug} />
    </MainLayout>
  );
}
