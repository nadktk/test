import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/select';

const ClientsList = props => {    
    if (props.clients.length === 0) return (
        <div>
            No matches found<br />
            Please try another search
        </div>
    )
    return(
        <div className="ui relaxed divided list">
            {props.clients.map( (v,i) => 
                <div className="item" title="click to show details" key={i} onClick={()=>{props.select(v)}}>
                    <img 
                        className="ui avatar image"
                        src={v.general.avatar}
                        alt={v.general.firstName + " "+ v.general.lastName}
                    />
                    <div className="content">
                        <span className="header">
                            {v.general.firstName + " "+ v.general.lastName}
                        </span>
                        <div className="description">{v.job.title}</div>
                    </div>
                </div>
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    
    if (state.searchline === "") return {
        clients: state.clients,
        searchline: state.searchline
    };
    else {
        let clients = state.clients.filter(client => {
            for (let key in client) {
                for (let field in client[key]) {
                    let value = client[key][field].toLowerCase();
                    if (value.includes(state.searchline.toLowerCase())) return true;
                }
            }
            return false
        });
        return {
            clients: clients,
            searchline: state.searchline
        }
    }    
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList)