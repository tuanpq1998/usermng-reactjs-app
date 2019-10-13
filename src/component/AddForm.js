import React, { Component } from 'react';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: false,
      name : "",
      phone : "",
      role : ""
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
    obj.name = this.state.name;
    obj.phone = this.state.phone;
    obj.role = this.state.role;
    
    this.props.onAdd(obj);

    this.setState({
      name : "",
      phone : "",
      role : ""
    });
  }

  handleDisplayAndHideForm = () => {
    this.setState({
      isShowForm : !this.state.isShowForm
    });
  }

  render() {
    if (!this.state.isShowForm)
      return (
          <div className="card mb-4">
          <div className="card-header">
            Add new user
              </div>
          <div className="card-body">
          <button onClick={this.handleDisplayAndHideForm} className="btn btn-block btn-info">
          <i className="fa fa-plus" aria-hidden="true"></i> Show Form</button>
          </div></div>
      );
    else return (
      
        <div className="card border-primary mb-4">
          <div className="card-header">
            Add new user
              </div>
          <div className="card-body">
            <h5 className="card-title">Enter info bellow</h5>

            <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">  
              <label htmlFor="name">Name</label>
              <input value={this.state.name} onChange={this.handleInputChange} type="text" name="name" className="form-control" aria-describedby="helpId" />
              <label htmlFor="phone">Phone</label>
              <input  value={this.state.phone} onChange={this.handleInputChange} type="text" name="phone" className="form-control" aria-describedby="helpId" />
              <label htmlFor="role">Role</label>
              <select onChange={this.handleInputChange} className="custom-select" name="role"  value={this.state.role}>
                <option>Select one</option>
                <option value="admin">ADMIN</option>
                <option value="student">STUDENT</option>
                <option value="guest">GUEST</option>
              </select>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary btn-block" value="Create" />
              <button onClick={this.handleDisplayAndHideForm} className="btn btn-block btn-light">Cancel</button>
            </div>
            </form>

          </div>
        </div>

    );
  }
}

export default AddForm;