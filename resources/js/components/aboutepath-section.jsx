const LearnNZSection = () => {
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
        </section>
    );
};

export default LearnNZSection;
