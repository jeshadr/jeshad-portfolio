"use client";

import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";

const FORMSPREE_URL = "https://formspree.io/f/mandplqy";

export default function ContactPage() {
  return (
    <div className="px-6 pb-24">
      {/* Social Links Row */}
      <div className="flex flex-wrap gap-2 mb-8">
        <a
          href="mailto:jeshadrahmanuh@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs transition"
        >
          <FaEnvelope className="h-4 w-4" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/jeshad-rahman"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs transition"
        >
          <FaLinkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/jeshadr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs transition"
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/jeshadr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs transition"
        >
          <FaInstagram className="h-4 w-4" />
          Instagram
        </a>
        <a
          href="https://www.jeshadr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs transition"
        >
          <FaGlobe className="h-4 w-4" />
          Portfolio
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-neutral-800/50 rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-white text-xl font-semibold">Send a message</h2>
        <p className="text-sm text-neutral-400 mt-1">
          I’ll reply to the email you provide below.
        </p>

        <form action={FORMSPREE_URL} method="POST" className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm text-neutral-300 mb-1">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full rounded-md bg-neutral-900 text-white placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-700 px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-300 mb-1">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              className="w-full rounded-md bg-neutral-900 text-white placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-700 px-3 py-2"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm text-neutral-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me a bit about your idea or question..."
              className="w-full rounded-md bg-neutral-900 text-white placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-700 px-3 py-2 resize-y"
            />
          </div>

          <input type="hidden" name="_subject" value="New message from jeshadr.com" />
          <input type="text" name="_gotcha" className="hidden" />

          <button
            type="submit"
            className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white text-sm font-medium rounded-md px-4 py-2 transition"
          >
            Send message
          </button>
        </form>

        <p className="text-xs text-neutral-500 mt-4">
          This form uses Formspree. You’ll get replies at the email you enter above.
        </p>
      </div>
    </div>
  );
}
