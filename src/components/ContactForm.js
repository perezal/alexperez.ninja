import React from "react";

export default class ContactForm extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      phone: "",
      email: "",
      website: "",
      message: "",
      triedSubmit: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildRequestString = this.buildRequestString.bind(this);
    this.submitSuccess = this.submitSuccess.bind(this);
    this.submitError = this.submitError.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      name: "",
      company: "",
      phone: "",
      email: "",
      website: "",
      message: "",
      triedSubmit: false
    });
  }

  handleChange(e) {

    var stateObject = {};
    stateObject[e.target.id] = e.target.value;
    this.setState(stateObject);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {name, company, phone, email, message} = this.state;

    if (name && company && phone && email && message) {
      this.sendFormData();
      this.setState({
        triedSubmit: false
      });
    } else {
      this.setState({
        triedSubmit: true
      });
    }

  }

  sendFormData() {
    const formData = {
      name: this.state.name,
      company: this.state.company,
      phone: this.state.phone,
      email: this.state.email,
      website: this.state.website,
      message: this.state.message
    };

    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200 && xmlhttp.statusText === 'OK') {
          _this.submitSuccess();
        }
        else {
          _this.submitError();
        }
      }
    };

    xmlhttp.open('POST', 'https://alexperez.ninja/mail_handler.php', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.buildRequestString(formData));

  }

  submitSuccess() {

    this.resetForm();
    this.props.submitHandler();
  }

  submitError() {
    alert("Sorry, something went wrong. Please try again later or send me an email at alex@alexperez.ninja");
  }

  buildRequestString(params) {

    var requestArray = [];

    for ( var property in params ) {
      if (params.hasOwnProperty(property)) {
        requestArray.push(encodeURIComponent(property) + "=" + encodeURIComponent(params[property]));
      }
    }

    return requestArray.join('&');
  }


  render() {

    const { name, company, phone, email, message } = this.state;

    const { triedSubmit } = this.state;

    const nameInputClass = (!name && triedSubmit) ? "submit-error" : "";
    const companyInputClass = (!company && triedSubmit) ? "submit-error" : "";
    const phoneInputClass = (!phone && triedSubmit) ? "submit-error" : "";
    const emailInputClass = (!email && triedSubmit) ? "submit-error" : "";
    // const websiteInputClass = (!website && triedSubmit) ? "submit-error" : "";
    const websiteInputClass = "";
    const messageInputClass = (!message && triedSubmit) ? "submit-error" : "";


    const nameLabel = (!name && triedSubmit) ? <label htmlFor="name">Full Name field is required</label> : null;
    const companyLabel = (!company && triedSubmit) ? <label htmlFor="company">Company field is required</label> : null;
    const phoneLabel = (!phone && triedSubmit) ? <label htmlFor="phone">A valid phone number is required</label> : null;
    const emailLabel = (!email && triedSubmit) ? <label htmlFor="email">A valid e-mail address is required</label> : null;
    // const websiteLabel = (!website && triedSubmit) ? <label htmlFor="website">Website field is required</label> : null;
    const websiteLabel = null;
    const messageLabel = (!message && triedSubmit) ? <label htmlFor="message">Message field is required</label> : null;

    return (
      <form className="contact-form" action="">
        <div className="row">
          <div className="form-group col-sm-6 col-xs-12">
            <input className={"form-control " + nameInputClass} onChange={this.handleChange} value={this.state.name} type="text" id="name" placeholder="Full Name" required />
            {nameLabel}
          </div>
          <div className="form-group col-sm-6 col-xs-12">
            <input className={"form-control " + companyInputClass} onChange={this.handleChange} value={this.state.company} type="text" id="company" placeholder="Company" required />
            {companyLabel}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6 col-xs-12">
            <input className={"form-control " + phoneInputClass} onChange={this.handleChange} value={this.state.phone} type="text" id="phone" placeholder="Phone Number" />
            {phoneLabel}
          </div>
          <div className="form-group col-sm-6 col-xs-12">
            <input className={"form-control " + emailInputClass} onChange={this.handleChange} value={this.state.email} type="text" id="email" placeholder="Email address" />
            {emailLabel}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6 col-xs-12">
            <input className={"form-control " + websiteInputClass} onChange={this.handleChange} value={this.state.website} type="text" id="website" placeholder="Website" />
            {websiteLabel}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-xs-12">
            <textarea  className={"form-control " + messageInputClass} id="message" onChange={this.handleChange} value={this.state.message} placeholder="Tell me about your project"></textarea>
            {messageLabel}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button onClick={this.handleSubmit} type="submit" className="btn contact-submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
