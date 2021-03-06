var InfiniteData = React.createClass({
  getInitialState: function() {
    return ({data: [], requestSent: false});
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleOnScroll);

    this.initFakeData();
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleOnScroll);
  },


  querySearchResult: function() {
    if (this.state.requestSent) {
      return;
    }

    // enumerate a slow query
    setTimeout(this.doQuery, 2000);

    this.setState({requestSent: true});
  },

  doQuery: function() {
    // use jQuery
    $.ajax({
      url: "#",
      data: null,
      method: "GET",
      success: function(data, textStatus, jqXHR) {
        var fakeData = this.createFakeData(this.state.data.length, 20);
        var newData = this.state.data.concat(fakeData);
        this.setState({data: newData, requestSent: false});
      }.bind(this),
      error: function(jqXHR, textStatus, errorThrown) {
        this.setState({requestSent: false});
      }.bind(this)
    });
  },

  handleOnScroll: function() {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.querySearchResult();
    }
  },

  render: function() {
    return (
      <div>
        <div className="data-container">
          {this.state.data}
        </div>
        {(() => {
          if (this.state.requestSent) {
            return(
              <div className="data-loading">
                In a sec...
              </div>
            );
          } else {
            return(
              <div className="data-loading"></div>
            );
          }
        })()}
      </div>
    );
  }
});
