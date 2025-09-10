import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Acme Construction",
  description: "Licensed, Bonded & Insured General Contractors Serving [Your City]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Navbar should always be visible */}
        <Navbar />
        
        {/* Page content (this is where page.js for each route loads) */}
        <main>{children}</main>
        
        {/* Footer should always be visible */}
        <Footer />
      </body>
    </html>
  );
}
