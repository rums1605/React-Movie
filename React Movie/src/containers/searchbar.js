import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';



class SearchBar extends Component {

    constructor(props) {

        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.movieDetails = this.movieDetails.bind(this);

    }


    onInputChange(event) {
        this.setState({ term: event.target.value });


    }



    movieDetails(event) {

        this.props.fetchMovie(this.state.term);

    }




    render() {
        return (
            <div>
                <h3>enter your clubname</h3>
                <input type="text" onChange={this.onInputChange} name="clubname" />

                <button type="button" onClick={this.movieDetails}>Search</button>
            </div>
        );

    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMovie }, dispatch);

}


export default connect(null, mapDispatchToProps)(SearchBar);
