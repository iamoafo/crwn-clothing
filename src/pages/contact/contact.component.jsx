import React from 'react'
import Map from '../../components/map/map.component'
import '../../components/form-input/form-input.component'
import ContactForm from '../../components/contactForm/contactForm.component';
import  ContactFooter from '../../components/contact-footer/contact-footer.component'

import './contact.styles.scss'

const location = {
    address: 'Persol Systems Ghana Limited',
    lat: 5.6137, 
    lng: -0.1822,
  }

const ContactPage = () =>(
    <div className='contact'>
    {/* <div className="page-title"><h1>Contact Us</h1></div>  */}
      <ContactForm/>
       <Map location={location} zoomLevel={15}>
       </Map>
      
    </div>
)

export default ContactPage;

