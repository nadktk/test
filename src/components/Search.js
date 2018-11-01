import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {search} from '../actions/search';

const Search = props => {
    return (
        <div className="ui segment center aligned">
        <div className="ui right icon input">
            <i className="search icon"></i>
            <input type="text"
                placeholder="Search"
                value={props.searchline}
                onChange={(e)=>props.search(e.target.value)}
            />
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchline: state.searchline
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({search: search}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Search)
