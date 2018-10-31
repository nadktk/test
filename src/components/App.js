import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import getClients from '../actions/getClients';
import ClientsList from '../containers/clients-list';
import ClientCard from '../containers/client-card';
import Search from '../containers/search';

class App extends React.Component {
 
  componentDidMount(){
    const url = "https://raw.githubusercontent.com/nadktk/test/master/clients.json";
    fetch(url)
      .then( res => res.json() )
        .then( json =>{
          this.props.getClients(json);
        });
  }  

  render() {
    return (
      <div className="ui container">
        <div className="ui horizontal divider"></div>  
        <div className="ui two column divided grid stackable">
          <div className="five wide column">
            <Search />
            <ClientsList />
          </div>
          <div className="eleven wide column">
            <ClientCard />
          </div>
        </div>
      </div>
    )
  }

}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({getClients: getClients}, dispatch)
}

export default connect(null, matchDispatchToProps)(App);
