import MainLayout from 'src/layouts/main';
import ServiceView from 'src/sections/services/view/service-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <MainLayout>
      <ServiceView />
    </MainLayout>
  );
}
