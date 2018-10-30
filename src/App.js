import React, { Component } from 'react';
import Search from './components/Search';
import ClientsList from './components/ClientsList';
import ClientCard from './components/ClientCard';

class App extends Component {
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
    
      );
  }
}

export default App;
