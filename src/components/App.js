import React from 'react';
import Search from '../containers/search';
import ClientsList from '../containers/clients-list';
import ClientCard from '../containers/client-card';

const App = () => {
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

export default App;
