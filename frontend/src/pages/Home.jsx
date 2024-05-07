import React from "react";
import RoomsList from "../components/RoomsList";
import coffee from "/Images/icon-coffee.png";
import loader from "/Images/icon-loader.png";
import dribble from "/Images/icon-dribbble.png";
import contactMail from "/Images/icon-mail.svg";
import phone from "/Images/icon-phone.png";
import map from "/Images/icon-map-pin.png";
import sunIcon from "/Images/sun.png";
import homeIcon from "/Images/home.png";
import airIcon from "/Images/air.png";
import { Link } from "react-router-dom";
import flowersImage from "/Images/image 9.png";
import foodImage from "/Images/image 10.png";
import snowImage from "/Images/image 11.png";
import snowmanImage from "/Images/image 12.png";
import { motion } from "framer-motion";
import SimpleSlider from "../components/SimpleSlider";

export default function Home() {
  const photoArr = [flowersImage, foodImage, snowImage, snowmanImage];
  return (
    <motion.div
      className="bg-mwvane text-center text-white "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SimpleSlider/>
      <div className="">
        <h3 className="text-2xl font-bold text-white">
          კეთილი იყოს მობრძანება ჩვენს სასტუმრო სახლში
        </h3>
        <p className="text-[#F7F7F7] text-xl font-light mt-6">
          ჩოხატაურის მშვიდი სილამაზის შუაგულში, ულამაზეს სოფელ ჩხოკურაში, ჩვენი
          <br />
          სასტუმრო სახლი გთავაზობთ მშვიდ დასვენებას
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold uppercase">ოთახები</h2>
        <RoomsList />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-[140px]">სერვისები</h2>
        <p className="mt-9 text-center text-xl font-light">
          გამოიცადეთ თქვენს საჭიროებებზე მორგებული განსაკუთრებული სერვისი. ჩვენ
          მზად ვართ
          <br /> უზრუნველვყოთ თქვენი კომფორტი და კმაყოფილება
        </p>
      </div>

      <div className="flex  justify-center gap-[183px] flex-col text-center mt-[117px]">
        <div className="flex justify-around items-center">
          <div className="items-center flex flex-col justify-center gap-9 mr-8 ">
            <img src={loader} alt="Sun Icon" className="w-10 h-10 mr-2 " />
            <p className="text-xl font-bold text-[#BBFBCB] uppercase">
              ლამაზი ხედი
            </p>
            <p className="text-center text-base font-normal tracking-tighter w-[266px]">
              გაიღვიძე ბუნების საოცარი ხედებით, რაც უზრუნველყოფს თქვენი დღის
              სრულყოფილ დაწყებას
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-9 mr-8">
            <img src={coffee} alt="Home Icon" className="w-10 h-10 mr-2" />
            <p className="text-xl font-bold text-[#BBFBCB] uppercase">საუზმე</p>
            <p className="text-center text-base font-normal tracking-tighter w-[266px]">
              დატკბით სასიამოვნო საუზმით, რაც უზრუნველყოფს თქვენი დილის გემრიელ
              დაწყებას
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-9 mr-8">
            <img src={dribble} alt="Air Icon" className="w-10 h-10 mr-2 " />
            <p className="text-xl font-bold text-[#BBFBCB] uppercase">
              კულინარიული მასტერკლასი
            </p>
            <p className="text-center text-base font-normal tracking-tighter w-[266px]">
              გთავაზობთ მეგობრულ სივრცეს გართობისა და დასვენებისთვის
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center">
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

      <h2 className="text-2xl font-bold uppercase mt-[188px]">გალერეა</h2>
      <p className="mt-10 text-center text-xl font-light">
        დაათვალიერეთ ჩვენი გალერეა და იხილეთ ჩვენი სასტუმრო სახლის სილამაზე.
        ელეგანტური <br /> ინტერიერიდან მომხიბვლელ გარემოებამდე, თითოეული სურათი
        მოგვითხრობს სიმშვიდისა და <br /> სტუმართმოყვარეობის ისტორიას."
      </p>
      <Link to={"/Gallery"} className="flex justify-end">
        ყველას ნახვა
      </Link>

      <div className="overflow-x-auto flex scrollbar scrollbar-thumb-green-200 ">
        {photoArr.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event Photo ${index + 1}`}
            className="w-1/4 rounded-lg mr-4"
          />
        ))}
      </div>

      <h2 className="text-2xl mb-4 mt-16">კონტაქტი</h2>
      <p className="mb-8">
        გაქვთ შეკითხვა ან გჭირდებათ დახმარება დაგვიკავშირდით!
      </p>

      <div className="flex justify-center gap-10">
        <div className=" border-white border flex flex-col items-center p-3">
          <img src={contactMail} className="w-[15%]" />
          <div className="flex flex-col gap-6 mt-6">
            <h1 className="text-[#BBFBCB] font-bold text-2xl">ელ.ფოსტა</h1>
            <p className="w-[273px] text-base font-normal">
              We're here to help you find the perfect outfit.
            </p>
          </div>
          <h1 className="mt-16 underline">guesthouse@gmail.com</h1>
        </div>
        <div className=" border-white border flex flex-col items-center p-3">
          <img src={phone} />
          <div className="flex flex-col gap-6 mt-6">
            <h1 className="text-[#BBFBCB] font-bold text-2xl">ტელეფონი</h1>
            <p className="w-[273px] text-base font-normal">
              Connect with us instantly for personalized assistance.
            </p>
          </div>
          <h1 className="mt-16 underline">+995 599 99 99 99</h1>
        </div>
        <div className="border-white border flex flex-col items-center p-3">
          <img src={map} />
          <div className="mt-6 flex flex-col gap-6">
            <h1 className="text-[#BBFBCB] font-bold text-2xl">მდებარეობა</h1>
            <p className="w-[273px] text-base font-normal">
              Follow us on social media for fashion inspiration.
            </p>
          </div>
          <h1 className="mt-16 underline">ჩოხატაური, ჩხოკოურა</h1>
        </div>
      </div>
    </motion.div>
  );
}
