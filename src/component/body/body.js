import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';
import "./body.css";
import download from '../Assets/download.jpg';
import download1 from '../Assets/gitlink.png';

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
                        <a className="btn" href="https://drive.google.com/file/d/1hThMJM39SAPgGVT5rd85MhV3Ntvqy_ue/view" rel="noreferrer" target="_blank">Download Resume</a>
                        <a className="btn" href="https://github.com/iitpparshant" rel="noreferrer" target="_blank" >Visit Github</a>
                        <a className="btn" href="https://www.linkedin.com/in/parshant-verma-2280a51a0/" rel="noreferrer" target="_blank">Linkedin</a>
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
                    <h1>1</h1>
                        <div className="vertical-title">
                            My Portfolio (2023-2024)
                            <a href="https://github.com/iitpparshant/Personal-Portfolio" target="_blank" rel="noopener noreferrer">
                                <button>Github Link</button>
                            </a>
                            <a href="https://github.com/iitpparshant/movie" target="_blank" rel="noopener noreferrer">
                                <button>Uploaded Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                        <div className="skill">HTML,CSS</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                    <h1>2</h1>
                        <div className="vertical-title">
                            Resume Clone (2023-2024)
                            <a href="https://github.com/iitpparshant/resume" target="_blank" rel="noopener noreferrer">
                                <button>Github Link</button>
                            </a>
                            <a href="https://resume-lake-front.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button>Uploaded Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                    <h1>3</h1>
                        <div className="vertical-title">
                            Movie app Clone (2023-2024)
                            <a href="https://github.com/iitpparshant/movie" target="_blank" rel="noopener noreferrer">
                                <button>Github Link</button>
                            </a>
                            <a href="https://movie-tau-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button>Uploaded Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                    <h1>4</h1>
                        <div className="vertical-title">
                            Food Delivery (2024-2024)
                            <a href="https://github.com/iitpparshant/food_delivery" target="_blank" rel="noopener noreferrer">
                                <button>Github Link</button>
                            </a>
                            <a href="https://food-delivery-zzyz-front.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button>Uploaded Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                    <h1>5</h1>
                        <div className="vertical-title">
                            Spotify Clone (2022-2023)
                            <a href="https://github.com/iitpparshant/spotifyclone" target="_blank" rel="noopener noreferrer">
                                <button>Github Link</button>
                            </a>
                            <a href="https://spotifyclone-599wflh8i-iitpparshants-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button>Uploaded Link</button>
                            </a>
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
                        <h1>1</h1>
                        <div className="vertical-title">
                            Leetcode
                            <a href="https://leetcode.com/u/iitp_parshant/" target="_blank" rel="noopener noreferrer">
                            <button>Profile Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                    <h1>2</h1>
                        <div className="vertical-title">
                            Geeks for Geeks
                            <a href="https://www.geeksforgeeks.org/user/pvee0ec/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user/" target="_blank" rel="noopener noreferrer">
                            <button>Profile Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.
                        </div>
                    </div>
                    <div className="vertical">
                    <h1>3</h1>
                        <div className="vertical-title">
                            Codeforce
                            <a href="https://codeforces.com/profile/parshant272003" target="_blank" rel="noopener noreferrer">
                                <button>Profile Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                    <h1>4</h1>
                        <div className="vertical-title">
                            Codechef
                            <a href="https://www.codechef.com/users/iitp_parshant" target="_blank" rel="noopener noreferrer">
                            <button>Profile Link</button>
                            </a>
                        </div>
                        <div className="vertical-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur exercitationem vel molestias sapiente, ut placeat.

                        </div>
                    </div>
                    <div className="vertical">
                    <h1>5</h1>
                        <div className="vertical-title">
                            Coding Ninjas
                            <a href="https://www.naukri.com/code360/profile/pverma" target="_blank" rel="noopener noreferrer">
                            <button>Profile Link</button>
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
