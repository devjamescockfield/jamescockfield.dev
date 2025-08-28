import '@/styles/globals.css'
import '@/styles/custom.css'
import type {AppProps} from 'next/app'
import VerticalNavigation from "@/components/widgets/VerticalNavigation";
import React, {useState} from "react";
import HorizontalNavigation from "@/components/widgets/HorizontalNavigation";

export default function App({Component, pageProps}: AppProps) {
    const [selectedContent, setSelectedContent] = useState<string>('');

    const handleNavigationClick = (content: string) => {
        setSelectedContent(content);
    };

    return (
        <>
            <div className="w-full h-1/6 bg-[#000] p-4 flex items-center justify-between topnav">
                <HorizontalNavigation onNavigationClick={handleNavigationClick}/>
            </div>
            <div
                className="flex h-screen overflow-hidden bg-[#111] text-white"> {/* Use overflow-hidden to hide the scroll */}
                {/* Navigation Section (1/4 of the screen) */}
                <div className="w-1/4 bg-[#000] p-4 flex items-center justify-center sidenav">
                    <VerticalNavigation onNavigationClick={handleNavigationClick}/>
                </div>

                {/* Content Section (3/4 of the screen) */}
                <div className="content overflow-y-auto"> {/* Use overflow-y-auto to enable scrolling if needed */}
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}
