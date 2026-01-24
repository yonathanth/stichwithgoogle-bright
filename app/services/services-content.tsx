"use client";

import Link from "next/link";
import Image from "next/image";
import { BillingToggle, useBillingPeriod } from "./billing-toggle";

export function ServicesContent() {
  const { billingPeriod } = useBillingPeriod();

  return (
    <>
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[500px] w-full p-4 lg:p-10">
          <div
            className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'linear-gradient(rgba(9, 9, 11, 0.7) 0%, rgba(9, 9, 11, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQy8uWfen1a5reLmuZgSYFiVPWaMBm424J1T-y1fSD-hloamzu1EufE9yV6Dp6c2LhfmmG0Er9PX1nzJWpfH6-k9Ddj1BZ6VZcaaoT4yg4ikqJxjpiMxsaQNXQ7AUvj7rUav_wy_WSa485f00E3F51oX7VwGAVc5rGTg18i6iYsU6CpEfan62iPK1omCgATms9p9nxouniRjGrKpXiG4yX5CLlcGlLkDiAH7s_P-uJ5Ni8pxB0x2znL_mYpgf9B_Jaqd85nSHpILs")',
            }}
          ></div>
          <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto mt-10">
            <div className="flex flex-col gap-3">
              <span className="text-primary text-sm font-bold uppercase tracking-wider">
                Premium Membership
              </span>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                Invest in Your Best Self
              </h1>
              <h2 className="text-white/70 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                Choose Your Transformation Path. No hidden fees, just results.
                Join the community of achievers in Addis Ababa.
              </h2>
            </div>
            <BillingToggle />
          </div>
        </section>

        {/* Membership Packages Section */}
        <section className="relative px-4 py-12 lg:px-20 -mt-20 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Starter Package */}
              <div className="flex flex-col gap-6 rounded-2xl border border-border-dark bg-card-dark p-8 shadow-xl hover:border-primary/50 transition-colors duration-300 group">
                <div className="flex flex-col gap-2">
                  <h3 className="text-white/70 text-lg font-bold">The Starter</h3>
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-4xl font-black tracking-tight">
                      ETB{" "}
                      {billingPeriod === "monthly"
                        ? "1,500"
                        : "14,400"}
                    </span>
                    <span className="text-white/60 text-sm font-medium">
                      /{billingPeriod === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mt-2">
                    Perfect for beginners looking to start their fitness journey
                    with essential access.
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Gym floor access (Off-peak)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Locker room access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/40 line-through decoration-white/30">
                    <span className="material-symbols-outlined text-white/30 text-xl">
                      cancel
                    </span>
                    <span>Group classes</span>
                  </div>
                </div>
                <button className="w-full h-12 rounded-xl bg-surface-dark-lighter text-white font-bold hover:bg-surface-dark transition-colors mt-4">
                  Select Starter
                </button>
              </div>

              {/* Athlete Package - Featured */}
              <div className="flex flex-col gap-6 rounded-2xl border-2 border-primary bg-card-dark p-8 shadow-2xl shadow-primary/10 relative transform lg:-translate-y-4 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-primary text-lg font-bold">The Athlete</h3>
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-4xl font-black tracking-tight">
                      ETB{" "}
                      {billingPeriod === "monthly"
                        ? "3,500"
                        : "11,200"}
                    </span>
                    <span className="text-white/60 text-sm font-medium">
                      /{billingPeriod === "monthly" ? "quarter" : "year"}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mt-2">
                    Our most balanced package designed for consistent gym-goers
                    seeking results.
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 text-sm text-white font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>All Starter features</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Unlimited Gym Access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Group classes included</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Sauna & Steam access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>1 Free PT session</span>
                  </div>
                </div>
                <button className="w-full h-12 rounded-xl bg-primary text-black font-bold hover:brightness-110 transition-all mt-4 shadow-lg shadow-primary/25">
                  Select Athlete
                </button>
              </div>

              {/* Elite Package */}
              <div className="flex flex-col gap-6 rounded-2xl border border-border-dark bg-card-dark p-8 shadow-xl hover:border-primary/50 transition-colors duration-300 group">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white/70 text-lg font-bold">
                      The Elite
                    </h3>
                    <span className="text-[10px] font-bold bg-surface-dark-lighter text-white/70 px-2 py-1 rounded border border-border-dark">
                      Best Value
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-4xl font-black tracking-tight">
                      ETB{" "}
                      {billingPeriod === "monthly"
                        ? "1,000"
                        : "9,600"}
                    </span>
                    <span className="text-white/60 text-sm font-medium">
                      /{billingPeriod === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mt-2">
                    The ultimate commitment to your health with VIP perks and
                    unlimited access.
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>All Athlete features</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Priority Class Booking</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Monthly Nutrition Plan</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>5 Guest Passes / month</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span>Free Merchandise Pack</span>
                  </div>
                </div>
                <button className="w-full h-12 rounded-xl bg-surface-dark-lighter text-white font-bold hover:bg-surface-dark transition-colors mt-4">
                  Select Elite
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 px-4 lg:px-20 bg-background-dark border-t border-border-dark">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Compare Features
              </h2>
              <p className="text-white/60">Detailed breakdown of what&apos;s included in each plan.</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border-dark bg-card-dark">
              <table className="w-full min-w-[600px] text-sm text-left">
                <thead className="text-xs text-white/60 uppercase bg-black/20 border-b border-border-dark">
                  <tr>
                    <th className="px-6 py-4 font-bold" scope="col">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center" scope="col">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-primary" scope="col">
                      Athlete
                    </th>
                    <th className="px-6 py-4 text-center" scope="col">
                      Elite
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  <tr className="hover:bg-white/5 transition-colors">
                    <th
                      className="px-6 py-4 font-medium text-white whitespace-nowrap"
                      scope="row"
                    >
                      Gym Access
                    </th>
                    <td className="px-6 py-4 text-center text-white/70">
                      Off-peak
                    </td>
                    <td className="px-6 py-4 text-center text-white font-bold">
                      Unlimited
                    </td>
                    <td className="px-6 py-4 text-center text-white font-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <th className="px-6 py-4 font-medium text-white" scope="row">
                      Group Classes
                    </th>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-white/30 text-lg">
                        close
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <th className="px-6 py-4 font-medium text-white" scope="row">
                      Guest Passes
                    </th>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-white/30 text-lg">
                        close
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-white/70">
                      1 / month
                    </td>
                    <td className="px-6 py-4 text-center text-white font-bold">
                      5 / month
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <th className="px-6 py-4 font-medium text-white" scope="row">
                      Nutrition Plan
                    </th>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-white/30 text-lg">
                        close
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-white/30 text-lg">
                        close
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <th className="px-6 py-4 font-medium text-white" scope="row">
                      Sauna & Steam
                    </th>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-white/30 text-lg">
                        close
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-4 lg:px-20 bg-black">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden h-80 relative">
              <Image
                alt="Fit young woman doing battle ropes exercise in gym"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTr-EyEqBhpLz_MrEOsbMY8G0YNkTTNOhp1MSgNn55dX0aH04WRoxxXG59uW7zS8OsbbVz9zBEGDszAYEZ3kMdKBMma4futd5aaJpsciSRpgYVNbRNNdjr6yylZXvOSnt1nw5TUWXXhqEat-eALuFja2_-5G2Limp4IZBQfUc9ZvQOIYsZ9cuab6kN2wCyaPN8JVS1_6vvXEeRpmIMjDrRmO5O2tiqO5V7ISRXHAqNeQbVtDOFeEDGUqWoVpN1ibikibiyqMGKCBU"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="flex gap-1 text-primary">
                <span className="material-symbols-outlined text-xl">star</span>
                <span className="material-symbols-outlined text-xl">star</span>
                <span className="material-symbols-outlined text-xl">star</span>
                <span className="material-symbols-outlined text-xl">star</span>
                <span className="material-symbols-outlined text-xl">star</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                &quot;Joining Bright Gym was the best decision for my health. The
                trainers are knowledgeable and the atmosphere is incredibly
                motivating.&quot;
              </h3>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">
                  Abebe Kebede
                </span>
                <span className="text-white/60 text-sm">
                  Member since 2022 • Athlete Plan
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 lg:px-20 bg-background-dark">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group bg-card-dark rounded-lg border border-border-dark open:border-primary/30 open:bg-card-dark/80 transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-4 text-white font-medium list-none">
                  <span>Can I freeze my membership?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-white/60 text-sm leading-relaxed">
                  Yes, members on the Athlete and Elite plans can freeze their
                  membership for up to 30 days per year for medical or travel
                  reasons. Please visit the front desk with supporting documents.
                </div>
              </details>

              <details className="group bg-card-dark rounded-lg border border-border-dark open:border-primary/30 open:bg-card-dark/80 transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-4 text-white font-medium list-none">
                  <span>Are there any hidden fees?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-white/60 text-sm leading-relaxed">
                  Absolutely not. The price you see is the price you pay. There
                  is a one-time registration fee of ETB 500 for new members which
                  covers your access card and initial assessment.
                </div>
              </details>

              <details className="group bg-card-dark rounded-lg border border-border-dark open:border-primary/30 open:bg-card-dark/80 transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-4 text-white font-medium list-none">
                  <span>Can I switch plans later?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-white/60 text-sm leading-relaxed">
                  Yes! You can upgrade your plan at any time. The remaining
                  balance of your current plan will be credited towards your new
                  plan. Downgrades are available upon renewal.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="bg-primary py-12 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-black text-2xl md:text-3xl font-black mb-1">
              Ready to start?
            </h2>
            <p className="text-black/80 font-medium">
              Join 500+ members transforming their lives in Addis.
            </p>
          </div>
          <button className="bg-black text-white hover:bg-surface-dark px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
            Register Today
          </button>
        </div>
      </section>
    </>
  );
}

