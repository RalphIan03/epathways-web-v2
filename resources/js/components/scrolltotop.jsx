import { useState, useEffect } from "react";
import { ChevronUp } from "react-feather";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down 200px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-green-700 text-white shadow-lg hover:bg-green-800 transition-all"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
