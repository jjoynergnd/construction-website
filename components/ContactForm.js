"use client";

import { useState } from "react";

export default function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className={`my-12 rounded-2xl bg-gray-50 px-6 py-10 sm:px-10 ${compact ? "" : "mx-auto max-w-5xl"}`}>
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">{compact ? "Get in Touch" : "Contact"}</h2>
        <p className="mt-3 text-center text-gray-600">This form is a demonstration only. Please use fictional information; nothing will be sent or stored.</p>
        {submitted ? (
          <div role="status" aria-live="polite" className="mt-6 rounded-lg border border-teal-200 bg-teal-50 p-4 text-teal-950">
            <p className="font-semibold">Demo submission complete.</p>
            <p className="mt-1">Your inquiry was simulated. Nothing was sent or stored.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-3 font-semibold underline underline-offset-2 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700">Send another demo inquiry</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <label className="grid gap-1 font-medium text-gray-800">Name
              <input type="text" name="name" autoComplete="name" required className="rounded-lg border border-gray-300 bg-white p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600" />
            </label>
            <label className="grid gap-1 font-medium text-gray-800">Email
              <input type="email" name="email" autoComplete="email" required className="rounded-lg border border-gray-300 bg-white p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600" />
            </label>
            <label className="grid gap-1 font-medium text-gray-800">Message
              <textarea name="message" required rows={5} className="rounded-lg border border-gray-300 bg-white p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600" />
            </label>
            <button type="submit" className="rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-500 focus-visible:ring-offset-2">Simulate inquiry</button>
          </form>
        )}
      </div>
    </section>
  );
}
