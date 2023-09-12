import React from "react";

import servicesList from "@/app/screens/Services/defaultData";
import ServicesCard from "@/app/screens/Services/ServicesCard";

const ServicesList = () => (
  <div className="flex w-[700px] flex-col gap-4">
    {servicesList.map((service, index) => (
      <ServicesCard key={index} description={service} />
    ))}
  </div>
);

export default ServicesList;
