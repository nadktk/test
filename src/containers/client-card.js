import React from 'react';
import {connect} from 'react-redux';

class ClientCard extends React.Component {
    render () {
    let client = this.props.selected ? this.props.selected : this.props.clients[0];
    if (client === undefined) return <div></div>;
    return (
        <div className="">            
            <div className="ui grid stackable">
                <div className="img-container">
                    <img 
                        src={client.general.avatar}
                        alt={client.general.firstName + " "+ client.general.lastName}
                        className="ui image rounded card-image"
                    />
                </div>
                <div className="card-container">
                <div className="ui card client-card">      
                    <div className="content">
                        <div className="header">
                            {client.general.firstName + " "+ client.general.lastName}
                        </div>
                    </div>
                    <div className="content">
                        <h4 className="ui sub header">Job Information</h4>    
                        <div className="ui feed">
                            <p>{client.job.title}</p>
                            <p>{client.job.company}</p>
                        </div>
                    </div>
                    <div className="content">
                        <h4 className="ui sub header">contacts</h4>    
                        <div className="ui feed">
                            <p>{client.contact.email}</p>
                            <p>{client.contact.phone}</p>
                        </div>
                    </div>
                    <div className="content">
                        <h4 className="ui sub header">address</h4>    
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
        </div>
    )
    }
  }

const mapStateToProps = state => {
    return {
        selected: state.selected,
        clients: state.clients
    }
}

export default connect(mapStateToProps)(ClientCard)