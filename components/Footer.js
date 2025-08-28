export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-8 text-center text-gray-700">
      <p>© {new Date().getFullYear()} Acme Construction. All rights reserved.</p>
      <p className="mt-2">
        123 Main Street, [Your City] | (555) 555-1234 | info@acmeconstruction.com
      </p>
      <p className="mt-2">
        <a href="#home" className="hover:text-orange-500 transition">Back to top</a>
      </p>
    </footer>
  );
}
