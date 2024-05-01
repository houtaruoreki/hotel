import React from "react";
import facebook from "../assets/icon-facebook.png";
import linkedin from "../assets/icon-linkedin.png";
import instagram from "../assets/icon-instagram.png";
import mail from "../assets/icon-mail.png";
import youtube from "../assets/icon-youtube.png";


export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center bg-[#F2F9F1] p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 mb-5 md:mb-0">
        <div className="grid">
        <div className="font-bold text-xl w-full md:w-auto">
          სასტუმროს შესახებ
        </div>
        <div className="text-base w-full md:w-auto">
          კეთილი იყოს თქვენი მობრძანება ჩვენს საოჯახო სასტუმროში, სადაც სტუმართმოყვარეობა ხვდება სიმშვიდეს. კომფორტული საცხოვრებლით, თანამედროვე კეთილმოწყობითა და პერსონალური სერვისით, ჩვენ ვცდილობთ, დავრწმუნდით, რომ ყველა სტუმარი ისიამოვნებს დასამახსოვრებელი დასვენებით. დაათვალიერეთ ჩვენი ვებგვერდი, რომ გაიგოთ მეტი ჩვენი შეთავაზებების შესახებ ჩვენ მოუთმენლად ველით, რომ მოგესალმოთ ჩვენს სასტუმრო სახლში და ერთად შევქმნათ დაუვიწყარი მოგონებები!
        </div>
        <div className="flex"> 
        <img src={facebook} className="w-10 h-10 mr-2 " />
        <img src={linkedin} className="w-10 h-10 mr-2 " />
        <img src={instagram} className="w-10 h-10 mr-2 " />
        <img src={mail} className="w-10 h-10 mr-2 " />
        <img src={youtube} className="w-10 h-10 mr-2 " />
        </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <div className="text-xl">მთავარი</div>
          <div className="text-xl">ოთახი</div>
          <div className="text-xl">სერვისი</div>
        </div>
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <div className="text-xl">ჩვენ შესახებ</div>
          <div className="text-xl">დაჯავშნა</div>
          <div className="text-xl">გალერეა</div>
        </div>
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <div className="text-xl">კონტაქტი</div>
        </div>
      </div>
    </footer>
  );
}