

import React from "react";

export default function AdminPages() {
  return (
    <div className="flex gap-3 justify-between items-start px-6 pt-3 pb-3.5 mt-10 w-full text-gray-500 whitespace-nowrap max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="flex gap-2 justify-center py-2 pr-4 pl-2 rounded-lg border border-gray-400 border-solid">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a608b9765e01fdf94098fb1aa4ebce9a18602511f966e3122facb8f4ac5b3f8?apiKey=93b467e765604462b0596adc2a62adce&"
        className="shrink-0 gap-0 self-start w-5 aspect-square"
      />
      <div className="gap-0">უკან</div>
    </div>
    <div className="flex gap-0.5 self-stretch font-medium text-center text-gray-400 leading-[143%]">
      <div className="justify-center items-center px-3.5 py-3 w-10 h-10 text-teal-700 bg-green-100 rounded-lg">
        1
      </div>
      <div className="justify-center items-start px-3.5 py-3 rounded-lg">
        2
      </div>
      <div className="justify-center px-3.5 py-3 rounded-lg">3</div>
      <div className="justify-center px-3.5 py-3 rounded-lg">4</div>
      <div className="justify-center items-start px-3.5 py-3 rounded-lg">
        5
      </div>
      <div className="justify-center items-start px-3.5 py-3 rounded-lg">
        6
      </div>
      <div className="justify-center items-start px-3.5 py-3 rounded-lg">
        7
      </div>
    </div>
    <div className="flex gap-2 justify-center py-2 pr-2 pl-4 rounded-lg border border-gray-400 border-solid">
      <div className="gap-0">წინ</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3869be5ccf37a7bb8362b779660a868e2a688e607544b9f0cfadd97c76cb142?apiKey=93b467e765604462b0596adc2a62adce&"
        className="shrink-0 gap-0 self-start w-5 aspect-square"
      />
    </div>
  </div>
  );
}
