const LearnNZSection = () => {

    const stats = [
        { id: 1, value: "91", label: "Primary Student Visa", icon: "/icons/student.png" },
        { id: 2, value: "128", label: "Family Members", icon: "/icons/family.png" },
        { id: 3, value: "100%", label: "Visa Success Rate", icon: "/icons/success.png" },
        { id: 4, value: "100%", label: "Visa Approval Rate", icon: "/icons/approval.png" },
    ];


    return (
        <section className="py-12 bg-gray-100 font-urbanist">
            {/* Title & Subtitle */}
            <div className="text-center max-w-1xl mx-auto mb-10 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Learn About <span className="text-green-700">Epathways</span>
                </h2>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                    Discover how Epathways can guide you on your journey to New Zealand.
                    Learn about our services, support, and commitment to making your migration process smoother and more achievable.
                </p>
            </div>
            {/* Video Section */}
            <div className="max-w-4xl mx-auto px-4">
                <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
                    <iframe
                        className="w-full h-full"
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fepathwaysnz%2Fvideos%2F751938037313412%2F&show_text=false&width=560&t=0"
                        title="Learn About New Epathways"
                        style={{ border: "none", overflow: "hidden" }}
                        frameborder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="max-w-5xl mx-auto text-center px-4 mt-10">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Why Choose <span className="text-green-800">Epathways</span> as Your Partner
                </h2>
                <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
                    Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed.
                    Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
                    Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-10 h-10 mb-3 object-contain"
                            />
                            <p className="text-xl font-semibold text-gray-900">{item.value}</p>
                            <p className="text-sm text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default LearnNZSection;
