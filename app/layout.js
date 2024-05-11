import '../../styles/globals.css';
import { Navbar } from '../../componentsnts';

export const dynamic = 'force-dynamic'; 

export const metadata = {
  title: "CEIN",
  description: "Premium camping gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
