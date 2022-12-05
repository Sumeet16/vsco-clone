import React, { useState, useEffect } from 'react'
import "./Banner_1.css"
import Aos from 'aos'
import 'aos/dist/aos.css';

const Baneer_1 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className="banner_1_main_container">
        <p className="banner_1_heading">The trusted photo and video editor for premium filters, quality tools, and creative community</p>
        <div className="banner_1_feature_tab">
          <div className="banner_1_feature_tab_inner_div">
            <p className="sub_heading">Experiment With Confidence</p>
            <p className="light_heading">Share your creativity and express yourself fearlessly</p>
          </div>
          <div className="banner_1_feature_tab_inner_div">
            <p className="sub_heading">Top Quality Photo and Video Editing</p>
            <p className="light_heading">All the creative tools and filters you need in one app</p>
          </div>
          <div className="banner_1_feature_tab_inner_div">
            <p className="sub_heading">Trusted Community, Thoughtful Curation</p>
            <p className="light_heading">Connect to one of the largest creative communities in the world</p>
          </div>
          <div className="grp_div">
            <div className="second">
              <div class="demo_3" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div class="home__wall-img-reveal-wrap" style={{ height: `${scrollPosition > 1430 ? scrollPosition > 1690 ? "100" : (260 - (1690 - scrollPosition)) / 260 * 100 : "0"}%` }}>
                  <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/62706115350c481cfa364290_ajschokora_after.png" loading="eager" class="home__wall-2-img" />
                </div>
                <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/62706114498ee36ab39cb9b4_ajschokora_before.png" loading="eager" class="home__wall-1-img" />
              </div>
            </div>

            <div className="first">
              <div class="demo" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/627062161cf85b0411d11616_chillchlo.png" loading="eager" className="_2" />
              </div>
            </div>

            <div className="third">
              <div class="demo_2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img src="https://assets-global.website-files.com/624de812dd74b622858823f2/627c699cbd10c87d41590903_reedschick.png" loading="eager" className="_3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Baneer_1