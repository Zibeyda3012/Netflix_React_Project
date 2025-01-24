import React from "react";

const GenreItems = () => {
  const genreList = [
    { name: "Adventure" },
    { name: "Action" },
    { name: "Comedy" },
    { name: "Romance" },
  ];

  return (
    <div className="flex gap-[10px] mb-5">
      {genreList.map((item) => (
        <div className="bg-zinc-600 text-zinc-300 text-sm p-1 rounded-md">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default GenreItems;
