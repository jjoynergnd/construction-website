export default function Contact() {
  return (
    <section id="contact" className="my-12 bg-gray-100 py-12 px-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Get in Touch</h2>
      <p className="text-center mb-6 text-gray-700">
        Call us at <strong>(555) 555-1234</strong> or fill out the form below.
      </p>

      <form
        action="https://formspree.io/f/yourformid"
        method="POST"
        className="max-w-xl mx-auto grid gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <input
          type="email"
          name="_replyto"
          placeholder="Your Email"
          required
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          rows={5}
        />
        <button
          type="submit"
          className="bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-teal-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
