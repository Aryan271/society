import React from "react";
import membership from "../assets/Membership.jpg";

export default function Membership() {
  return (
    <div className="container px-16 py-8 min-w-full">
      <h1 className="text-center text-3xl mb-12 font-bold sm:text-md underline underline-offset-8 decoration-blue-500">
        Membership
      </h1>
      <div className="flex justify-between gap-4 flex-col-reverse md:flex-row-reverse">
        <div className="flex-1">
          <img
            src={membership}
            alt="About Us"
            className="object-cover min-h-full rounded"
          />
        </div>
        <div className="flex-1">
          <p>
            <span className="text-blue-500">LIFE MEMBER:</span> Any person with
            above qualification can opt for the Life membership of the Society.
            Life membership is valid till the age of 75 years. Fees: Rs. 5000 as
            one-time payment
          </p>
          <p>
            <span className="text-blue-500">ORDINARY MEMBER:</span>
            Any persons possessing Master’s degree in Science in Biological, or
            Life Sciences, or Bachelor’s degree in Engineering in Biotechnology
            or Biochemical Engineering can apply for the membership of the
            Society. Those working in the area of biotech research and business,
            but not possessing the aforesaid qualifications can also apply for
            the membership.
          </p>
        </div>
      </div>
    </div>
  );
}
