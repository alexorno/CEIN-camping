import '../../styles/globals.css';
import { Navbar } from '../../components';
import { Footer } from '../../components/footer/Footer';
import { StateContext } from '../../context/StateContext';
import { Suspense } from 'react';


export const metadata = {
  title: "CEIN",
  description: "Premium camping gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={'Loading'}>
          <StateContext >
            <Navbar />
              {children}    
            <Footer />
          </StateContext>
        </Suspense>
      </body>
    </html>
  );
}
