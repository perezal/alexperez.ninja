import React from "react";

import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

export default class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      formSubmitted: false
    }
  }

  submitHandler() {
    this.setState({
      formSubmitted: true,
    });
  }

  render() {

    const headline = "Contact";

    const text = "Let's Collaborate";

    const formCopy1 = "I'm eager to hear about your project! Whether you need a simple fix or a brand-new, fully-loaded website, I'm here to help.";

    const formCopy2 = "Please provide me with a short description of your business and a little bit about your web needs, and I'll get back to you within 24 hours.";

    const contactForm = <ContactForm submitHandler={this.submitHandler.bind(this)} />;

    function submitMessage() {
      return (
        <div style={{height: '380px'}}>
          <h3 style={{textAlign: 'center'}}>Thank you! Your message has been sent. I will be in contact with you as soon as possible.</h3>
        </div>
      )
    }

    const formElement = this.state.formSubmitted ? submitMessage() : contactForm;

    return (
      <div className="contact-page">
        <Banner headline={headline}/>
        <div className="container page-body">
          <div className="col-xs-12 contact-box">
            <h2 style={{textAlign: 'center'}}>Tell Me About Your Project</h2>
            <div className="col-md-4 col-xs-12">
              <h3>{text}</h3>
              <p>{formCopy1}</p>
              <p>{formCopy2}</p>
              <p style={{textAlign: 'right'}}>-Alex</p>
            </div>
            <div className="col-md-6 col-xs-12">
              {formElement}
            </div>
            <div className="col-md-2 col-xs-12" style={{textAlign: 'center', marginBottom: '20px', padding: '0'}}>
              <h3>Contact Directly</h3>
              <hr />
              <p>209-200-3196</p>
              <p><a href="mailto:alex@alexperez.ninja">alex@alexperez.ninja</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
