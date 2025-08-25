import React from "react";

// Example partner logos
import ShellsLogo from "@assets/partners/shells.png";
import SmartFinderLogo from "@assets/partners/smartfinder.png";
import ZoomerrLogo from "@assets/partners/zoomerr.png";
import ArtVenueLogo from "@assets/partners/artvenue.png";

const PartnerLogos = () => {
    const partners = [
        { id: 1, name: "Shells", logo: ShellsLogo },
        { id: 2, name: "SmartFinder", logo: SmartFinderLogo },
        { id: 3, name: "Zoomerr", logo: ZoomerrLogo },
        { id: 4, name: "ArtVenue", logo: ArtVenueLogo },
        // Add more brands here...
    ];

    return (
        <section className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
                    Our Trusted Partners
                </h2>
                <div className="overflow-x-auto">
                    <div className="flex space-x-12 items-center">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                                <p className="mt-2 text-sm text-gray-400 hover:text-gray-800 transition-colors duration-300">
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
