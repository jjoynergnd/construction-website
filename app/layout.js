import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: { default: "Acme Construction | Portfolio Demonstration", template: "%s | Acme Construction" },
  description: "A fictional construction company website demonstration. Project concepts and business information are illustrative.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Navbar should always be visible */}
        <Navbar />
        
        {/* Page content (this is where page.js for each route loads) */}
        <div id="top">{children}</div>
        
        {/* Footer should always be visible */}
        <Footer />
      </body>
    </html>
  );
}
