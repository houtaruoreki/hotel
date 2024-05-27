import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <motion.div
      className="bg-foni p-10  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-mwvane">
          გალერია
        </h1>
        <p className="text-lg mb-8 text-neutralText text-center">
          შევაბიჯოთ ვიზუალური ბრწყინვალების სამყაროში, როდესაც შეისწავლით
          გალერეას, რომელიც ასახავს ჩვენი სასტუმროს მომხიბვლელ გარემოს. თქვენ
          შეგხვდებათ სურათების გალერეა, რომელიც აღწერს ჩვენი მშვენიერი ადგილის
          არსს.
        </p>

        {/* External views section */}
        <h2 className="text-2xl font-semibold mb-4">გარე ხედი</h2>
        <div className="border-b-2 border-[#1A202C] mb-10"></div>
        <div className="overflow-x-auto flex no-scrollbar scrollbar">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/400x300?text=External+Photo+${
                index + 1
              }`}
              alt={`External Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4"
            />
          ))}
        </div>

        {/* Interior views section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">შიდა ხედები</h2>
        <div className="border-b-2 border-[#1A202C] mb-10"></div>
        <div className="overflow-x-auto flex scrollbar no-scrollbar">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/400x300?text=Interior+Photo+${
                index + 1
              }`}
              alt={`Interior Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4"
            />
          ))}
        </div>

        {/* Events and activities section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ღონისძიებები და აქტივობები
        </h2>
        <div className="border-b-2 border-[#1A202C] mb-10"></div>
        <div className="overflow-x-auto flex scrollbar no-scrollbar">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/400x300?text=Event+Photo+${
                index + 1
              }`}
              alt={`Event Photo ${index + 1}`}
              className="w-1/4 rounded-lg mr-4"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
