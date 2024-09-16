import '../../styles/globals.css';
import { Navbar } from '../../components';
import { Footer } from '../../components/Footer';
import { StateContext } from '../../context/StateContext';


export const metadata = {
  title: "CEIN",
  description: "Premium camping gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StateContext >
          <Navbar />
            {children}    
          <Footer />
        </StateContext>
      </body>
    </html>
  );
}
