import React, {useState} from 'react';
import Title from "@/components/tools/title";
import emailjs from 'emailjs-com';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from "@/components/tools/GoogleCaptchaWrapper";

type PostData = {
    gRecaptchaToken: string;
    firstName: string;
    lastName: string;
    email: string;
    hearFromSponsors: boolean;
}

export default function Contact() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const {executeRecaptcha} = useGoogleReCaptcha();

    const [userMessage, setUserMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({...formData, [e.target.id]: e.target.value});
        if (showMessage) {
            setFadingOut(true);
            setTimeout(() => {
                setShowMessage(false);
                setFadingOut(false);
            }, 2000); // Fade out over 2 seconds
        }
    };

    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const {firstName, lastName, email, message} = formData;
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
            displayMessage('All fields are required.', true);
            return false;
        }
        if (!isEmailValid(email)) {
            displayMessage('Please enter a valid email address.', true);
            return false;
        }
        return true;
    };

    const displayMessage = (msg: string, isError: boolean) => {
        setUserMessage(msg);
        setIsError(isError);
        setShowMessage(true);
        if (isError) {
            setFadingOut(false);
        } else {
            setFadingOut(true);
        }
    };

    const sendMessage = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (!executeRecaptcha) {
            console.log("Execute recaptcha not available yet");
            displayMessage("Execute recaptcha not available yet likely meaning key not recaptcha key not set", true);
            return;
        }

        try {
            // Send email to the sender for confirmation
            emailjs.send('service_5urxosc', 'template_jdqcv0f', formData, 'sdpJxOEnuLhOJp1MV')
                .then((result) => {
                    console.log('Email sent:', result.text);
                }, (error) => {
                    console.log('Email error:', error.text);
                });

            // Send email to yourself
            emailjs.send('service_5urxosc', 'template_sgufzd9', formData, 'sdpJxOEnuLhOJp1MV')
                .then((result) => {
                    console.log('Email sent to me:', result.text);
                }, (error) => {
                    console.log('Email error:', error.text);
                });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            });
            displayMessage('Email sent successfully!', false);
        } catch (error) {
            displayMessage('Error in sending email: ' + error, true);
        }
    };

    return (
        <GoogleCaptchaWrapper>
            <Title title={"Contact"}/>
            <div className={"flex flex-col items-center justify-center min-h-screen p-10"}>
                <h1 className={"text-3xl pb-12"}>Contact Me</h1>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3
                                px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="Jane"
                                id="firstName"
                                onChange={handleChange}
                                value={formData.firstName}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                                focus:border-gray-500"
                                type="text"
                                placeholder="Doe"
                                id="lastName"
                                onChange={handleChange}
                                value={formData.lastName}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                                focus:border-gray-500"
                                type="email"
                                placeholder="example@email.com"
                                id="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                                focus:border-gray-500"
                                rows={6}
                                placeholder="Pop your message in here ..."
                                id="message"
                                onChange={handleChange}
                                value={formData.message}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 mt-10">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            {showMessage && (
                                <div
                                    className={`p-4 mb-12 rounded-3xl ${isError ? 'bg-red-500' : 'bg-green-500'} text-white ${fadingOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
                                    {userMessage}
                                </div>
                            )}
                            <button className={"bg-emerald-800 text-white p-4 rounded-2xl w-full"}
                                    onClick={sendMessage}>
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </GoogleCaptchaWrapper>
    );
};