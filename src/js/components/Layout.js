import React from "react";

import ContactsList from './ContactsList'


export default class App extends React.Component{

    render(){
        return(
            <div>
                <h1>Contact List</h1>
                <ContactsList contacts = {this.props.contacts} />
            </div>
        );
    }
}
