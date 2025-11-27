import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import TwezuleLogo from "../assets/TwezuleLogo.png";

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
        <a href="/" className="navbar-logo-container" aria-label="Twezule Pathways Home">
          <img 
            src={TwezuleLogo} 
            alt="Twezule Pathways" 
            className="navbar-logo"
          />
        </a>

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