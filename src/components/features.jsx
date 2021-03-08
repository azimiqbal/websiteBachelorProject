import React, { Component } from "react";




export class Features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
        <div className="row">

          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Updates</h2>
          </div>
          <div className="col-xs-12 col-md-6"> <img src="img/jonas.png" className="img-responsivee" alt=""/> </div>
          <div className="row">
            {this.props.data ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-12 col-md-5">
                    {" "}
                    <h4>Workspace</h4>
                    <p>{d.paragraphh}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
          <div className="col-xs-12 col-md-6"> <img src="img/portfolio/01-large.jpg" className="img-responsivee" alt=""/> </div>
          <div className="row">
            {this.props.data ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-12 col-md-5">
                    {" "}
                    <h4>First presentation</h4>
                    <p>{d.paragraph}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Features;