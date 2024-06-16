import React from "react";
import facebook from "/Images/icon-facebook.png";
import linkedin from "/Images/icon-linkedin.png";
import instagram from "/Images/icon-instagram.png";
import mail from "/Images/icon-mail.png";
import youtube from "/Images/icon-youtube.png";
import copyright from "/Images/copyright.png";
import Navigation from "./Navigation";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

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
    <footer className="w-full bg-mwvane p-5 flex flex-col justify-between items-center gap-10 text-white" >
      <div className="flex flex-col  justify-start items-center gap-20 p-0 ">
        <div className="flex p-0 gap-[25px] pt-6" style={{ alignItems: 'center', justifyContent: "center"}}>
          <div className="">
          <span className=" text-3xl font-bold leading-[0.75] tracking-wide ">
            სასტუმროს შესახებ
          </span>
          <p className="text-base line-clamp-3" style={{width: "50%"}}>
            კეთილი იყოს თქვენი მობრძანება ჩვენს საოჯახო სასტუმროში, სადაც
            სტუმართმოყვარეობა ხვდება სიმშვიდეს. კომფორტული საცხოვრებლით,
            თანამედროვე კეთილმოწყობითა და პერსონალური სერვისით, ჩვენ ვცდილობთ,
            დავრწმუნდით, რომ ყველა სტუმარი ისიამოვნებს დასამახსოვრებელი
            დასვენებით. დაათვალიერეთ ჩვენი ვებგვერდი, რომ გაიგოთ მეტი ჩვენი
            შეთავაზებების შესახებ ჩვენ მოუთმენლად ველით, რომ მოგესალმოთ ჩვენს
            სასტუმრო სახლში და ერთად შევქმნათ დაუვიწყარი მოგონებები!
          </p>
          </div>
          <div className="flex justify-between w-[450px] gap-9">
            <a href="https://www.facebook.com/" style={{fontSize: '25px'}}>
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/" style={{fontSize: '25px'}}>
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/" style={{fontSize: '25px'}}>
              <FaInstagram />
            </a>
            <a href="https://mail.google.com/" style={{fontSize: '25px'}}>
              <MdOutgoingMail />
            </a>
            <a href="https://www.youtube.com/" style={{fontSize: '25px'}}>
              <FaYoutube />
            </a>
          </div>
        </div>
        <Navigation links={footerLinks} activeLink={-1} />
      </div>
      <div className="flex  justify-center items-center gap-4">
        <img className="w-5 h-5" src={copyright} alt="copyright icon" />
        <p className="text-[15px]">Copyright</p>
      </div>
    </footer>
  );
}