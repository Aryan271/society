import React from "react";

export default function Gallery() {
  const galleryData = [
    {
      id: "1",
      url: "https://www.iberdrola.com/documents/20125/40303/Biotecnologia_746x419.jpg/5b49ef00-95ae-cad9-d383-d8c933d600b6?t=1627276463435",
    },
    {
      id: "2",
      url: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs40011-021-01320-4/MediaObjects/40011_2021_1320_Figa_HTML.png?as=webp",
    },
    {
      id: "3",
      url: "https://www.icgeb.org/wp-content/uploads/2018/10/DNA-AdobeStock_banner.jpg",
    },
  ];

  return (
    <div className="container px-16 py-8 min-w-full">
      <h1 className="text-center text-3xl mb-12 font-bold sm:text-md underline underline-offset-8 decoration-blue-500">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {galleryData.map((data) => {
          return (
            <img
              key={data.id}
              src={data.url}
              alt="gallery_image"
              className="object-cover min-h-full rounded"
            />
          );
        })}
      </div>
    </div>
  );
}
