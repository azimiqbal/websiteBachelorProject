import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contact information</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info md">
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Location
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              Copyright &copy; 2021 - Veiebrygge - USN Kongsberg
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
