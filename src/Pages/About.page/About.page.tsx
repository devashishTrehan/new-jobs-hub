import { Typography } from '@material-ui/core';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Footer } from '../../Components/Footer.component';
import { NavBar } from '../../Components/Navbar.component';
import { Counter } from '../../Components/Counter.component';
import './About.page.css';


export function About(props: any) {


  const Brands = [
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
  ]



  const renderBrands = () => {

    return Brands.map((brand: any, index: number) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 c-brand"><a href="#"><img src={`/assets/images/com-brand/${index + 1}.webp`} /></a></div>
      )
    })
  }

  return (
    <div>
      <NavBar home={true} />
      <div>

        <div className="about-banner">
        </div>
        <div className="clearfix"></div>

        <div className="module-section about-module">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 about-top">
                <h1>About New Jobs- <span>HUB</span></h1>
                <p>Indeed is the #1 job site in the world with over 25 crore unique visitors every month. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities.</p>
                
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="row abt-inner">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-sec">
                <h2><Counter end={250} id={1} />+ <span>Million</span></h2>
                <p className="abtp">unique monthly visitors2</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-sec">
                <h2><Counter end={15} id={2} />+ <span>Million</span></h2>
                <p className="abtp">resumes</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-sec">
                <h2><Counter end={15} id={3} />+ <span>Million</span></h2>
                <p className="abtp">total ratings and reviews</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-sec">
                <h2><Counter end={10} id={4} />+ <span>Million</span></h2>
                <p className="abtp">jobs added per second globally</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="module-sec services-sec s-section service-bg-sec">
          <h2>A platform where talent finds spotlight.</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec">
                <figure className="s-ser-img"><img src="/assets/images/icons/trust.svg" /></figure>
                <div className="s-ser-text">
                  <h3>Credibility</h3>
                  <p>We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec">
                <figure className="s-ser-img"><img src="/assets/images/icons/clock.svg" /></figure>
                <div className="s-ser-text">
                  <h3>Flexibility</h3>
                  <p>We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec">
                <figure className="s-ser-img"><img src="/assets/images/icons/shield.svg" /></figure>
                <div className="s-ser-text">
                  <h3>Security</h3>
                  <p>We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec">
                <figure className="s-ser-img"><img src="/assets/images/icons/payment.svg" /></figure>
                <div className="s-ser-text">
                  <h3>Value</h3>
                  <p>We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec">
                <figure className="s-ser-img"><img src="/assets/images/icons/support.svg" /></figure>
                <div className="s-ser-text">
                  <h3>Support</h3>
                  <p>Our dedicated support team works 24/7 to resolve all of your queries over the phone or email, no matter where you are located.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec">
                <figure className="s-ser-img"><img src="/assets/images/icons/progress.svg" /></figure>
                <div className="s-ser-text">
                  <h3>Progress</h3>
                  <p>Our dedicated support team works 24/7 to resolve all of your queries over the phone or email, no matter where you are located.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="module-sec com-brand">
          <div className="container">
            <div className="row">
              <div className="col-md-12 com-content">
                <h3>30,000+ Paying Customers</h3>
                <p>The world’s most forward-thinking companies are growing their business with <b>New jobs-HUB</b></p>
              </div>
            </div>
            <div className="row">
              {
                renderBrands()
              }
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}