import React from "react";
import Contact from './Contact'


export default class ContactsList extends React.Component{

  constructor(props){
    super(props);//Conponent.constructor
    this.state = {
      search: '',
      contacts: props.contacts
    };
  }

  updateSearch(event){
    this.setState({
      search: event.target.value
    });
  }

  addContact(event){
    event.preventDefault();

    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor((Math.random() * 100) + 1 );
    //
    // console.log(name);
    // console.log(phone);
    // console.log(id);
    // console.log(this.state.contacts.concat({id, name, phone}));

    this.setState({
      contacts: this.state.contacts.concat({id, name, phone})
    });
    this.refs.name.value = "";
    this.refs.phone.value = "";

    // console.log(this.state.contacts);
  }

  render(){

    let filteredContacts = this.props.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
      }
    );
    return(
      <div>
      <input type="text"
      placeholder = "Search"
      value = {this.state.search}
      onChange = {this.updateSearch.bind(this)}
      />
    <form onSubmit={this.addContact.bind(this)}>
    <input type="text" ref="name" /><br />
  <input type="text" ref="phone" /><br />
<button type="submit">Add Contacts</button>
</form>
<ul>
{
  filteredContacts.map((contact) => {
    return <Contact contact = {contact} key={contact.id} />
})

}
</ul>



</div>
);
}
}
