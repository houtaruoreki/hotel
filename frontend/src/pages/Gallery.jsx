import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
    return (
        <div>
            <Header></Header>
        <div className="bg-mwvane p-10">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">
                    გალერია
                </h1>
                <p className="text-lg mb-8">
                    შევაბიჯოთ ვიზუალური ბრწყინვალების სამყარში, როდესაც შეისწავლით გალერიას, რომელიც
                    ასახავს ჩევენი სასტუმროს მომხიბლავ გარემოს. თქვენ შეგხვდებათ სურათების გლეარია, რომელიც
                    აღწერს ჩვენი მშვენიერი ადგილის არსს.
                </p>

                {/* External views section */}
                <h2 className="text-2xl font-semibold mb-4">გარე ხედი</h2>
                <div className="overflow-x-auto flex">
                    {[...Array(4)].map((_, index) => (
                        <img
                            key={index}
                            src={`https://via.placeholder.com/400x300?text=External+Photo+${index + 1}`}
                            alt={`External Photo ${index + 1}`}
                            className="w-1/4 rounded-lg mr-4"
                        />
                    ))}
                </div>

                {/* Interior views section */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">შიდა ხედები</h2>
                <div className="overflow-x-auto flex">
                    {[...Array(4)].map((_, index) => (
                        <img
                            key={index}
                            src={`https://via.placeholder.com/400x300?text=Interior+Photo+${index + 1}`}
                            alt={`Interior Photo ${index + 1}`}
                            className="w-1/4 rounded-lg mr-4"
                        />
                    ))}
                </div>

                {/* Events and activities section */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">ღონისძიებები და აქტივობები</h2>
                <div className="overflow-x-auto flex">
                    {[...Array(4)].map((_, index) => (
                        <img
                            key={index}
                            src={`https://via.placeholder.com/400x300?text=Event+Photo+${index + 1}`}
                            alt={`Event Photo ${index + 1}`}
                            className="w-1/4 rounded-lg mr-4"
                        />
                    ))}
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>

    );
}