import React from "react";
import RoomsList from "../components/RoomsList"; // Import the RoomsList component
import ServicesList from "../components/ServicesList";
import coffee from "../assets/icon-coffee.png";
import loader from "../assets/icon-loader.png";
import dribble from "../assets/icon-dribbble.png";
import vectorL from "../assets/vector-left.png";
import vectorR from "../assets/vector-right.png";
import mail from "../assets/icon-mail.png";
import phone from "../assets/icon-phone.png";
import map from "../assets/icon-map-pin.png";
import Header from "../components/Header";

export default function Home() {
  return (


<div className="bg-mwvane text-center text-white">
    
      <h2 className="text-2xl mb-4">
        კეთილი იყოს თქვენი მობრძანება ჩვენს სასტუმრო სახლში
      </h2>
      <p className="mb-8">
        ჩოხატაურის მშვიდი სილამაზის შუაგულში, ულამაზეს სოფელ ჩხოკურაში, ჩვენი
        სასტუმრო სახლი გთავაზობთ მშვიდ დასვენებას.
      </p>
      <h3 className="text-xl mb-4">ოთახები</h3>
      <RoomsList />

      <h2 className="text-2xl mb-4">სერვისები</h2>
      <p className="mb-8">
        გამოიცადეთ თქვენს საჭიროებებზე მორგებული განსაკუთრებული სერვისი. ჩვენ
        მზად ვართ უზრუნველვყოთ თქვენი კომფორტი და კმაყოფილება
      </p>

      <div className="flex mt-8 ">
        <div className="items-center mr-8 ">
          <img src={loader} alt="Sun Icon" className="w-10 h-10 mr-2 " />
          <p className="text-3xl">ლამაზი ხედი</p>
          <p>
            გაიღვიძე ბუნების საოცარი ხედებით ,რაც უზრუნველყოფს თქვენი დღის
            სრულყოფილ დაწყებას
          </p>
        </div>
        <div className=" items-center justify-center mr-8">
          <img src={coffee} alt="Home Icon" className="w-10 h-10 mr-2" />
          <p className="text-3xl">საუზმე</p>
          <p>
            დატკბით სასიამოვნო საუზმით, რაც უზრუნველყოფს თქვენი დილის გემრიელ
            დაწყებას
          </p>
        </div>
        <div className=" items-center ">
          <img src={dribble} alt="Air Icon" className="w-10 h-10 mr-2 " />
          <p className="text-3xl">კულინარიული მასტერკლასი</p>
          <p>გთავაზობთ მეგობრულ სივრცეს გართობისა და დასვენებისთვის</p>
        </div>
      </div>

      <ServicesList />

      <h2 className="text-2xl mb-4">გალერეა</h2>
      <p className="mb-8">
        დაათვალიერეთ ჩვენი გალერეა და იხილეთ ჩვენი სასტუმრო სახლის სილამაზე.
        ელეგანტური ინტერიერიდან მომხიბვლელ გარემოებამდე, თითოეული სურათი
        მოგვითხრობს სიმშვიდისა და სტუმართმოყვარეობის ისტორიას."
      </p>

      <div className="overflow-x-auto flex">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/400x300?text=Event+Photo+${index + 1}`}
            alt={`Event Photo ${index + 1}`}
            className="w-1/4 rounded-lg mr-4" />
        ))}
      </div>
      <div className="flex gap-4 justify-end">
        <img src={vectorL} alt="Air Icon" className="" />
        <img src={vectorR} alt="Air Icon" className=" " />
      </div>

      <h2 className="text-2xl mb-4">კონტაქტი</h2>
      <p className="mb-8">
        გაქვთ შეკითხვა ან გჭირდებათ დახმარება დაგვიკავშირდით!
      </p>

      <div className="flex justify-center gap-10">
        <div className=" border-white border">
          <img src={mail} />
          <h1>ელ.ფოსტა</h1>
          <p>We're here to help you find the perfect outfit.</p>
          <h1>guesthouse@gmail.com</h1>

        </div>
        <div className=" border-white border">
          <img src={phone} />
          <h1>ტელეფონი</h1>
          <p>Connect with us instantly for personalized assistance.</p>
          <h1>+995 599 99 99 99</h1>


        </div>
        <div className="border-white border ">
          <img src={map} />
          <h1>მდებარეობა</h1>
          <p>Follow us on social media for fashion inspiration.</p>
          <h1>ჩოხატაური, ჩხოკოურა</h1>


        </div>
      </div>
    </div>
  );
}

