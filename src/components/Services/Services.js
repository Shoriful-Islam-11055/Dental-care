import React from "react";
import useServices from "../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";
import './Services.css'

const Services = () => {
const [services] = useServices();
  return (
    <div className="reviews-container mb-5">
      <h2 className="review-page-title text-center">MY ALL SERVICES</h2>
      <div className="review-card container p-3">
        {services.map((services) => (
          <ServiceCard key={services.id} services={services}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
