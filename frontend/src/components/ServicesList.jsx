import React from "react";
import sunIcon from "../assets/sun.png";
import homeIcon from "../assets/home.png";
import airIcon from "../assets/air.png";

const ServicesList = () => {
  return (
    <div className="flex mt-8 ">
      <div className="items-center mr-8 ">
        <img src={sunIcon} alt="Sun Icon" className="w-10 h-10 mr-2 " />
        <p className="text-3xl">ნაბეღლავის წყლების დათვალიერება</p>
        <p>
          ისიამოვნეთ ჩვენი უფასო WiFi სერვისით, რაც საშუალებას მოგცემთ იყოთ
          ხელმისაწვდომი
        </p>
      </div>
      <div className=" items-center justify-center mr-8">
        <img src={homeIcon} alt="Home Icon" className="w-10 h-10 mr-2" />
        <p className="text-3xl">ნოდარ დუმბაძის სახლ-მუზეუმის ტური</p>
        <p>
          ადმინისტრაცია გაგიწევთ დახმარებასა და მხარდაჭერას, როცა დაგჭირდებათ
        </p>
      </div>
      <div className=" items-center ">
        <img src={airIcon} alt="Air Icon" className="w-10 h-10 mr-2 " />
        <p className="text-3xl">ლაშქრობა</p>
        <p >
          მიიღეთ დამატებითი სერვისები, რომელიც შექმნილია თქვენი ყველა საჭიროების
          დასაკმაყოფილებლად."
        </p>
      </div>
    </div>
  );
};

export default ServicesList;
