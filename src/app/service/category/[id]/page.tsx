'use client';

import MainLayout from 'src/layouts/main';
import CategoryView from 'src/sections/services/view/category-view';

// ----------------------------------------------------------------------

type Props = {
  params: {
    id: string;
  };
};

export default function ServicePage({ params }: Props) {
  const { id } = params;

  return (
    <MainLayout>
      <CategoryView id={id} />
    </MainLayout>
  );
}
