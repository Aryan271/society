import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function LatestNews() {
  const news = [
    {
      title: "IBA subject Conference : SWMR 2022",
      content:
        "International Conference on Sustainable Solid Waste Management and Resource Recovery (SWMR-2022): Conference SWMR-2022 will focus on recent developments in the frontier areas of solid waste management & resource recovery and will bring together scientists, engineers and other experts across the world to deliberate on global developments in the fields of Recycling, Biofuels and Bio-products, Biotechnology",
      date: "27//11/2003",
    },
    {
      title: "IBA subject Conference : SWMR 2022",
      content:
        "International Conference on Sustainable Solid Waste Management and Resource Recovery (SWMR-2022): Conference SWMR-2022 will focus on recent developments in the frontier areas of solid waste management & resource recovery and will bring together scientists, engineers and other experts across the world to deliberate on global developments in the fields of Recycling, Biofuels and Bio-products, Biotechnology",
      date: "27//11/2003",
    },
  ];

  return (
    <div className="container px-16 py-8">
      <h1 className="text-center text-3xl mb-8 font-bold sm:text-md underline underline-offset-8 decoration-blue-500">
        Latest News
      </h1>
      <div className="flex gap-4 flex-col md:flex-row">
        {news.map((curNews) => {
          return (
            <div className="max-w-sm px-6 py-4 border border-gray-100 rounded overflow-hidden shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h3 className="flex flex-row font-bold gap-2 items-center mt-1 pb-1">
                <FaRegCalendarAlt />
                <span>{curNews.date}</span>
              </h3>
              <hr />
              <h2 className="font-bold">{curNews.title}</h2>
              <p>{curNews.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
