// import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Home from "./components/Home";
// import About from "./components/about";
// import Contact from "./components/contact";
// import Error from "./components/Error";
// import Navigation from "./components/Navigation";
// import Portfolio from "./components/portfolio";

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navigation />
//           <Switch>
//             <Route path="/" component={Home} exact />
//             <Route path="/about" component={About} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/portfolio" component={Portfolio} />
//             <Route component={Error} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

// import React from "react";
// import "./App.css";

// // import Navbar from "./Components/NavbarElements";
// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// // import Home from "./Components";
// import About from "./components/about";
// import Portfolio from "./components/portfolio";
// import Contact from "./components/contact";
// import Resume from "./components/resume";
// import * as ReactBootStrap from "react-bootstrap";
// import Footer from "./components/SocialFollow";
// import { BrowserRouter } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <div className="App">
//         <ReactBootStrap.Navbar
//           collapseOnSelect
//           expand="lg"
//           bg="dark"
//           variant="dark"
//         >
//           <ReactBootStrap.Navbar.Brand href="#portfolio">
//             Orozco-Portolio
//           </ReactBootStrap.Navbar.Brand>
//           <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//             <ReactBootStrap.Nav className="mr-auto">
//               <ReactBootStrap.Nav.Link href="#home">
//                 Home
//               </ReactBootStrap.Nav.Link>
//               <ReactBootStrap.Nav.Link href="#about-me">
//                 About Me
//               </ReactBootStrap.Nav.Link>
//               <ReactBootStrap.Nav.Link href="contact">
//                 Contact
//               </ReactBootStrap.Nav.Link>
//               <ReactBootStrap.Nav.Link href="portfolio">
//                 Portfolio
//               </ReactBootStrap.Nav.Link>
//               <ReactBootStrap.Nav.Link href="resume">
//                 Resume
//               </ReactBootStrap.Nav.Link>
//             </ReactBootStrap.Nav>
//           </ReactBootStrap.Navbar.Collapse>
//         </ReactBootStrap.Navbar>
//       </div>
//       <About />
//       <div>
//         <Contact />
//       </div>
//       <div>
//         <Portfolio />
//       </div>
//       <div>
//         <Resume />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }

import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

export default App;
