import { Helmet } from 'react-helmet';
import axios from 'axios';
import FsLightbox from 'fslightbox-react';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import ProgressiveImage from 'react-progressive-image';
import Slider from 'react-slick';
import Layout from '../components/Layout';
import Sectiontitle from '../components/Sectiontitle';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';
import aboutImage from '../assets/about_image.png';
import aboutImagePlaceholder from '../assets/about-image-placeholder.png';

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState('');
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
    axios.get('/api/reviews').then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About Alex - Web Developer</title>
        <meta
          name="description"
          content="Alex Younger Personal Portfolio About Page"
        />
      </Helmet>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <ProgressiveImage
                  src={aboutImage}
                  placeholder={aboutImagePlaceholder}
                >
                  {(src) => <img src={src} alt="aboutimage" />}
                </ProgressiveImage>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">Alex</span>
                </h3>
                <p>
                  I am a web developer. I build user-friendly and responsive
                  websites to help people and businesses meet their needs.
                </p>
                <ul>
                  <li>
                    <b>Full Name</b> Alex Younger
                  </li>
                  <li>
                    <b>Hometown</b> Haddon Twp, NJ
                  </li>
                  <li>
                    <b>Cell</b> <a href="tel:8564304717">856-430-4717</a>
                  </li>
                  <li>
                    <b>Language</b> English
                  </li>
                  <li>
                    <b>Email</b>{' '}
                    <a href="mailto:alexanderyounger@gmail.com">
                      alexanderyounger@gmail.com
                    </a>
                  </li>
                  <li>
                    <b>Status</b> Available for hire
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default About;
