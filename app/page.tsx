"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ------------------- SKILLS ARRAY -------------------
const skills = [
  {
    name: "Operating Systems (OS)",
    details: [
      "Process Management: Threads, Scheduling, Synchronization Basics.",
      "Memory Management: Paging, Segmentation, Virtual Memory Basics.",
      "File Systems & Kernel: Basic Understanding of OS architecture, Linux Kernel.",
      "Architectures: Android, iOS, Windows, Linux"
    ]
  },
{
  name: "Data Structures & Algorithms",
  details: [
    "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs.",
    "Sorting & Searching, Complexity Analysis.",
    "Problem Solving with Logical Reasoning."
  ]
},
{
  name: "Java",
  details: [
    "OOPs: Classes, Objects, Inheritance, Polymorphism, Encapsulation.",
    "Collections Framework, File I/O, Exception Handling.",
    "Small Algorithms and Logical Problem-Solving."
  ]
},
{
  name: "C & C++",
  details: [
    "Pointers, Memory Management, Dynamic Allocation.",
    "STL Usage, Basic Algorithms, Competitive Programming Concepts."
  ]
},
{
  name: "DBMS",
  details: [
    "Relational Databases, SQL Queries, Joins, Normalization, Centralization of DB",
    "Transactions and Basic Indexing Concepts."
  ]
},
{
  name: "Networks",
  details: [
    "OSI Model, TCP/IP Basics, Client-Server Communication.",
    "Understanding of Sockets and Simple Protocols."
  ]
},
{
  name: "Blockchain & Cloud",
  details: [
    "Smart Contracts, Decentralized Applications, Consensus Basics.",
    "Cloud Service Models, Deployment Awareness, Basic Architecture Understanding."
  ]
},
{
  name: "Cryptography",
  details: [
    " Plain Text, Cipher Text, Encryption, Decryption, Public Key, Private Key, Authentication, Authorization",
    "CIA Triad, Symmetric Keys, Asymmetric Keys, Cryptographic Algorithms- SHA family, MD5 family, RSA"
  ]
}
];

