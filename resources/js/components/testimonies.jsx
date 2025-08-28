import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "react-feather"; // ✅ Import chevrons

const images = import.meta.glob("/resources/Assets/Testimonies/*", { eager: true, import: "default" });

const imageMap = Object.keys(images).reduce((acc, key) => {
    const filename = key.split("/").pop();
    acc[filename] = images[key];
    return acc;
}, {});

const testimonials = [
    {
        name: "Kent Dinfer",
        role: "Health Care Support Worker",
        text: "I cannot thank ePathways enough for the incredible support and guidance they provided throughout my journey. Following their advice, I pursued my studies diligently, and within just one year, I secured a full- time job in the healthcare sector. This opportunity not only kick-started my career but also allowed me to achieve a significant milestone - buying my very first car at the age of 19. It's all thanks to the expertise and dedication of ePathways that I have been able to make such remarkable progress in my life. I am truly grateful for their assistance and would highly recommend ePathways to anyone seeking to achieve their dreams.",
        image: "testi1.png",
    },
    {
        name: "Julie Ann and Dennis",
        role: "Student and Nurse",
        text: "ePathways has been an invaluable guiding light in our journey to New Zealand. eP provided us with personalized support, handling all the immigration and settlement processes with expertise and efficiency. We were continually kept informed, making us feel valued as clients. Thanks to ePathways, we are now living our dream in New Zealand, and we wholeheartedly recommend their exceptional services to anyone looking to make a smooth transition to this beautiful country.",
        image: "testi2.png",
    },
    {
        name: "Mia Cristialen Boqueda",
        role: "Student Visa - Approved in 15 days",
        text: "I found working with ePathways really smooth all the way from the beginning when I didn't even know what the first step should be",
        image: "testi3.png",
    },
];

const TestimonialSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="relative py-16 px-4 bg-gray-50 font-urbanist overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-green-900 w-[85%] h-[65%] rounded-lg opacity-90"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 justify-center transition-all duration-500">
                    {/* Testimonial Box */}
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
                        <p className="text-sm font-semibold text-green-900 mb-2">Testimonial</p>
                        <h3 className="text-lg font-bold text-gray-900">{testimonials[index].name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{testimonials[index].role}</p>
                        <p className="text-gray-600 mb-6 text-sm">{testimonials[index].text}</p>

                        {/* Stars */}
                        {/* <div className="flex gap-1 text-green-900">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-green-900" />
                            ))}
                        </div> */}
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={ imageMap[testimonials[index].image]}
                            alt={testimonials[index].name}
                            className="w-72 h-96 object-cover rounded-md shadow-md transition-all duration-500"
                        />
                        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 rotate-90">
                            <p className="text-white text-sm font-bold tracking-widest">
                                WHAT THEY SAY ABOUT US?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-6 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-3 bg-green-500 text-white rounded-full hover:bg-green-300 transition"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 bg-green-500 text-white rounded-full hover:bg-green-300 transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex gap-2 mt-4">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index ? "bg-green-500 scale-110" : "bg-gray-300"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
