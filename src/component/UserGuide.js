import React from 'react';

import './Styles/userGuide.css';
import Logo from '../imgs/logo.png'
import guide from '../imgs/guide.jpeg'
import guide2 from '../imgs/guide2.jpeg'
import guide3 from '../imgs/guide3.jpeg'
import guide4 from '../imgs/guide4.jpeg'
const userGuide = () => {
    return (
        <>
            <div className="bg guide-head w-full h-[200px]
    line-height-[20px]
    letter-spacing-[1px]
    flex flex-col items-center justify-center gap-3
    text-white
    relative
    mb-[50px]
    ">

                <h2 className="text-3xl">User Guide in Shark Defense</h2>

                <p className=''>We guide you to know how using our site</p>
                <span className='bg-white rounded-[100%] w-[100px] h-[100px] absolute top-[75%]'>
                    <img className='w-[100%] h-[100%]' src={Logo} alt="logo" />
                </span>
            </div>
            <div className="container">

                <div className="guide-section">
                    <div className="instruction-container">
                        <div className="instruction-image">
                            <img src={guide} className='imgGuide' alt='test' />
                        </div>
                        <div className="instruction w-[30%]">
                            <button className="flex items-start justify-start check-url-button rounded-xl ">screenshot</button>
                            <p className='text-[#007bff] font-light text-start mb-3'>The screenshot feature supports informed decision-making by providing additional context about the URL:
                                Instant Insight: Users can get an immediate sense of the webpage’s legitimacy and content quality at a glance. This visual context can help users decide whether to trust and proceed with the link.
                                Enhanced Understanding: Screenshots provide a clearer picture of what to expect from a webpage, which is especially useful for identifying misleading or deceptive URLs that may otherwise seem harmless.
                                User-Friendly and Convenient </p>
                            {/* <ul className='flex flex-col items-start justify-center gap-2 pl-4'>
                                <p>The screenshot feature supports informed decision-making by providing additional context about the URL:
                                    Instant Insight: Users can get an immediate sense of the webpage’s legitimacy and content quality at a glance. This visual context can help users decide whether to trust and proceed with the link.
                                    Enhanced Understanding: Screenshots provide a clearer picture of what to expect from a webpage, which is especially useful for identifying misleading or deceptive URLs that may otherwise seem harmless.
                                    User-Friendly and Convenient </p>
                                                           </ul> */}
                        </div>
                    </div>
                    <div className="instruction-container">
                       
                        <div className="instruction w-[30%]">
                            <button className="flex items-start justify-start check-url-button rounded-xl ">Submit</button>
                            <p className='text-[#007bff] font-light text-start mb-3'>

                                The "Submit to Technical Team" feature empowers users to actively participate in enhancing their own
                                security. By providing a straightforward mechanism for
                                reporting suspicious URLs, users contribute to a more robust and responsive detection system. </p>

                        </div>
                        <div className="instruction-image">
                            <img src={guide4} className='imgGuide' alt='test' />
                        </div>
                    </div>
                    <div className="instruction-container">
                        <div className="instruction-image">
                            <img src={guide2} className='imgGuide' alt='test' />
                        </div>
                        <div className="instruction w-[30%]">
                            <button className="flex items-start justify-start check-url-button rounded-xl ">IP reputation</button>
                            <p className='text-[#007bff] font-light text-start mb-3'>
                                The IP reputation feature is designed to assess and score the reliability of IP addresses linked
                                to URLs. By leveraging historical data and threat intelligence, this feature
                                helps users determine the likelihood of a URL being malicious based on its IP address reputation.</p>
                        </div>
                    </div>
                    <div className="instruction-container">
                      
                        <div className="instruction w-[30%]">
                            <button className="flex items-start justify-start check-url-button rounded-xl "> Domain WHOIS</button>
                            <p className='text-[#007bff] font-light text-start mb-3'>
                                The Domain WHOIS feature is designed to retrieve and display important information about the domain
                                associated with a URL. By accessing the WHOIS database, users can gain insights into the domain's
                                registration details,
                                ownership, and history, which are crucial for assessing the credibility and safety of a website.</p>
                        </div>
                        <div className="instruction-image">
                            <img src={guide3} className='imgGuide' alt='test' />
                        </div>
                    </div>




                </div>

            </div>
        </>
    )


}

export default userGuide;
