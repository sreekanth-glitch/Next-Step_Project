import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Next Step Private Limited | Study • Work • Settle Abroad',
  description:
    'Guidance for study abroad, work visas, immigration, applications and post-arrival support with Next Step Private Limited.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