// ------------------- MAIN COMPONENT -------------------
export default function Portfolio() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
    className="min-h-screen bg-black text-white font-sans relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    >
    {/* HERO */}
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
    <div className="w-36 h-44 border-2 border-dashed border-gray-500 flex items-center justify-center mb-6 relative overflow-hidden">
    <Image
    src="/arin_headshot.jpg"
    alt="Arin Selfie"
    fill
    style={{ objectFit: "cover" }}
    />
    </div>

    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
    Arin Prajapati
    </h1>

    <p className="mt-4 text-xl text-gray-300 max-w-2xl">
    Blockchain Technology Undergrad
    </p>

    <p className="mt-6 text-gray-400 max-w-3xl">
    I don’t just write code — I engineer logic, efficiency, and structure.
    Strong foundations in core computer science with a low-level
    systems-hardware mindset.
    </p>

    <div className="mt-8 flex gap-4">
    <button
    onClick={scrollToBottom}
    className="px-6 py-3 rounded-2xl border border-gray-600 transition hover:bg-gray-700 bg-black text-white font-medium"
    >
    View Work
    </button>

    <a
    href="/contact"
    className="px-6 py-3 rounded-2xl border border-gray-600 transition hover:bg-gray-700 hover:text-white"
    >
    Contact
    </a>
    </div>
    </section>

    {/* ABOUT ME */}
    <section className="py-24 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold mb-8">About Me</h2>
    <p className="text-gray-300 leading-relaxed text-lg mb-4">
    I approach computing as a <strong>system of truths</strong>, not a checklist of trendy frameworks.
    Languages, compilers, or libraries are tools; the real power lies in understanding how
    the machine thinks. I prefer <strong>boring, correct solutions</strong> over clever abstractions that
    fail under stress.
    </p>
    <p className="text-gray-300 leading-relaxed text-lg mb-4">
    My work is guided by <strong>radical curiosity</strong>: why things work, not just that they do. I
    often go deep into <strong>low-level systems, architecture, compilers, and OS-Kernel mechanics</strong>, because
    understanding the foundations gives control most engineers never have.
    </p>

    <p className="text-gray-300 leading-relaxed text-lg italic mb-4">
    Its similar to how nowadays people are running engine-controlled fully computerized cars which has no control over once electronics systems fail. The raw power when you extract 100% juice out of engines is what my mindset in a nutshell.
    </p>

    <p className="text-gray-300 leading-relaxed text-lg">
    I admire those who <strong>build everything themselves</strong>, obsess over detail, and
    challenge conventional practices. Efficiency, clarity, and unbroken logic are my
    north stars, everything else is noise.
    </p>
    </section>

    {/* ENGINEERING PHILOSOPHY */}
    <section className="py-24 bg-neutral-900 px-6 text-center">
    <h2 className="text-3xl font-semibold mb-6">Engineering Philosophy</h2>
    <ul className="text-gray-300 text-lg list-disc list-inside space-y-2 max-w-3xl mx-auto">
    <li><strong>Simplicity over cleverness:</strong> if a solution requires explaining twice, it's too complex.</li>
    <li><strong>Understanding beats convenience:</strong> frameworks are tools, not crutches.</li>
    <li><strong>Control over abstraction:</strong> I need to know what happens beneath the surface.</li>
    <li><strong>Obsessive curiosity:</strong> I explore, I break, I rebuild not for show, but for mastery.</li>
    <li><strong>Pragmatic integrity:</strong> I write code to last, not to impress.</li>
    </ul>
    </section>

    {/* CORE EXPERTISE */}
    <section className="py-24 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold mb-12">Core Expertise</h2>
    <div className="grid md:grid-cols-3 gap-8">
    <div className="p-6 rounded-2xl bg-black border border-gray-800">
    <h3 className="text-xl font-medium mb-3">Programming</h3>
    <p className="text-gray-400">Java, C, C++, SQL, Python, HTML, CSS, Kotlin(partial), Solidity(partial)</p>
    </div>
    <div className="p-6 rounded-2xl bg-black border border-gray-800">
    <h3 className="text-xl font-medium mb-3">Foundations</h3>
    <p className="text-gray-400">DSA, OOPs, OS, DBMS, Networks, Blockchain, Cloud Computing</p>
    </div>
    <div className="p-6 rounded-2xl bg-black border border-gray-800">
    <h3 className="text-xl font-medium mb-3">Domains</h3>
    <p className="text-gray-400">Blockchain Technology</p>
    </div>
    </div>
    </section>

    {/* ------------------- EXPANDED SKILLS (SCROLL ANIMATED) ------------------- */}
    <section className="py-12 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold mb-8 text-center">Skills in Depth</h2>

    {skills.map((skill, index) => (
      <motion.div
      key={skill.name}
      className="mb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      >
      <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
      <ul className="text-gray-400 list-disc list-inside space-y-1">
      {skill.details.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      </ul>
      </motion.div>
    ))}
    </section>

    {/* PROJECTS */}
    <section className="py-24 px-6 max-w-6xl mx-auto">
    <div className="h-2 bg-gray-800 mb-12 rounded-full"></div>
    <h2 className="text-3xl font-semibold mb-12">Upcoming Projects News</h2>
    <div className="space-y-8">
    <div className="p-6 rounded-2xl border border-gray-700">
    <h3 className="text-xl font-medium">Hold On, Coming Soon ;)</h3>
    </div>
    <div className="p-6 rounded-2xl border border-gray-700">
    <h3 className="text-xl font-medium">Stay Tuned, Coming Soon :)</h3>
    </div>
    </div>
    </section>

    {/* FOOTER */}
    <footer
    ref={bottomRef}
    className="py-8 text-center text-gray-500 border-t border-gray-800"
    >
    © {new Date().getFullYear()} Arin Prajapati. Built with intent.
    </footer>
    </motion.div>
    );
}
