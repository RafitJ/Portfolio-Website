import React from 'react';
import '../assets/styles/app.css';
import Footer from './Sections/Footer';
import Home from './Sections/Home/Home';
// import Nav from './Sections/Nav';
class App extends React.Component {
  // state = {
  //   active: 'home',
  // };
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  // handleScroll = (event) => {
  //   let scrollTop = event.srcElement.body.scrollTop;
  //   if (
  //     scrollTop < document.getElementById('exp').getBoundingClientRect().top
  //   ) {
  //     this.setState({ active: 'home' });
  //   } else if (
  //     scrollTop < document.getElementById('project').getBoundingClientRect().top
  //   ) {
  //     this.setState({ active: 'exp' });
  //   } else if (
  //     scrollTop < document.getElementById('skill').getBoundingClientRect().top
  //   ) {
  //     this.setState({ active: 'proj' });
  //   } else {
  //     this.setState({ active: 'skill' });
  //   }
  // };
  render() {
    return (
      <>
        {/* <Nav active={this.state.active} /> */}
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
