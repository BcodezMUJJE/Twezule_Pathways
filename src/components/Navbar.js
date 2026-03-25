import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import TwezuleLogo from "../assets/TwezuleLogo.png";
import { Link } from "react-router-dom";

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
        <Link to="/" className="navbar-logo-container" aria-label="Twezule Pathways Home">
          <img 
            src={TwezuleLogo} 
            alt="Twezule Pathways" 
            className="navbar-logo"
          />
        </Link>

        <button
          type="button"
          className={`menu-icons ${this.state.clicked ? 'active' : ''}`}
          onClick={this.handleClick}
          aria-label="Toggle navigation menu"
          aria-expanded={this.state.clicked}
          aria-controls="primary-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <ul id="primary-navigation" className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link 
                  className={item.cName} 
                  to={item.url}
                  onClick={this.handleLinkClick}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <Link 
            to="/get-involved"
            className="nav-cta-button"
            onClick={this.handleLinkClick}
          >
            <span>Get Involved</span>
          </Link>
          <a 
            href="https://www.omprakash.org/global/twezule-pathways"
            className="nav-donate-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleLinkClick}
          >
            <span>Donate</span>
          </a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;