import React from "react";
import RoomsList from "../components/RoomsList";
import dribble from "/Images/icon-dribbble.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SimpleSlider from "../components/SimpleSlider";
import { MdCoffee, MdDinnerDining, MdEmail, MdLandscape, MdLocalPhone, MdLocationPin} from "react-icons/md";

export default function Home() {
  const { t } = useTranslation();
  const photoArr = ["https://images.unsplash.com/photo-1612374172029-be0eea9796a8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630930024868-6e7b23e41b59?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.div
    className="bg-foni text-center text-white "
  >
      <SimpleSlider/>
      <div className="pt-[50px]">
        <h3 style={{width: "50%", margin: '0 auto'}} className="text-4xl font-bold text-black mt-20 leading-9 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900">
        {t("greetingHome")}
        </h3>
        <p className="text-slate-400 text-xl font-light mt-6">
          {t('pHome')}
          <br />
          {t('brHome')}
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
      <Link to={"/Gallery"} className="flex justify-end mb-2 px- ">
        ყველას ნახვა
      </Link>

      <div className="overflow-x-auto flex no-scrollbar gap-4 px-1 justify-around">
        {photoArr.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event Photo ${index + 1}`}
            className="w-1/5 rounded-lg "
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