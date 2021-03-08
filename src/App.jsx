import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Gallery from './components/gallery';
import Team from './components/Team';
import Contact from './components/contact';
import Features from './components/features';
import JsonData from './data/data.json';


   
export class App extends Component {
        
  state = {
    
    landingPageData: {},
    
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
    
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {

    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Team data={this.state.landingPageData.Team} />
        <Gallery />
        <Features data={this.state.landingPageData.Features} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
      
    )
  }
}

export default App;
