import React from "react";
import { motion } from "framer-motion";
import sunIcon from "/Images/sun.png";
import homeIcon from "/Images/home.png";
import airIcon from "/Images/air.png";

export default function Service() {
  return (
    <motion.div
      className="bg-mwvane text-white p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Existing content */}
      <div className="flex justify-center items-center flex-col mb-8">
        <h2 className="text-2xl font-bold mb-4">სერვისები</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="items-left gap-4">
          <p className="text-2xl font-semibold mt-8 mb-4 text-[#bbfbcb]">ლამაზი ხედი</p>
          <p className="text-lg font-helvetica hover:font-helvetica text-[#D9D9D9] mb-8">
            ჩოხატაურის შუაგულში მოთავსებული ჩვენი სასტუმრო სახლი გთავაზობთ
            დაუვიწყარ დასვენებას თვალწარმტაცი ბუნებრივი სილამაზით
            გარშემორტყმული. დასავლეთით, დიდებული მთები მაღლა დგას, მათი
            მწვერვალები მზის ამოსვლისა და მზის ჩასვლის ოქროსფერი ელფერით
            იცვლებიან, თვალწარმტაცი ფონს ხატავს ცისფერ ცას. აღმოსავლეთით,
            აყვავებული სიმწვანე ფარავს პეიზაჟს, დახვეული ბილიკებით, რომლებიც
            გიწვევთ ბუნების საოცრებების შესასწავლად.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/1312x600"
          alt="Service Image"
          className="mx-auto my-4"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#bbfbcb]">საუზმე</h2>
        <p className="text-lg font-helvetica hover:font-helvetica text-[#D9D9D9] mb-8">
          როდესაც თქვენ დატკბებით ჩვენს სასტუმრო სახლში შემოთავაზებულ კულინარიულ
          სიამოვნებით, მოემზადეთ არა მხოლოდ დახვეწილი გემოებით, არამედ
          თვალწარმტაცი ხედებით, რომლებიც ამაღლებს თქვენს სასადილო გამოცდილებას
          ახალ სიმაღლეებზე.
        </p>
        <div className="overflow-x-auto flex scrollbar">
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

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#bbfbcb]">
          კულინარიული მასტერკლასი
        </h2>
        <p className="text-lg font-helvetica hover:font-helvetica text-[#D9D9D9] mb-8">
          ჩაეფლო დასვენებისა და დასვენების სამყაროში ჩვენს საოჯახო სასტუმროში,
          სადაც ჩვენ გთავაზობთ სათამაშო სივრცეს, რათა უზრუნველყოს თქვენი ყოფნის
          ყოველი მომენტი სავსე გართობითა და ხალისით. სამაგიდო თამაშებიდან
          დაწყებული გარე აქტივობებით დამთავრებული, ყველასთვის არის რაღაც
          სიამოვნება
        </p>
        <div className="overflow-x-auto flex scrollbar">
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
        <div className="flex justify-around items-center mt-20">
          <div className="items-center flex flex-col justify-center gap-9 mr-8 ">
            <img src={sunIcon} alt="Sun Icon" className="w-10 h-10 mr-2 " />
            <p className="text-xl font-bold text-[#BBFBCB] uppercase">
              ნაბეღლავის წყლების <br /> დათვალიერება
            </p>
            <p className="text-center text-base font-normal tracking-tighter w-[266px]">
              ისიამოვნეთ ჩვენი უფასო WiFi სერვისით, რაც საშუალებას მოგცემთ იყოთ
              ხელმისაწვდომი
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-9 mr-8 ">
            <img src={homeIcon} alt="Home Icon" className="w-10 h-10 mr-2" />
            <p className="text-xl font-bold text-[#BBFBCB] uppercase">
              ნოდარ დუმბაძის <br /> სახლ-მუზეუმის ტური
            </p>
            <p className="text-center text-base font-normal tracking-tighter w-[266px]">
              ადმინისტრაცია გაგიწევთ დახმარებასა და მხარდაჭერას, როცა
              დაგჭირდებათ
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-9 mr-8 ">
            <img src={airIcon} alt="Air Icon" className="w-10 h-10 mr-2 " />
            <p className="text-xl font-bold text-[#BBFBCB] uppercase">
              ლაშქრობა
            </p>
            <p className="text-center text-base font-normal tracking-tighter w-[266px]">
              მიიღეთ დამატებითი სერვისები, რომელიც შექმნილია თქვენი ყველა
              საჭიროების დასაკმაყოფილებლად."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
