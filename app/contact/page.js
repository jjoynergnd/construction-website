export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Have questions or need a quote? We’d love to hear from you.
      </p>
      <form
        action="https://formspree.io/f/yourformid"
        method="POST"
        className="max-w-lg mx-auto grid gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
        />
        <input
          type="email"
          name="_replyto"
          placeholder="Your Email"
          required
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
          rows={5}
        />
        <button
          type="submit"
          className="bg-[#1DA1F2] text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
