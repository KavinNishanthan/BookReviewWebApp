import { Outlet } from 'react-router-dom';
import { Header } from '../../components/UtilComponents/BookHeader';
import { Suspense } from 'react';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
