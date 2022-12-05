import React, { useState, useEffect } from 'react'
import "./StoriesPage.css"
import Aos from 'aos'
import 'aos/dist/aos.css';


const StoriesPage = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="storiesPage_main_container">
                <div className="storiesPage_detail_box" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="big_heading">Here to elevate you</div>
                    <div className="light_heading">Stories from our members and the creative community.</div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='btn'>See all Member Stories</a>
                </div>
                <div className="testimonial_container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#fff"}}>
                        <div className="storie_card">
                            <img src="https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6be37095d4aed1f3fd1_a-place-for-creative-discovery.jpeg" loading="lazy" alt="Download VSCO QR code" sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 680px, 46vw" srcset="https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6be37095d4aed1f3fd1_a-place-for-creative-discovery-p-500.jpeg 500w, https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6be37095d4aed1f3fd1_a-place-for-creative-discovery-p-800.jpeg 800w, https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6be37095d4aed1f3fd1_a-place-for-creative-discovery-p-1080.jpeg 1080w, https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6be37095d4aed1f3fd1_a-place-for-creative-discovery.jpeg 1536w" class="home__stories-img" />
                            <div className="lower_cont">
                                <div className="lower_cont_text_box">
                                    <p className="storie_heading big_heading">A place for creative discovery</p>
                                    <div className="storie_sub_heading light_heading">The work of Marco Lavalle</div>
                                </div>
                                <img src="https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627085282b05ab11b9cfcdd2_Marco%20Lavalle.jpeg" loading="lazy" alt="Marco Lavalle" class="home__stories-avatar" />
                            </div>
                        </div>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#fff"}}>
                        <div className="storie_card">
                            <img src="https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6ca08b21a2b499c18f9_where-im-reminded-that-im-not-alone.jpeg" loading="lazy" alt="Download VSCO QR code" sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 680px, 46vw" srcset="https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6ca08b21a2b499c18f9_where-im-reminded-that-im-not-alone-p-500.jpeg 500w, https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6ca08b21a2b499c18f9_where-im-reminded-that-im-not-alone-p-800.jpeg 800w, https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6ca08b21a2b499c18f9_where-im-reminded-that-im-not-alone-p-1080.jpeg 1080w, https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627ec6ca08b21a2b499c18f9_where-im-reminded-that-im-not-alone.jpeg 1536w" class="home__stories-img" />
                            <div className="lower_cont">
                                <div className="lower_cont_text_box">
                                    <p className="storie_heading big_heading">Where I’m reminded that I’m not alone</p>
                                    <div className="storie_sub_heading light_heading">The work of Emma Teuscher</div>
                                </div>
                                <img src="https://assets-global.website-files.com/625d2a5ca1316da92392fd13/627085062398f82af01688d4_Emma%20Teuscher.jpeg" loading="lazy" id="w-node-c794c0f3-33e5-297f-e3e3-94fb490bd736-4e50285b" alt="Emma Teuscher" class="home__stories-avatar" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default StoriesPage