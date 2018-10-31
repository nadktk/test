import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

const ClientsList = props => {
    return(
        <div className="ui relaxed divided list">
            <p>To check searchline</p>
            <p>{props.searchline}</p>
            {props.clients.map( (v,i) => 
                <div className="item" key={i} onClick={()=>{props.select(v)}}>
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
    return {
        clients: state.clients,
        searchline: state.searchline
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList)