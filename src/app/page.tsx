import MainLayout from 'src/layouts/main';
import HomeView from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Зочид буудлын үйлчилгээ | Hotel Booking',
};

export default function HomePage() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
