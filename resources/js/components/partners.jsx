import React, { useRef, useState, useEffect } from "react";

const images = import.meta.glob("/resources/Assets/Partners/*", { eager: true, import: "default" });

const imageMap = Object.keys(images).reduce((acc, key) => {
    const filename = key.split("/").pop();
    acc[filename] = images[key];
    return acc;
}, {});

const PartnerLogos = () => {
    const partners = [
        { id: 1, name: "Aukland Institute of Studies", logo: "AIS.png", url: "https://ais.ac.nz" },
        { id: 2, name: "ICL Graduate Business School", logo: "icl.png", url: "https://icl.ac.nz" },
        { id: 3, name: "Skills", logo: "skills.png", url: "https://skills.org.nz" },
        { id: 4, name: "Strategix", logo: "Strategix.png", url: "https://strategix.com" },
        { id: 5, name: "Tawera Groups", logo: "tawera.png", url: "https://tawera.com" },
        { id: 6, name: "Whitecliffe", logo: "whitecligge.png", url: "https://whitecliffe.ac.nz" },
        // Add more partners here...
    ];

    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft: sl, scrollWidth, clientWidth } = scrollRef.current;

        setShowLeft(sl > 0);
        setShowRight(sl + clientWidth < scrollWidth - 1); // tolerance added
    };


    useEffect(() => {
        checkScroll();
        const handleResize = () => checkScroll();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const amount = 300;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-gray-100 py-8 relative">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
                    Our Trusted Partners
                </h2>
                <div className="relative">
                    {/* Left Arrow */}
                    {showLeft && (
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
                        >
                            ◀
                        </button>
                    )}

                    {/* Logos - scrollable */}
                    <div
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="overflow-x-auto scrollbar-hide scroll-smooth scrollbar-hide mb-10"
                    >
                        <div className="flex space-x-12 items-center">
                            {partners.map((partner) => (
                                <a
                                    key={partner.id}
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center flex-shrink-0 cursor-pointer group"
                                >
                                    <img
                                        src={imageMap[partner.logo]}
                                        alt={partner.name}
                                        className="h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    <p className="ml-4 text-sm text-gray-400 group-hover:text-gray-800 transition-colors duration-300">
                                        {partner.name}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    {showRight && (
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
                        >
                            ▶
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
