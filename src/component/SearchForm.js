import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            input : ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            input : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.input.trim());
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-5">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="input-group">
                        <input name="seacrh-key" type="text" className="form-control mr-2" aria-describedby=""
                            placeholder="Search key ..." onChange={this.handleChange}/>
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-secondary mr-2"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchForm;