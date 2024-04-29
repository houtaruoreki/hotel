import React from "react";
import ServicesList from "../components/ServicesList";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Service() {
  return (
    <div> 
      <Header></Header>
    <div className="bg-mwvane text-white p-10">
      {/* Existing content */}
      <div className="flex justify-center items-center flex-col mb-8">
        <h2 className="text-2xl font-bold mb-4">სერვისები</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="items-left gap-4">
          <p className="text-lg">ლამაზი ხედი</p>
          <p className="text-lg font-helvetica hover:font-helvetica text-[#D9D9D9]">
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">საუზმე</h2>
        <p className="text-lg font-helvetica hover:font-helvetica text-[#D9D9D9]">
          როდესაც თქვენ დატკბებით ჩვენს სასტუმრო სახლში შემოთავაზებულ კულინარიულ
          სიამოვნებით, მოემზადეთ არა მხოლოდ დახვეწილი გემოებით, არამედ
          თვალწარმტაცი ხედებით, რომლებიც ამაღლებს თქვენს სასადილო გამოცდილებას
          ახალ სიმაღლეებზე.
        </p>
        <div className="overflow-x-auto flex">
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          კულინარიული მასტერკლასი
        </h2>
        <p className="text-lg font-helvetica hover:font-helvetica text-[#D9D9D9]">
          ჩაეფლო დასვენებისა და დასვენების სამყაროში ჩვენს საოჯახო სასტუმროში,
          სადაც ჩვენ გთავაზობთ სათამაშო სივრცეს, რათა უზრუნველყოს თქვენი ყოფნის
          ყოველი მომენტი სავსე გართობითა და ხალისით. სამაგიდო თამაშებიდან
          დაწყებული გარე აქტივობებით დამთავრებული, ყველასთვის არის რაღაც
          სიამოვნება
        </p>
        <div className="overflow-x-auto flex">
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
      </div>

      <ServicesList></ServicesList>
    </div>
        <Footer></Footer>
    </div>
  );
}

