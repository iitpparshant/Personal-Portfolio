import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';
import "./body.css";
import download from '../Assets/download.jpg';
import download1 from '../Assets/download1.png';

function Body() {
    const typedTextRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedTextRef.current, {
            strings: [' Coder', ' Web Developer','Fronted Devoloper.'],
            typeSpeed: 50,
        });

        // Make sure to destroy the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="containerb">
            <section className="firstsection">
                <div className="leftsection">
                    Hi, My name is Parshant Verma and i am passionate in
                    <span ref={typedTextRef}></span>
                    <div className="buttonsf" >
                        <button className="btn">Download Resume</button>
                        <button className="btn">Visit Github</button>
                        <button className="btn">Linkedin</button>
                    </div>
                </div>
                <div className="rightsection">
                    <img src={download} alt="Download Icon" />
                </div>
            </section>
            <hr />
            <section className="secondsection">
                <span>What i have done so far</span>
                <h1>Project</h1>
                <div className="box">
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Fronted Deloper (2012-2023)
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Fronted Deloper (2012-2023)
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Fronted Deloper (2012-2023)
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Fronted Deloper (2012-2023)
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Fronted Deloper (2012-2023)
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="secondsection">
                <span>What i have done so far</span>
                <h1>Coding Profile</h1>
                <div className="box">
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Leetcode
                            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                                <button>Leetcode</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Geeks for Geeks(GFG)
                            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                                <button>GFG</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.
                        </div>
                    </div>
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Fronted Deloper (2012-2023)
                            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                                <button>Leetcode</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                        <img src={download1} alt="youtube"></img>
                        <div className="vertical-title">
                            Fronted Deloper (2012-2023)
                            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                                <button>Leetcode</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Body;
