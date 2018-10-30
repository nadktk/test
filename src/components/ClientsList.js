import React from 'react';
//temporary
import $ from 'jquery';

const url = 'https://raw.githubusercontent.com/nadktk/11/master/clients.json';
let clients;
$.ajax({
    type: "GET", 
    url: url,
    async: false,
    success: data => {
        clients = JSON.parse(data); 
    }
});   
//console.log(clients);

const ClientsList = () => {
    return (
      <div className="ui relaxed divided list">
        {clients.map( v => 
          <a className="item">
            <img className="ui avatar image" src={v.general.avatar} />
            <div className="content">
              <span className="header">{v.general.firstName + " "+ v.general.lastName}</span>
              <div className="description">{v.job.title}</div>
      </div>
            </a>
        )}
      </div>
    )
  }

export default ClientsList