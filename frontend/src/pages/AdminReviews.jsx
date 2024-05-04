import React, { useState } from "react";
import AdminPageSelector from "../components/AdminPageSelector";
import AdminPages from "../components/AdminPages";

export default function AdminReviews() {
  return (
    <div className="flex">
      {/* Left side */}
      <div className="w-1/4 p-4">
        <AdminPageSelector />
      </div>
      <div className="flex flex-col gap-5 px-5 text-sm leading-5 max-w-[874px] max-md:flex-wrap">
        <div className="gap-0 w-full text-3xl font-bold tracking-tight leading-6 text-black lowercase max-md:flex-wrap max-md:max-w-full">
          სტუმრების შეფასება
        </div>
        <div className="flex gap-0 pr-1.5 mt-11 text-gray-500 bg-white rounded-lg border border-indigo-50 border-solid max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col gap-0 text-gray-800 whitespace-nowrap">
            <div className="justify-center items-start px-6 py-2.5 text-xs text-black uppercase bg-green-100 max-md:px-5">
              სახელი
            </div>
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              სალომე
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              მარი
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ანა
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              გიო
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ნიკა
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
          </div>
          <div className="flex flex-col gap-0 whitespace-nowrap">
            <div className="justify-center items-start px-6 py-2.5 text-xs text-black uppercase bg-green-100 max-md:px-5">
              გვარი
            </div>
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              კახიშვილი
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              დოლიძე
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ბერიძე
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              გედენიძე
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ლომიძე
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
          </div>
          <div className="flex flex-col gap-0 whitespace-nowrap">
            <div className="justify-center items-start px-6 py-2.5 text-xs text-black uppercase bg-green-100 max-md:px-5">
              კმაყოფილია
            </div>
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              კი
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              არა
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ნაწილობრივ
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              არა
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              კი
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
          </div>
          <div className="flex flex-col gap-0 text-xs text-black whitespace-nowrap">
            <div className="justify-center items-start px-6 py-2.5 uppercase bg-green-100 max-md:px-5">
              ელ.ფოსტა
            </div>
            <div className="justify-center px-3 py-4 text-center bg-white">
              skakhsihvili@gmail.com
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-3 py-4 text-center bg-white">
              skakhsihvili@gmail.com
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-3 py-4 text-center bg-white">
              skakhsihvili@gmail.com
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-3 py-4 text-center bg-white">
              skakhsihvili@gmail.com
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-3 py-4 text-center bg-white">
              skakhsihvili@gmail.com
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
          </div>
          <div className="flex flex-col flex-1 gap-0 leading-5">
            <div className="justify-center items-start px-6 py-2.5 text-xs leading-5 text-black uppercase whitespace-nowrap bg-green-100 max-md:px-5">
              მესიჯი/კომენტარი
            </div>
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="justify-center px-6 py-4 bg-white max-md:px-5">
              ნათელი ოთახი, ორადგილიანი საწოლი, ხედი ...
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
          </div>
          <div className="flex flex-col gap-0 text-teal-700 whitespace-nowrap">
            <div className="shrink-0 gap-0 bg-green-100 h-[38px]" />
            <div className="flex flex-col gap-0 justify-center px-5 py-4 bg-white">
              <div className="flex flex-col gap-0 justify-center">
                <div className="justify-center px-6 py-2.5 bg-green-100 rounded-lg max-md:px-5">
                  ნახვა
                </div>
              </div>
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="flex flex-col gap-0 justify-center px-5 py-4 bg-white">
              <div className="flex flex-col gap-0 justify-center">
                <div className="justify-center px-6 py-2.5 bg-green-100 rounded-lg max-md:px-5">
                  ნახვა
                </div>
              </div>
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="flex flex-col gap-0 justify-center px-5 py-4 bg-white">
              <div className="flex flex-col gap-0 justify-center">
                <div className="justify-center px-6 py-2.5 bg-green-100 rounded-lg max-md:px-5">
                  ნახვა
                </div>
              </div>
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="flex flex-col gap-0 justify-center px-5 py-4 bg-white">
              <div className="flex flex-col gap-0 justify-center">
                <div className="justify-center px-6 py-2.5 bg-green-100 rounded-lg max-md:px-5">
                  ნახვა
                </div>
              </div>
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="flex flex-col gap-0 justify-center px-5 py-4 bg-white">
              <div className="flex flex-col gap-0 justify-center">
                <div className="justify-center px-6 py-2.5 bg-green-100 rounded-lg max-md:px-5">
                  ნახვა
                </div>
              </div>
            </div>
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
            <div className="shrink-0 gap-0 h-px bg-indigo-50" />
          </div>
        </div>
        


        <AdminPages></AdminPages>
      </div>
    </div>
  );
}
