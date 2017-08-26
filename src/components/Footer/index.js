import React from 'react';
import FooterLinks from './footer-links';
import FooterCopyright from './footer-copyright';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <FooterLinks />
          <FooterCopyright />
        </div>
      </footer>
    );
  }
}
