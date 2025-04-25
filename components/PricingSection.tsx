import React from "react";

const plans = [
  {
    title: "Basic Plan",
    price: "$29 USD",
    period: "per month",
    features: [
      "Send up to 10,000 emails",
      "Send up to 5,000 SMS",
      "Send up to 3,000 WhatsApp messages per month",
      "Manage up to 2,000 contacts",
      "Basic analytics and reporting",
    ],
    button: "Select This Plan",
    popular: false,
  },
  {
    title: "Professional Plan",
    price: "$49 USD",
    period: "per month",
    features: [
      "Send up to 10,000 emails",
      "Send up to 5,000 SMS",
      "Send up to 3,000 WhatsApp messages per month",
      "Manage up to 2,000 contacts",
      "Basic analytics and reporting",
    ],
    button: "Select This Plan",
    popular: true,
  },
  {
    title: "Enterprise Plan",
    price: "$129 USD",
    period: "per month",
    features: [
      "Send up to 10,000 emails",
      "Send up to 5,000 SMS",
      "Send up to 3,000 WhatsApp messages per month",
      "Manage up to 2,000 contacts",
      "Basic analytics and reporting",
    ],
    button: "Select This Plan",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-black flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        Tailored Solutions for <br /> Every Need
      </h2>
      <p className="text-gray-400 text-center max-w-xl mb-12">
        Discover the future of music production with SonifyAI. Effortlessly create, edit, and perfect your tracks.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {plans.map((plan, idx) => (
          <div
            key={plan.title}
            className={`relative bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 w-[320px] flex flex-col items-center shadow-xl border border-gray-800 transition-transform hover:scale-105 ${plan.popular ? "ring-2 ring-purple-400" : ""}`}
          >
            {plan.popular && (
              <span className="absolute top-6 right-6 bg-purple-600 text-xs text-white font-semibold px-3 py-1 rounded-full">POPULAR</span>
            )}
            <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">
              The Basic Plan is designed for individuals and small businesses.
            </p>
            <div className="flex items-end mb-6">
              <span className="text-3xl font-bold text-white mr-2">{plan.price}</span>
              <span className="text-gray-300 text-base">{plan.period}</span>
            </div>
            <ul className="text-gray-200 text-sm mb-8 w-full">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center mb-3">
                  <span className="inline-block w-5 h-5 mr-2 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M5.5 10.5L2.5 7.5L3.91 6.09L5.5 7.67L10.09 3.09L11.5 4.5L5.5 10.5Z" fill="#fff"/></svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-base shadow-lg transition hover:from-purple-700 hover:to-blue-600">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
