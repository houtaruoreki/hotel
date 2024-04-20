import React from "react";

export default function FooterContent() {
  return (
    <footer>
      <div className="flex flex-row items-center gap-10 p-2.5" style={{ width: '976px', height: '337px' }}>
        <div className="flex flex-col items-start gap-25" style={{ width: '568px', height: '337px' }}>
          <div className="font-bold text-xl" style={{ width: '318px', height: '24px', fontFamily: 'Helvetica', letterSpacing: '-0.01em', color: '#000000' }}>
            სასტუმროს შესახებ
          </div>
          <div className="text-base" style={{ width: '565px', height: '288px', fontFamily: 'Helvetica', letterSpacing: '-0.01em', color: '#000000' }}>
            კეთილი იყოს თქვენი მობრძანება ჩვენს საოჯახო სასტუმროში, სადაც სტუმართმოყვარეობა ხვდება სიმშვიდეს. კომფორტული საცხოვრებლით, თანამედროვე კეთილმოწყობითა და პერსონალური სერვისით, ჩვენ ვცდილობთ, დავრწმუნდით, რომ ყველა სტუმარი ისიამოვნებს დასამახსოვრებელი დასვენებით. დაათვალიერეთ ჩვენი ვებგვერდი, რომ გაიგოთ მეტი ჩვენი შეთავაზებების შესახებ ჩვენ მოუთმენლად ველით, რომ მოგესალმოთ ჩვენს სასტუმრო სახლში და ერთად შევქმნათ დაუვიწყარი მოგონებები!
          </div>
        </div>
        <div className="flex flex-col items-start gap-35" style={{ width: '334px', height: '154px' }}>
          <div className="flex flex-row items-start gap-20" style={{ width: '276px', height: '28px' }}>
            <div className="text-xl" style={{ width: '103px', height: '28px', fontFamily: 'Helvetica', color: '#000000' }}>
              მთავარი
            </div>
            <div className="text-xl" style={{ width: '153px', height: '28px', fontFamily: 'Helvetica', color: '#000000' }}>
              ჩვენ შესახებ
            </div>
          </div>
          <div className="flex flex-row items-start gap-20" style={{ width: '209px', height: '28px' }}>
            <div className="text-xl" style={{ width: '78px', height: '28px', fontFamily: 'Helvetica', color: '#000000' }}>
              ოთახი
            </div>
            <div className="text-xl" style={{ width: '111px', height: '28px', fontFamily: 'Helvetica', color: '#000000' }}>
              დაჯავშნა
            </div>
          </div>
          <div className="flex flex-row items-start gap-20" style={{ width: '356px', height: '28px' }}>
            <div className="text-xl" style={{ width: '96px', height: '28px', fontFamily: 'Helvetica', color: '#000000' }}>
              სერვისი
            </div>
            <div className="text-xl" style={{ width: '105px', height: '28px', fontFamily: 'Helvetica', color: '#000000' }}>
              გალერეა
            </div>
            <div className="text-xl" style={{ width: '115px', height: '28px', fontFamily: 'Helvetica', color: '#000000' }}>
              კონტაქტი
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
