import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    } 

    onFormSubmit(event) {
        event.preventDefault();
    }
       
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group" action="">
                    <input 
                        placeholder="get a five day forecast"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form>
            </div>
        )
    }
}

export default SearchBar;