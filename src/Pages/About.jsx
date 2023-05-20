import React from "react";
import aboutus from "../assets/About-us.jpg";

export default function About() {
  return (
    <div className="container px-16 py-8 min-w-full">
      <h1 className="text-center text-3xl mb-12 font-bold sm:text-md underline underline-offset-8 decoration-blue-500">
        About Us
      </h1>
      <div className="flex justify-between gap-4 flex-col-reverse md:flex-row">
        <div className="flex-1">
          <img
            src={aboutus}
            alt="About Us"
            className="object-cover min-h-full rounded"
          />
        </div>
        <div className="flex-1">
          <h2> Welcome to BRSI</h2>
          <p>
            The aim of the Biotech Research Society of India [BRSI] is to
            promote the R&D in biotechnology, bring interaction between the
            academic institutes and biotech industries, interact with the
            industries and help them in resolving their problems as well make
            them aware with the new developments in the biotech sector, provide
            and arrange training in biotechnology, dissemination of biotech
            knowledge through the organization of lectures, seminars and
            symposia on scientific programmes and societal missions.
          </p>
        </div>
      </div>
    </div>
  );
}
