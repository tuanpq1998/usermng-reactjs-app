import React, { Component } from 'react';

class Table extends Component {

  handleDeleteBtn = (userId) => {
    if (window.confirm("Are you sure?"))
      this.props.onDelete(userId);
  }

  render() {
      const body = this.props.data.map((value, key) => {
        return (
          <tr key={key}>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.phone}</td>
        <td>{value.role}</td>
        <td>
          <div className="btn-group">
            <button className="btn btn-primary btn-warning" onClick={() => this.props.onEditMode(value.id)}><i className="fa fa-edit" /> Edit</button>
            <button className="btn btn-primary btn-danger" onClick={() => this.handleDeleteBtn(value.id)} ><i className="fa fa-remove" /> Delete</button>
          </div>
        </td>
      </tr>
        )
      })
      return (
            <div className="col-xl-8 col-lg-7">
  <table className="table table-striped table-inverse table-bordered table-responsive-sm">
    <caption>List of users</caption>
    <thead className="thead-inverse">
      <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {body}
    </tbody>
  </table>
</div>

        );
    }
}

export default Table;