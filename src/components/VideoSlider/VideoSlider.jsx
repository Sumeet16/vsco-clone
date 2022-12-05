import React, { useState, useEffect } from 'react'
import "./VideoSlider.css"

const VideoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <div className="videoSlider_main_container">
                <div className="slider" style={{left: `-${currentIndex * 24.65}rem`}}>
                    <div className="videoContainer">
                        <video autoplay="" loop muted>
                            <source src="https://assets.vsco.co/assets/videos/vsco/presets.mp4" type="video/mp4" />
                        </video>
                        <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/624ed8433ff80d530d5cdd0b_icon-photo.svg" loading="lazy" alt="VSCO Spaces" class="home__slider-icon" />
                        <div className="heading">Standout Presets Make Your Work Stand Out</div>
                        <p className="sub-heading-1">Uplevel your aesthetic game with 200+ high-quality, curated presets. Including member-favorite AL3, part of our Artificial Light Series. Good for both outdoor and indoor, ideal for food and night photography. Use AL3 to soften or boost the artificial light within your image.</p>
                    </div>

                    <div className="videoContainer">
                        <video autoplay="" loop muted>
                            <source src="https://assets.vsco.co/assets/videos/vsco/tools.mp4" type="video/mp4" />
                        </video>
                        <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/624ed843617889b288b106ea_icon-quality.svg" loading="lazy" alt="VSCO Spaces" class="home__slider-icon" />
                        <div className="heading">Desktop Quality Photo Editor in an App</div>
                        <p className="sub-heading-1">Professional editing tools that give you exactly the control you need to get the look you want. Including the Grain tool – add realistic film-like grain to give your image a softer more nostalgic look.</p>
                    </div>

                    <div className="videoContainer">
                        <video autoplay="" loop muted>
                            <source src="https://assets.vsco.co/assets/videos/vsco/video.mp4" type="video/mp4" />
                        </video>
                        <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/624ed8437f60205b0b279756_icon-video.svg" loading="lazy" alt="VSCO Spaces" class="home__slider-icon" />
                        <div className="heading">Video Like a Pro</div>
                        <p className="sub-heading-1">Take full creative control of your video editing with our curated collection of high quality presets which can also be applied to your videos, a precision editing toolkit that lets you trim, crop and reverse videos and exclusive features like Speed for a slo-mo effect.</p>
                    </div>

                    <div className="videoContainer">
                        <video autoplay="" loop muted>
                            <source src="https://assets.vsco.co/assets/videos/vsco/spaces.mp4" type="video/mp4" />
                        </video>
                        <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/62a2741294a84b2d3e17a05d_slide_icon_spaces.svg" loading="lazy" alt="VSCO Spaces" class="home__slider-icon" />
                        <div className="heading">Introducing VSCO Spaces – Let's Discuss</div>
                        <p className="sub-heading-1">Get inspiration from the community in VSCO Spaces – a place where creators can have visual discussions in collective galleries and get the support they need to advance in their creative journey.</p>
                    </div>
                </div>

                <div className="slider_controller">
                    <div className="bar" style={{background: `${currentIndex === 0 ? "#fff" : "rgb(145, 145, 145)"}`}} onClick={() => {setCurrentIndex(0)}}></div>
                    <div className="bar" style={{background: `${currentIndex === 1 ? "#fff" : "rgb(145, 145, 145)"}`}} onClick={() => {setCurrentIndex(1)}}></div>
                    <div className="bar" style={{background: `${currentIndex === 2 ? "#fff" : "rgb(145, 145, 145)"}`}} onClick={() => {setCurrentIndex(2)}}></div>
                    <div className="bar" style={{background: `${currentIndex === 3 ? "#fff" : "rgb(145, 145, 145)"}`}} onClick={() => {setCurrentIndex(3)}}></div>
                </div>
            </div>
        </>
    )
}

export default VideoSlider