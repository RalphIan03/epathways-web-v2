import CarouselHeader from "@/components/events-carousel"

const slides = [
    {
        image: new URL("@assets/Events/garyv.jpg", import.meta.url).href,
        title: "Gary V in New Zealand",
        description: "Music icon 𝗚𝗮𝗿𝘆 𝗩𝗮𝗹𝗲𝗻𝗰𝗶𝗮𝗻𝗼 𝗮𝗻𝗱 𝗵𝗶𝘀 𝗰𝗼𝗻𝗰𝗲𝗿𝘁 𝘁𝗲𝗮𝗺 are officially set to take the stage in Australia and New Zealand",
        urlref:"https://www.facebook.com/share/p/1AumEtaSA3/"
    },
    {
        image: new URL("@assets/Events/newrights.jpg", import.meta.url).href,
        title: "Upcoming Changes to Student Visa Work Rights",
        description: "New Rules, Bigger Opportunities for International Students! ✨",
        urlref:"https://www.facebook.com/share/p/171XtpCHXg/"
    }
]


const AnnouncementSection = () => {
    return (
        <section className="bg-gray-100 py-10 px-4 font-urbanist">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Events and Announcements
                </h1>
                <p className="mt-4 text-sm sm:text-base text-gray-600">
                    Stay informed with the latest updates, opportunities, and important announcements about living, working, and studying in New Zealand
                </p>
            </div>

            {/* Announcement Card */}
            <CarouselHeader slides={slides} />

            {/* Button */}
            <div className="flex justify-center mt-8">
                <button className="bg-green-800 hover:bg-green-900 text-white font-semibold px-6 py-2 rounded">
                    See More Events
                </button>
            </div>
        </section>
    );
};

export default AnnouncementSection;
