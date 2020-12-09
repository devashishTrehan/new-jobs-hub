import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faPhone, faPhoneAlt, faPhoneVolume, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from '@material-ui/core';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Footer } from '../../Components/Footer.component';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { NavBar } from '../../Components/Navbar.component';
import { UserContext } from '../../Context/User.context';
import { Login } from '../../Services/Api.service';
import './Contact.page.css';


export function Contact(props: any) {

  const initialData = {
    name: '',
    subject: '',
    email: '',
    phone: '',
    query: '',
  }

  const [Form, setForm] = React.useState(initialData);

  const [loading, setLoading] = React.useState(false);

  let inputRefs: any = [];

  const fieldChangeHandler = (field: string, value: any) => {
    setForm(prev => {
      return {
        ...prev,
        [field]: value
      }
    })
  }

  const SendQuery = async (event: any) => {
    event.preventDefault();
    let isAnyError = !Form.name || !Form.email || !Form.subject || !Form.phone || !Form.query;
    // if (1) {

    if (!isAnyError) {

      setLoading(true);
      console.log('login request', Form)

      let response = await Login(Form);

      setLoading(false);
      console.log('login response', response)

      if (response?.status == false) {
        if (props.onMessage) {
          props.onMessage(response?.message, 'error')
        }

      } if (response?.status) {
        if (props.onMessage) {
          props.onMessage(response?.message, 'error')
        }
      } else {
        if (props.onMessage) {
          props.onMessage(['Sorry! \n Something went wrong'], 'error')

        }
      }
    }
  }

  return (
    <div>
      <NavBar home={true} />

      <div>

        <div className="contact-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1>CONTACT US</h1>
                <div className="breadcrumb">
                  <ul>
                    <li><a href="#">Home</a> /</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>



        <div className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 contact-inner">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 contact-info">
                  <h2>Contact Information</h2>
                  <ul className="add-link">
                    <li><FontAwesomeIcon icon={faMapMarkerAlt} /> B-48 Sector 63(B) Noida <br /> (UP) INDIA </li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@Newjobhub123.com">info@Newjobhub123.com</a></li>
                    <li><FontAwesomeIcon icon={faPhoneAlt} /> <a href="tel:9319311003">+91-9319311003</a></li>
                  </ul>
                  <div className="clearfix"></div>

                  <ul className="social-link">
                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="#"><FontAwesomeIcon className='fa-instagram' icon={faInstagram} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  </ul>
                </div>

                <div className="col-lg-8 col-md-6 col-sm-12 col-12 contact-form">
                  <h3>We want to hear from you!</h3>
                  <form onSubmit={SendQuery}>
                    <div className="row mx-0">
                      <div className="col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="text"
                          required name="name"
                          value={Form.name}
                          onChange={(event: any) => fieldChangeHandler('name', event?.target.value)}
                          placeholder="Enter Your Name *" />
                        <span><FontAwesomeIcon icon={faUser} /></span>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="text"
                          required name="subject"
                          value={Form.subject}
                          onChange={(event: any) => fieldChangeHandler('subject', event?.target.value)}
                          placeholder="Enter Your Subject *" />
                        <span><FontAwesomeIcon icon={faEdit} /></span>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="email"
                          required name="email"
                          value={Form.email}
                          onChange={(event: any) => fieldChangeHandler('email', event?.target.value)}
                          placeholder="Enter Your E-Mail Address *" />
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="number"
                          required name="phone-number"
                          value={Form.phone}
                          onChange={(event: any) => fieldChangeHandler('phone', event?.target.value)}
                          placeholder="Enter Your Phone Number *" />
                        <span><FontAwesomeIcon icon={faPhone} /></span>
                      </div>
                      <div className="col-md-12 col-sm-12 col-12 form-group">
                        <textarea
                          name="msg"
                          value={Form.query}
                          onChange={(event: any) => fieldChangeHandler('query', event?.target.value)}
                          required placeholder="Write Your Query Here..."></textarea>
                      </div>

                      <div style={{ textAlign: 'left', margin: '10px 5px' }}>
                        <Button variant='contained' size='small' type="submit" color='primary' value="submit">SUBMIT</Button>
                      </div>

                    </div>
                    {
                      loading && (
                        <Loader />
                      )
                    }
                  </form>
                </div>
                <div className="clearfix"></div>


                <div className="col-md-12 col-sm-12 col-12 contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4323099306525!2d77.37498531460365!3d28.616802691544546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfab660337499%3A0xa23a31cd784f2da0!2sBALJ%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1605850181179!5m2!1sen!2sin" width="100%" height="300" style={{ border: 'none' }} aria-hidden="false" ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

