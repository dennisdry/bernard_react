import React from 'react';

export default class FooterLinks extends React.Component {
  render() {
    return (
      <div className="chat-links-wrapper row">
        <div className="col-lg-4 chat-links-left chat-links">
          <h2 className="chat-links-head">
            Need any help?
            <span className="underline"></span>
          </h2>
          <ul className="list-unstyled footer-links-list">
            <li>Read the FAQ</li>
            <li>Read the Documentation</li>
            <li>Contact support</li>
          </ul>
        </div>
        <div className="col-lg-4 chat-links-middle chat-links">
          <h2 className="chat-links-head">
            Contact Us
            <span className="underline"></span>
          </h2>
          <ul className="list-unstyled footer-links-list">
            <li>support@bernardapp.com</li>
            <li>+36 30 303030</li>
          </ul>
        </div>
        <div className="col-lg-4 chat-links-right chat-links">
          <h2 className="chat-links-head">
            Want to socialize?
            <span className="underline"></span>
          </h2>
          <ul className="list-unstyled footer-links-list">
            <li>
              <span className="social-icon facebook"></span>
              <span className="social-icon twitter"></span>
              <span className="social-icon linkedin"></span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
