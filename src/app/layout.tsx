import type { Metadata } from 'next';
import './globals.css';
import DefaultNavbar from '@/app/components/Navbar';


export const metadata: Metadata = {
  title: 'Banana Invest',
  description: 'Banana Invest HomeBroker',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-gray-900 h-screen flex flex-col'>
        <DefaultNavbar />
        {children}
      </body>
    </html>
  );
}
