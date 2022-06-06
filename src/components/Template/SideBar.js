import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mark Hovsepyan</h2>
        <p><a href="mailto:markhovsepyan98@gmail.com">markhovsepyan98@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mark. I like building things.
        I am a Data Scientist, Software Engineer and a huge Hobbyist.
        I am an AUA alumni and a proud dabbler at <a href="https://dabblelab.com/">Dabble Lab</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mark Hovsepyan <Link to="/">markhovs.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
