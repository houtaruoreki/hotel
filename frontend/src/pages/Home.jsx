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
import { MdCoffee, MdDinnerDining, MdEmail, MdLandscape, MdLocalPhone, MdLocationPin} from "react-icons/md";

export default function Home() {
  const photoArr = [flowersImage, foodImage, snowImage, snowmanImage];
  return (
    <motion.div
    className="bg-foni text-center text-white "
  >
      <SimpleSlider/>
      <div className="">
        <h3 className="text-2xl font-bold text-black mt-20 leading-9">
          კეთილი იყოს მობრძანება ჩვენს სასტუმრო სახლში
        </h3>
        <p className="text-slate-400 text-xl font-light mt-6">
          ჩოხატაურის მშვიდი სილამაზის შუაგულში, ულამაზეს სოფელ ჩხოკურაში, ჩვენი
          <br />
          სასტუმრო სახლი გთავაზობთ მშვიდ დასვენებას
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold uppercase text-mwvane">ოთახები</h2>
        <RoomsList  />
      </div>
      <div>
        <h2 className="text-2xl text-mwvane font-bold ">სერვისები</h2>
        <p className="mt-9 text-center text-xl text-black font-light">
          გამოიცადეთ თქვენს საჭიროებებზე მორგებული განსაკუთრებული სერვისი. ჩვენ
          მზად ვართ
          <br /> უზრუნველვყოთ თქვენი კომფორტი და კმაყოფილება
        </p>
      </div>

      <div className="flex  justify-center gap-32 flex-col text-center mt-32">
        <div className="flex justify-around items-center">
          <div className="items-center flex flex-col justify-center gap-4 mr-8 text-black">
            <MdLandscape className="h-10 w-10"/> 
            <p className="text-2xl font-bold text-black uppercase">
              ლამაზი ხედი
            </p>
            <p className="text-center text-base font-sans tracking-wider		w-[266px]">
              გაიღვიძე ბუნების საოცარი ხედებით, რაც უზრუნველყოფს თქვენი დღის
              სრულყოფილ დაწყებას
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-4 mr-8 text-black">
            <MdDinnerDining className="h-10 w-10"/>
            <p className="text-2xl font-bold text-black uppercase">საუზმე</p>
            <p className="text-center text-base  w-[266px] tracking-wider	  font-sans">
              დატკბით სასიამოვნო საუზმით, რაც უზრუნველყოფს თქვენი დილის გემრიელ
              დაწყებას
            </p>
          </div>
          <div className="items-center flex flex-col justify-center gap-4 mr-8 text-black">
            <img src={dribble} alt="Air Icon" className="w-10 h-10 mr-2 object-contain invert" />
            <p className="text-2xl font-bold text-black  uppercase">
              კულინარიული მასტერკლასი
            </p>
            <p className="text-center text-base font-sans tracking-wider	 w-[266px]">
              გთავაზობთ მეგობრულ სივრცეს გართობისა და დასვენებისთვის
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl text-mwvane font-bold uppercase mt-32">გალერეა</h2>
      <p className="mt-10 text-center text-black text-xl font-light">
        დაათვალიერეთ ჩვენი გალერეა და იხილეთ ჩვენი სასტუმრო სახლის სილამაზე.
        ელეგანტური <br /> ინტერიერიდან მომხიბვლელ გარემოებამდე, თითოეული სურათი
        მოგვითხრობს სიმშვიდისა და <br /> სტუმართმოყვარეობის ისტორიას."
      </p>
      <Link to={"/Gallery"} className="flex justify-end mb-2 px-1 ">
        ყველას ნახვა
      </Link>

      <div className="overflow-x-auto flex no-scrollbar gap-4 px-1">
        {photoArr.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event Photo ${index + 1}`}
            className="w-1/4 rounded-lg "
          />
        ))}
      </div>
    
      <h2 className="text-2xl mb-4 mt-16 text-mwvane font-bold">კონტაქტი</h2>
      <p className="mb-8 text-black text-xl">
        გაქვთ შეკითხვა ან გჭირდებათ დახმარება დაგვიკავშირდით!
      </p>

      <div className="flex justify-center">
      <div className="mb-10 flex gap-10 ">
        <div className=" border-mwvane border flex flex-col items-center p-3 shadow-2xl text-black">
          <MdEmail className="h-10 w-10"/>
          <div className="flex flex-col gap-6 mt-6">
            <h1 className="text-black font-bold text-2xl">ელ.ფოსტა</h1>
            <p className="w-[273px] text-base font-normal">
              We're here to help you find the perfect outfit.
            </p>
          </div>
          <h1 className="mt-16 underline">guesthouse@gmail.com</h1>
        </div>
        <div className=" border-mwvane border flex flex-col items-center p-3 shadow-2xl text-black">
        <MdLocalPhone className="h-10 w-10"/>
          <div className="flex flex-col gap-6 mt-6">
            <h1 className="text-black font-bold text-2xl">ტელეფონი</h1>
            <p className="w-[273px] text-base font-normal">
              Connect with us instantly for personalized assistance.
            </p>
          </div>
          <h1 className="mt-16 underline">+995 599 99 99 99</h1>
        </div>
        <div className="border-mwvane border flex flex-col items-center p-3 shadow-2xl text-black">
        <MdLocationPin className="h-10 w-10"/>
          <div className="mt-6 flex flex-col gap-6">
            <h1 className="text-black font-bold text-2xl">მდებარეობა</h1>
            <p className="w-[273px] text-base font-normal">
              Follow us on social media for fashion inspiration.
            </p>
          </div>
          <h1 className="mt-16 underline">ჩოხატაური, ჩხოკოურა</h1>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

//md MdLocalPhone