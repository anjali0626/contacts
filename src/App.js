import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
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
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={this.state.contacts}
            deleteContact ={this.removeContact}
          />
        )}/>

        <Route path="/create" component={CreateContact}/>

      </div>
    )
  }
}

export default App;
