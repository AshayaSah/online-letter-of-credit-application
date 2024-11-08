import React from "react";
import "./css/TradeSmart.css"; // Import CSS for styling if needed

const TradeSmart = () => {
  const services = [
    {
      title: "Letter of Credit (LC)",
      description:
        "Enables the issuance, amendment, and management of Letters of Credit, ensuring secure and reliable international trade transactions.",
    },
    {
      title: "Bank Guarantee (BG)",
      description:
        "Facilitates the creation and management of Bank Guarantees, helping banks support their clients in securing payment obligations.",
    },
    {
      title: "Supply Chain Financing (SCF)",
      description:
        "Offers solutions for financing across the supply chain, allowing businesses to optimize cash flow and manage working capital efficiently.",
    },
    {
      title: "Trade Loans",
      description:
        "Streamlining operations and improving customer engagement with fintech solutions.",
    },
    {
      title: "Bills",
      description:
        "Supports the handling of trade bills, ensuring accurate and timely processing of payments and documents.",
    },
  ];

  return (
    <div className="tradesmart">
      <h2>Trade Services</h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAS, in partnership with Newgen, offers a powerful TradeSmart designed
        to support banks in managing and optimizing their trade finance
        operations. Our solution seamlessly integrates with your core banking
        systems and third-party applications while providing advanced features
        powered by cutting-edge technologies like AI. This module covers
        multiple critical areas of trade finance, including Letters of Credit,
        Bank Guarantees, Supply Chain Financing, Trade Loans, and Bills, each
        tailored to address specific business needs.{" "}
      </p>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeSmart;
