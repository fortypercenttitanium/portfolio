import { Helmet } from 'react-helmet';
import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import Layout from '../components/Layout';
import Sectiontitle from '../components/Sectiontitle';
import Service from '../components/Service';
import aboutImage from '../assets/about_image.png';
import aboutImagePlaceholder from '../assets/about-image-placeholder.png';

function About() {
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

  const services = [
    {
      title: 'Web Development',
      icon: 'code',
      details:
        'Is your current website up to modern standards? Is it accessible to everyone and responsive on all devices? Does it meet all of your business or personal needs? If not, I can help!',
    },
    {
      title: 'Mobile/Desktop Apps',
      icon: 'laptop-phone',
      details:
        'I make fast, powerful, and beautiful native applications for devices and computers that interface with other hardware, or for when you just need a bit more muscle under the hood.',
    },
    {
      title: 'Small Business Solutions',
      icon: 'graph',
      details:
        'Got a tech problem, but have no idea how to solve it? Let me help out. I can build a solution that fits your needs for a fraction of the price the big software companies would charge.',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Alex</title>
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
                  I&apos;m a web developer. I build user-friendly and responsive
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
                    <b>Language</b> English
                  </li>
                  <li>
                    <b>Ice cream</b> B&J Half-Baked
                  </li>
                  <li>
                    <b>Hobbies</b> Camping, Baseball
                  </li>
                  <li>
                    <b>Cell</b> <a href="tel:8564717881">856-471-7881</a>
                  </li>
                  <li>
                    <b>Email</b>{' '}
                    <a href="mailto:alex@ayweb.dev">alex@ayweb.dev</a>
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
      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
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
