import React, { useState } from 'react';
import Title from "@/components/tools/title";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "dev.jamescockfield@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email:", err);
        }
    };

    return (
        <>
            <Title title={"Contact"} />
            <div className="flex flex-col items-center justify-center text-center min-h-screen p-10">
                <h1 className="text-3xl pb-12">Contact Me</h1>
                <h3>
                    If you are looking for websites, mobile apps, bespoke systems, desktop apps, or something else you are in the right place!
                </h3>
                <div className="mt-5" />
                <h3 className="mt-5">
                    Please direct any queries to <br /><br />
                    <button
                        onClick={handleCopy}
                        className="font-extrabold text-lg transition-all hover:text-2xl cursor-pointer text-blue-600"
                        title="Click to copy email"
                    >
                        {email}
                    </button>
                    {copied && (
                        <span className="ml-2 text-green-600 text-sm font-medium">
                            Copied to clipboard!
                        </span>
                    )}
                </h3>
            </div>
        </>
    );
}