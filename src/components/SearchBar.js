import React, { Component } from 'react';

export default class SearchBar extends Component {

    //make the searchBar a controlled component by using state
    //so that we store data in the react world and not in the html dom
    state={ term: "what are you looking for?"};

    onInputChange = event => {
        this.setState({
            term: event.target.value
        })
    };

    onFormSubmit = event => {
        event.preventDefault();

        //callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}