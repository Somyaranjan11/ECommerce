import React, { useState } from "react";
interface Props {
  question: string; // Assuming question is of type string
  answer: string; // Assuming answer is of type string
}

const FaqTab: React.FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="flex w-full items-center justify-between border-t px-2 py-4 font-semibold text-gray-800 "
        onClick={toggleAccordion}
      >
        <span className="text-[16px] md:text-[19px] font-light text-left">{question}</span>
        <svg
          className={`h-6 w-6 ${isOpen ? "rotate-180 transform" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9l-6 6 1.41 1.41L12 11.83l4.59 4.58L18 15z"
            fill="currentColor"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-0 bg-white p-2">
          <p className="text-gray-700 text-[14px] md:text-[16px] font-sans font-thin">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqTabContainer = () => {
  return (
    <>
      <div className="my-4 md:my-8 text-center font-sans text-[24px] md:text-3xl font-extralight">
        You may be wondering
      </div>
      <div className="container mt-8">
        <FaqTab
          question="How can I buy All European brands products at wholesale prices for my shop?"
          answer="Whether you’re buying products for a physical shop, online shop or pop-up shop, you can shop All European brands products at wholesale prices on Faire – . When you join as a retailer, you’ll unlock wholesale prices with thousands of independent brands. You’ll also get exclusive shopping benefits, including free returns on all opening orders and the option to buy now, pay later. "
        />
        <FaqTab
          question="How do I find different All European brands brands that sell wholesale to retailers like me?"
          answer="Faire’s platform consolidates brands that sell All European brands products at wholesale prices to retailers onto a single site, making it possible to buy from independent brands you might not have come across yet. Just a quick browse through Faire’s All European brands listings can offer you a range of styles that are perfect for your shop."
        />
      </div>
    </>
  );
};

export default FaqTabContainer;
