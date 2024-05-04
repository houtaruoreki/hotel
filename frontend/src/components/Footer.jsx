import React from "react";
import facebook from "../assets/icon-facebook.png";
import linkedin from "../assets/icon-linkedin.png";
import instagram from "../assets/icon-instagram.png";
import mail from "../assets/icon-mail.png";
import youtube from "../assets/icon-youtube.png";
import copyright from "../assets/copyright.png";

export default function Footer() {
  const handleRedirect = (path) => {
    window.location.href = path;
  };
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      <footer className="flex flex-col md:flex-row items-center bg-[#F2F9F1] md:p-6">
        <div className=" ">
          <div className="grid">
            <div className="font-bold text-xl w-full md:w-auto">
              სასტუმროს შესახებ
            </div>
            <div className="text-base w-full md:w-auto">
              კეთილი იყოს თქვენი მობრძანება ჩვენს საოჯახო სასტუმროში, სადაც
              სტუმართმოყვარეობა ხვდება სიმშვიდეს. კომფორტული საცხოვრებლით,
              თანამედროვე კეთილმოწყობითა და პერსონალური სერვისით, ჩვენ ვცდილობთ,
              დავრწმუნდით, რომ ყველა სტუმარი ისიამოვნებს დასამახსოვრებელი
              დასვენებით. დაათვალიერეთ ჩვენი ვებგვერდი, რომ გაიგოთ მეტი ჩვენი
              შეთავაზებების შესახებ ჩვენ მოუთმენლად ველით, რომ მოგესალმოთ ჩვენს
              სასტუმრო სახლში და ერთად შევქმნათ დაუვიწყარი მოგონებები!
            </div>
            <div className="flex gap-3">
              <img
                src={facebook}
                alt="Facebook"
                className="w-8 h-8 cursor-pointer"
                onClick={() => handleOpenNewTab("https://www.facebook.com")}
              />
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 h-8 cursor-pointer"
                onClick={() => handleOpenNewTab("https://www.linkedin.com")}
              />
              <img
                src={instagram}
                alt="Instagram"
                className="w-8 h-8 cursor-pointer"
                onClick={() => handleOpenNewTab("https://www.instagram.com")}
              />
              <img
                src={mail}
                alt="Mail"
                className="w-8 h-8 cursor-pointer"
                onClick={() => handleOpenNewTab("mailto:example@example.com")}
              />
              <img
                src={youtube}
                alt="YouTube"
                className="w-8 h-8 cursor-pointer"
                onClick={() => handleOpenNewTab("https://www.youtube.com")}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
          <div className="flex flex-col items-start gap-3 md:gap-5">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleRedirect("/")}
            >
              მთავარი
            </button>
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleRedirect("/Rooms")}
            >
              ოთახი
            </button>
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleRedirect("/Service")}
            >
              სერვისი
            </button>
          </div>
          <div className="flex flex-col items-start gap-3 md:gap-5">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleRedirect("/AboutUs")}
            >
              ჩვენ შესახებ
            </button>
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleRedirect("/Reservation")}
            >
              დაჯავშნა
            </button>
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleRedirect("/Gallery")}
            >
              გალერეა
            </button>
          </div>
          <div className="flex flex-col items-start gap-3 md:gap-5">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleRedirect("/ContactUs")}
            >
              კონტაქტი
            </button>
          </div>
        </div>
      </footer>

      <div className=" bg-[#F2F9F1] flex flex-col justify-center items-center">
        <div className="flex justify-center bg-[#F2F9F1] items-center">
          <img src={copyright} className="w-7 h-7 mr-2" />
          <div className="text-xl">Copyright</div>
        </div>
        <div className="bg-[#F2F9F1] mt-4  "></div>
      </div>
    </div>
  );
}
