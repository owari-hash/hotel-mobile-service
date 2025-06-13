import MainLayout from 'src/layouts/main';
import ServiceRoomView from 'src/sections/services/view/service-room-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Room Service',
};

export default function RoomServicePage() {
  return (
    <MainLayout>
      <ServiceRoomView />
    </MainLayout>
  );
}
