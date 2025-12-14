"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arin-prajapati-754961346",
    },
    {
      name: "GitHub",
      href: "https://github.com/ArinPrajapati19",
    },
    {
      name: "Email",
      href: "mailto:manuprajapati519@gmail.com",
    },
  ];

  return (
    <motion.div
    className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
    {/* TITLE */}
    <h1 className="text-4xl md:text-5xl font-bold mb-20 text-center">
    Contact Me
    </h1>

    {/* GREY STRIP */}
    <div className="w-full relative mb-16">
    {/* Full-width subtle grey strip */}
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-gray-400 opacity-20"></div>

    {/* CONTACT CARDS */}
    <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-16 px-6">
    {links.map((link) => (
      <motion.a
      key={link.name}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="
      relative w-full md:w-72
      px-10 py-8
      text-center
      border border-gray-600 rounded-2xl
      text-2xl md:text-3xl
      bg-black
      overflow-hidden
      group
      "
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty(
          "--x",
          `${e.clientX - rect.left}px`
        );
        e.currentTarget.style.setProperty(
          "--y",
          `${e.clientY - rect.top}px`
        );
      }}
      whileHover={{ scale: 1.06 }}
      >
      <span
      className="
      pointer-events-none absolute inset-0
      opacity-0 group-hover:opacity-100
      transition duration-300
      "
      style={{
        background:
        "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.18), transparent 40%)",
      }}
      />
      <span className="relative z-10">{link.name}</span>
      </motion.a>
    ))}
    </div>
    </div>

    {/* IMPRESSIVE TEXT + BUTTONS */}
    <div className="flex flex-col items-center gap-6 mt-8">
    <p className="text-gray-400 text-center max-w-xl text-lg">
    Feel free to reach out for collaborations, discussions about systems, tech and ideas or just say a Hi!
    </p>
    <div className="flex gap-4">
    <a
    href="/"
    className="px-6 py-3 rounded-2xl border border-gray-600 transition hover:bg-gray-700 hover:text-white"
    >
    View Portfolio
    </a>
    </div>
    </div>
    </motion.div>
  );
}
