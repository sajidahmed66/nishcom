import { useState, useEffect } from 'react';
import Menu from '../Menu';
import Slider from './Slider';
import Services from './Services';
import Banner from './Banner';
const Home = () => {
    return (
        <>
            <Menu />
            <Banner />
            {
                /*
                 <div className="absolute w-full z-10 bottom-0">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="simple-waves">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div> 
                */
            }
            {/* <Slider /> */}
            <Services />
        </>
    )
}

export default Home;