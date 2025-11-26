import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { 
    clicked: false,
    scrolled: false 
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== this.state.scrolled) {
      this.setState({ scrolled: isScrolled });
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLinkClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <nav className={`NavbarItems ${this.state.scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo-container">
         <span className="navbar-logo-text">Twezule Pathways</span>
        </div>

        <div 
          className={`menu-icons ${this.state.clicked ? 'active' : ''}`} 
          onClick={this.handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a 
                  className={item.cName} 
                  href={item.url}
                  onClick={this.handleLinkClick}
                >
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
          <a 
            href="/get-involved"
            className="nav-cta-button"
            onClick={this.handleLinkClick}
          >
            <span>Get Involved</span>
          </a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;