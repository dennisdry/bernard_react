import React from 'react';
import '../styles/index.scss';

import Header from './components/Header/index';
import MainContent from './main.jsx';
import Footer from './components/Footer/index';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}
