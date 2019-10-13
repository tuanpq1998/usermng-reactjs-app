import React, { Component } from 'react';
import './App.css';
import Header from './component/Header.js'
import SearchForm from './component/SearchForm.js'
import Table from './component/Table.js'
import data from './data/data.json'
import AddForm from './component/AddForm.js'
import EditForm from './component/EditForm';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchKey: "",
      data: data,
      isEditMode: false
    }
    this.getSearchKey = this.getSearchKey.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.handleOpenEditMode = this.handleOpenEditMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addNewUser = (obj) => {
    var items = this.state.data;
    obj.id = items[items.length - 1].id + 1;
    items.push(obj);
    this.setState({
      data: items
    });
  }

  handleOpenEditMode = (userId) => {
    var newState = {};
    if (!this.state.isEditMode)
      newState.isEditMode = true;
    newState.userId = userId;
    this.setState(newState);
  }

  closeEditMode = () => {
    this.setState({
      isEditMode: false
    });
  }

  onEdit = (user) => {
    var items = this.state.data.map((value) => {
      if (value.id === this.state.userId)
        value = {id : value.id, ...user};
      return value;
    })
    this.setState({
      data : items
    });
    this.closeEditMode();
  }

  getSearchKey = (searchKey) => {
    this.setState({
      searchKey: searchKey
    })
  }

  handleDelete = (userIdOut) => {
    var items = this.state.data.filter((user) => user.id !== userIdOut);
    this.setState({
      data : items
    });
  }

  render() {
    var result = [];
    this.state.data.forEach(value => {
      if (value.name.indexOf(this.state.searchKey) > -1)
        result.push(value);
    });
    return (
      <div>
        <Header />
        <div className="container">
          <SearchForm onSearch={this.getSearchKey} />
          <hr className="my-2" />
          <div className="row">
            <Table data={this.state.searchKey !== "" ? result : this.state.data} onEditMode={this.handleOpenEditMode}
              onDelete={this.handleDelete} />
            <div className="col-xl-4 col-lg-5">
              <AddForm onAdd={this.addNewUser} />
              <EditForm isDisplay={this.state.isEditMode} user={this.state.isEditMode ? this.state.data[this.state.userId - 1] : ""}
                onClose={this.closeEditMode} onSubmitEdit={this.onEdit} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}
