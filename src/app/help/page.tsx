import MainLayout from 'src/layouts/main';
import HelpView from 'src/sections/help/view/help-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Тусламж | Hotel Booking',
};

export default function HelpPage() {
  return (
    <MainLayout>
      <HelpView />
    </MainLayout>
  );
}
