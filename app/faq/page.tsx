"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: "star" },
    { id: "membership", label: "Membership", icon: "card_membership" },
    { id: "trainers", label: "Trainers", icon: "fitness_center" },
    { id: "payments", label: "Payments", icon: "payments" },
    { id: "timings", label: "Timings", icon: "schedule" },
  ];

  const faqs = [
    {
      id: 1,
      category: "timings",
      question: "What are your opening hours?",
      answer:
        "We know life in Addis is busy. That's why we are open 24/7 for Premium members. For Standard members, our hours are 6:00 AM to 10:00 PM daily. We are centrally located in Bole, just behind Friendship Mall.",
    },
    {
      id: 2,
      category: "payments",
      question: "What payment methods do you accept?",
      answer:
        "We accept cash at the front desk, major credit/debit cards, and mobile payments. You can easily pay via Telebirr (Merchant ID: 123456) or CBE Birr. Just show the confirmation SMS to our receptionist.",
    },
    {
      id: 3,
      category: "trainers",
      question: "Do you offer personal training?",
      answer:
        "Absolutely! We have a team of certified trainers specializing in weight loss, bodybuilding, and general fitness. You can book a free 30-minute consultation to discuss your goals before committing to a package.",
    },
    {
      id: 4,
      category: "membership",
      question: "Can I freeze my membership?",
      answer:
        "Yes. If you are traveling or have a medical issue, you can freeze your membership for up to 3 months within a 12-month period. A small administrative fee of 200 ETB applies per freeze request.",
    },
    {
      id: 5,
      category: "timings",
      question: "Is there parking available?",
      answer:
        "We provide free underground parking for all members for up to 2 hours. The entrance is on the side street. Security guards are present 24/7 to ensure vehicle safety.",
    },
  ];

  const filteredFAQs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/90 to-background-dark z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi2AbKrUfHAPWfH7raXm44atZxmUr1fnJlKWKmY-qT0_fgSAERVdCAYnpGyC4qYEHmYZM2vsWTE7qkSYuh3FqATfVDF_ITKRRsfai2psESYK3VfslGYRqA7r47c3Jq2D-8T-TXuw0gKupCIVR5b0t5IVfzvEiOE5bEZNhBDP3OjDpt_K4-l8GbjS1J3I8TkENFDI4HUQAgo2zPLn-NGrAPMe1kTva3ZjTfITqfq6oWjl4YiHvzaxdG2n0kAdvsUQzdETgQShoyC3Y')",
              }}
            ></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Got Questions? <br />
              <span className="text-primary">Let&apos;s Get You Moving.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl font-light">
              Find answers to common questions about memberships, Telebirr
              payments, trainers, and gym etiquette.
            </p>
            <form
              onSubmit={handleSearch}
              className="w-full max-w-lg mt-4 group"
            >
              <div className="relative flex items-center w-full h-14 rounded-xl focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background-dark transition-all duration-300">
                <div className="absolute left-4 text-white/40 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="w-full h-full pl-12 pr-20 bg-card-dark border border-surface-dark-lighter text-white rounded-xl placeholder-white/40 focus:outline-none focus:border-primary/50 text-base"
                  placeholder="Search for parking, prices, Telebirr..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-2">
                  <button
                    type="submit"
                    className="bg-primary text-black p-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-24 px-4 max-w-4xl mx-auto -mt-8 relative z-20">
          {/* Category Filters */}
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-8 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-black font-bold shadow-lg shadow-primary/20 ring-2 ring-primary"
                    : "bg-card-dark border border-surface-dark-lighter text-white/70 hover:text-white hover:border-primary/50"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {category.icon}
                </span>
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4">
            {filteredFAQs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-surface-dark rounded-xl border border-surface-dark-lighter open:border-primary/50 overflow-hidden transition-all duration-300"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 list-none outline-none focus:bg-card-dark">
                  <span className="text-white font-bold text-lg">
                    {faq.question}
                  </span>
                  <div className="size-8 rounded-full bg-card-dark flex items-center justify-center group-open:bg-primary group-open:text-black transition-colors">
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">
                      expand_more
                    </span>
                  </div>
                </summary>
                <div className="px-5 pb-6 text-white/70 leading-relaxed border-t border-surface-dark-lighter group-open:border-transparent pt-2">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-dark border-t border-surface-dark-lighter">
          <div className="max-w-[1200px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-card-dark p-8 md:p-12 border border-surface-dark-lighter">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 size-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 size-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-white mb-3">
                    Still have questions?
                  </h2>
                  <p className="text-white/70 text-lg">
                    Can&apos;t find what you&apos;re looking for? Chat with our
                    front desk directly on WhatsApp or give us a call.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <button className="bg-primary hover:bg-primary/90 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[200px]">
                    <span className="material-symbols-outlined text-[20px]">
                      chat
                    </span>
                    <span>Chat on WhatsApp</span>
                  </button>
                  <button className="bg-surface-dark-lighter hover:bg-surface-dark-lighter/80 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[200px]">
                    <span className="material-symbols-outlined text-[20px]">
                      call
                    </span>
                    <span>Call Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}









