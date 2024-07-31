import '../../styles/globals.css';
import { Navbar } from '../../components';
import { Footer } from '../../components/Footer';


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
        <Footer />
      </body>
    </html>
  );
}
