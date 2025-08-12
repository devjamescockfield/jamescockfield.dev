import React, {FC, useState} from 'react';
import Title from "@/components/tools/title";
import Link from "next/link";

type PortfolioCardProps = {
    showCard: string;
    category: string;
    ImageHref: string;
    title: string;
    button: string;
    buttonHref: string;
}

export default function Portfolio(): React.JSX.Element {

    const [showCard, setShowCard] = useState<string>("all");

    const handleProject = (category: string): void => {
        setShowCard(category);
    };

    return (
        <>
            <Title title={"Portfolio"}/>
            <section className="lg:p-40 md:p-24 p-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                  My Portfolio
                                </span>
                                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                                    Recent Projects
                                </h2>
                                <p className="text-body-color text-base dark:text-dark-6">
                                    Bellow are projects that I have worked on over the last few years.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "all"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                        }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("websites")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "websites"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                        }`}
                                    >
                                        Websites
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("apps")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "apps"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                        }`}
                                    >
                                        Mobile Apps
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("other")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                            showCard === "other"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                        }`}
                                    >
                                        Other
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <PortfolioCard
                            ImageHref="/img/sh.png"
                            category="Websites"
                            title="SimulatorHits"
                            button="View Details"
                            buttonHref="/portfolio/simulatorhits-website"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="/img/vtc-gateway.png"
                            category="Websites"
                            title="VTC Gateway"
                            button="View Details"
                            buttonHref="/portfolio/vtc-gateway"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="/img/SH_APP.png"
                            category="Apps"
                            title="SimulatorHits"
                            button="View Details"
                            buttonHref="/portfolio/simulatorhits-app"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="/img/tsr-app.png"
                            category="Apps"
                            title="TruckStopRadio"
                            button="View Details"
                            buttonHref="/portfolio/truckstopradio-app"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://omnibyte.tech/images/tracksim.png"
                            category="Other"
                            title="TrackSim Tracker"
                            button="View Details"
                            buttonHref="/portfolio/tracksim-tracker"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="/img/od.png"
                            category="Other"
                            title="OceanDrive"
                            button="View Details"
                            buttonHref="/portfolio/oceandrive"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="/img/HOWIETOUN.png"
                            category="Websites"
                            title="Howietoun Heritage website"
                            button="View Details"
                            buttonHref="/portfolio/howietounheritage"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="/img/oops-i-forget.png"
                            category="Apps"
                            title="Oops I Forget!"
                            button="View Details"
                            buttonHref="/portfolio/oops-i-forget"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="/img/ussc.png"
                            category="Websites"
                            title="University of Stirling Society of Computing"
                            button="View Details"
                            buttonHref="/portfolio/ussc"
                            showCard={showCard}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

const PortfolioCard: FC<PortfolioCardProps> = ({showCard, category, ImageHref, title, button, buttonHref,}) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase() ? "block" : "hidden"}`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <img src={ImageHref} alt="portfolio" className="w-full aspect-video object-cover"/>
                    </div>
                    <div
                        className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark text-black">
                            <span className="text-primary mb-2 block text-sm font-medium">
                              {category}
                            </span>
                        <h3 className="text-black mb-5 text-xl font-bold">{title}</h3>
                        <Link
                            href={buttonHref}
                            className="text-white bg-emerald-800 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition"
                        >
                            {button}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};