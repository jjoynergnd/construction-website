export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-100 py-8 text-center text-gray-700">
      <p>© {new Date().getFullYear()} Acme Construction</p>
      <p className="mx-auto mt-2 max-w-2xl px-4 text-sm">Portfolio Demonstration — Acme Construction is a fictional company. Projects and business information are illustrative.</p>
      <p className="mt-3"><a href="#top" className="font-medium hover:text-teal-700 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">Back to top</a></p>
    </footer>
  );
}
