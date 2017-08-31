export function getMessagesFromApi() {
    fetch( 'http://bernard-api.herokuapp.com/message/all' )
    .then( response => response.json() )
    .then( (message) => this.setState({items:message}) )
  }
