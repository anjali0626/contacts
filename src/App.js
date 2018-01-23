import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    screen: 'list', //list, create
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
        {this.state.screen === 'list' && (
          <ListContacts
            contacts={this.state.contacts}
            deleteContact = {this.removeContact}
          />
        )}

        {this.state.screen === 'create' && (
          <CreateContact />
        )}

      </div>
    )
  }
}

export default App;
