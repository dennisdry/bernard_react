import React from 'react';

export default class HeaderTodaysInfo extends React.Component {
  constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '. ' + (today.getMonth() + 1) + '. ' + today.getDate();

        this.state = {
            date: date
        };
    }

  render()  {
    return (
      <div className="col hidden-md-down">
        <div className="today-info">
            <date className="date">
                Today is <a className="green-link" href="#">{this.state.date}</a>. 
            </date>
            <div className="events">
                Events for the day: <a className="green-link" href="#">Pipe rapairing on the 4th floor.</a>
            </div>
        </div>
      </div>
    );
  }
}
