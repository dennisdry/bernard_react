import React from 'react';

import PrimaryHeader from './primary-header';
import SecondaryHeader from './secondary-header';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
            <PrimaryHeader />
            <SecondaryHeader />
        </header>
      </div>
    );
  }
}
