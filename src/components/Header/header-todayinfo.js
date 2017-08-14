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
                Today is 2017. jun 21. {this.state.date}
            </date>
            <div className="birthday">
                Kanye West's birthday. <a href="#">Send him</a> your best wishes!
            </div>
        </div>
      </div>
    );
  }
}
