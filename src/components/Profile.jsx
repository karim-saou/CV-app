import React, { Component } from 'react';
import uniqid from 'uniqid';
import deleteIcon from '../assets/delete-2-svgrepo-com.svg';
import addIcon from '../assets/add-plus-square-svgrepo-com.svg';
import Form from './Form';
import EditBtn from './EditBtn';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profileList: [
        {
          id: uniqid(),
          text: 'Reseacher of structural and publication data resulting in the development of insights and contribution to the quality of a molecular database',
        },
        {
          id: uniqid(),
          text: 'Scientific consultant of validation software for structural data',
        },
        {
          id: uniqid(),
          text: 'Assistant of the lead teacher of an introduction to programming in Python for scientific students',
        },
      ],
      formClassName: 'Profile_form hidden',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addProfileItem = this.addProfileItem.bind(this);
    this.deleteProfileItem = this.deleteProfileItem.bind(this);
    this.setFormDisplay = this.setFormDisplay.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    const targetIndex = Number(e.target.id);
    const newProfileList = this.state.profileList.map((item, index) => {
      if (index === targetIndex) {
        item.text = e.target.value;
      }
      return item;
    });
    this.setState({
      profileList: [...newProfileList],
    });
  }

  addProfileItem(e) {
    e.preventDefault();
    const newItemText = e.target.previousSibling.value;
    this.setState({
      profileList: [
        ...this.state.profileList,
        { id: uniqid(), text: newItemText },
      ],
    });
    e.target.previousSibling.value = '';
  }

  deleteProfileItem(e) {
    e.preventDefault();
    const targetIndex = Number(e.target.previousSibling.id);
    const newProfileList = this.state.profileList.filter(
      (item, index) => index !== targetIndex
    );
    this.setState({
      profileList: [...newProfileList],
    });
  }

  setFormDisplay() {
    this.setState({
      formClassName:
        this.state.formClassName === 'form Profile_form hidden'
          ? 'form Profile_form'
          : 'form Profile_form hidden',
    });
  }

  render() {
    const profileList = this.state.profileList.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
    return (
      <div className="Profile">
        <ul>{profileList}</ul>
        <EditBtn formDisplayHandler={this.setFormDisplay} />

        <Form
          className={this.state.formClassName}
          title="Edit Profile"
          formDisplayHandler={this.setFormDisplay}
        >
          {this.state.profileList.map((element, index) => {
            return (
              <div key={element.id} className="input_container">
                <input
                  id={index}
                  value={element.text}
                  onChange={this.changeHandler}
                />
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={this.deleteProfileItem}
                />
              </div>
            );
          })}
          <div className="input_container">
            <input id="add_input" />
            <img src={addIcon} alt="add icon" onClick={this.addProfileItem} />
          </div>
        </Form>
      </div>
    );
  }
}
