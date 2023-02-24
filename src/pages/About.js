import { Helmet } from 'react-helmet';
import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import Layout from '../components/Layout';
import Sectiontitle from '../components/Sectiontitle';
import Service from '../components/Service';
import aboutImage from '../assets/about_image.png';
import aboutImagePlaceholder from '../assets/about-image-placeholder.png';

function About() {
  const services = [
    {
      title: 'Web Development',
      icon: 'code',
      details:
        'Web sites and web applications are my bread and butter. I can build you a site that is fast, secure, and easy to use.',
    },
    {
      title: 'Mobile/Desktop Apps',
      icon: 'laptop-phone',
      details:
        'I build mobile and desktop applications that help get things done.',
    },
    {
      title: 'Small Business Solutions',
      icon: 'graph',
      details: 'Got a tech problem? I can help you solve it.',
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
                    <b>Hobbies</b> Hiking, Camping, Breweries, Baseball
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
