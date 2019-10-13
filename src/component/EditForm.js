import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props, context) {
        super(props, context);       
        this.state = {
            name : null,
            phone : null,
            role : null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var obj = {};
        obj.name = this.state.name ? this.state.name : this.props.user.name;
        obj.phone = this.state.phone ? this.state.phone : this.props.user.phone;
        obj.role = this.state.role ? this.state.role : this.props.user.role;
        this.setState({
            name : null,
            phone : null,
            role : null
        });
        this.props.onSubmitEdit(obj);
      }

    render() {
        if (this.props.isDisplay)
          return (
            <div className="card border-primary">
              <div className="card-header">
                Edit user
                  </div>
              <div className="card-body">    
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">  
                  <label htmlFor="name">Name</label>
                  <input value={this.state.name ? this.state.name : this.props.user.name} onChange={this.handleInputChange} type="text" name="name" className="form-control" aria-describedby="helpId" />
                  <label htmlFor="phone">Phone</label>
                  <input value={this.state.phone ? this.state.phone : this.props.user.phone} onChange={this.handleInputChange} type="text" name="phone" className="form-control" aria-describedby="helpId" />
                  <label htmlFor="role">Role</label>
                  <select onChange={this.handleInputChange} className="custom-select" name="role" defaultValue={this.state.role ? this.state.role : this.props.user.role.toLowerCase()} >
                    <option>Select one</option>
                    <option value="admin">ADMIN</option>
                    <option value="student">STUDENT</option>
                    <option value="guest">GUEST</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary btn-block" value="Edit" />
                  <button onClick={this.props.onClose} className="btn btn-block btn-light">Cancel</button>
                </div>
                </form>
    
              </div>
            </div>
    
        );
        else return (<div/>);
      }
}

export default EditForm;