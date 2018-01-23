import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  // componentDidMount() {
  //   ContactsAPI.getALL().then((contacts) => {
  //     this.setState({
  //       contacts: contacts
  //     })
  //   })
  // }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }



  removeContact = (contactToBeRemoved) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => (contact.id !== contactToBeRemoved.id))
    }))

    ContactsAPI.remove(contactToBeRemoved)
  }

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          deleteContact = {this.removeContact}
        />
      </div>
    )
  }
}

export default App;
