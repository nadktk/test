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

const ClientCard = () => {
    let client = clients[3]; /// -- replace this later
    return (
        <div className="">
            
            <div className="ui grid">
                <div className="ui image rounded ">
                    <img src={client.general.avatar} />
                </div>
                <div className="ui card">      
                    <div className="content">
                        <div className="header">
                            {client.general.firstName + " "+ client.general.lastName}
                        </div>
                    </div>
                    <div className="content">
                        <h4 class="ui sub header">Job Information</h4>    
                        <div className="ui feed">
                            <p>{client.job.title}</p>
                            <p>{client.job.company}</p>
                        </div>
                    </div>
                    <div className="content">
                        <h4 class="ui sub header">contacts</h4>    
                        <div className="ui feed">
                            <p>{client.contact.email}</p>
                            <p>{client.contact.phone}</p>
                        </div>
                    </div>
                    <div className="content">
                        <h4 class="ui sub header">address</h4>    
                        <div className="ui feed">
                            <p>{client.address.country}</p>
                            <p>{client.address.city}</p>
                            <p>{client.address.street}</p>
                            <p>{client.address.zipcode}</p>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
  }

export default ClientCard