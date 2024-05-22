import React from "react";
import facebook from "/Images/icon-facebook.png";
import linkedin from "/Images/icon-linkedin.png";
import instagram from "/Images/icon-instagram.png";
import mail from "/Images/icon-mail.png";
import youtube from "/Images/icon-youtube.png";
import copyright from "/Images/copyright.png";
import Navigation from "./Navigation";

export default function Footer() {
  const footerLinks = [
    { to: "/", label: "მთავარი" },
    { to: "/AboutUs", label: "ჩვენ შესახებ" },
    { to: "/Rooms", label: "ოთახები" },
    { to: "/Reservation", label: "დაჯავშნა" },
    { to: "/Service", label: "სერვისი" },
    { to: "/Gallery", label: "გალერეა" },
    { to: "/ContactUs", label: "კონტაქტი" },
  ];

  return (
    <footer className="w-full bg-mwvane p-5 flex flex-col justify-between items-center gap-10 text-white">
      <div className="flex  justify-start items-center gap-28 p-0 ">
        <div className="flex flex-col justify-start items-start p-0 gap-[25px] ">
          <span className=" text-3xl font-bold leading-[0.75] tracking-wide ">
            სასტუმროს შესახებ
          </span>
          <p className="text-[15px]">
            {" "}
            კეთილი იყოს თქვენი მობრძანება ჩვენს საოჯახო სასტუმროში, სადაც
            სტუმართმოყვარეობა ხვდება სიმშვიდეს. კომფორტული საცხოვრებლით,
            თანამედროვე კეთილმოწყობითა და პერსონალური სერვისით, ჩვენ ვცდილობთ,
            დავრწმუნდით, რომ ყველა სტუმარი ისიამოვნებს დასამახსოვრებელი
            დასვენებით. დაათვალიერეთ ჩვენი ვებგვერდი, რომ გაიგოთ მეტი ჩვენი
            შეთავაზებების შესახებ ჩვენ მოუთმენლად ველით, რომ მოგესალმოთ ჩვენს
            სასტუმრო სახლში და ერთად შევქმნათ დაუვიწყარი მოგონებები!
          </p>
          <div className="flex justify-between w-[250px]">
            <a href="https://www.facebook.com/">
              <img className="w-5 h-5" src={facebook} alt="facebook icon" />
            </a>
            <a href="https://www.linkedin.com/">
              <img className="w-5 h-5" src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://www.instagram.com/">
              <img className="w-5 h-5" src={instagram} alt="instagram icon" />
            </a>
            <a href="https://mail.google.com/">
              <img className="w-5 h-5" src={mail} alt="email icon" />
            </a>
            <a href="https://www.youtube.com/">
              <img className="w-5 h-5" src={youtube} alt="youtube icon" />
            </a>
          </div>
        </div>
        <Navigation links={footerLinks} activeLink={-1} />
      </div>
      <div className="flex  justify-center items-center gap-[19px]">
        <img className="w-5 h-5" src={copyright} alt="copyright icon" />
        <p className="text-[15px]">Copyright</p>
      </div>
    </footer>
  );
}
