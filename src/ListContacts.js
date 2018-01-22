import React, { Component } from 'react'
import PropTypes from 'prop-types'

// function ListContacts(props) {

//   return (
//       <ol className='contact-list'>
//         {props.contacts.map((contact) => (
//           <li
//             key={contact.id}
//             className='contact-list-item'>
//               <div
//                 className='contact-avatar'
//                 style={{
//                   backgroundImage : `url(${contact.avatarURL})`
//                 }}>
//               </div>

//               <div
//                 className='contact-details'>
//               <p>{contact.name}</p>
//               <p>{contact.email}</p>
//               </div>

//               <button
//                 onClick={() => props.deleteContact(contact)}
//                 className='contact-remove'>
//                 Remove
//               </button>
//           </li>
//           ))}
//       </ol>
//     )
// }

// ListContacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func.isRequired
// }

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
  }

  render() {
    return (
      <ol className='contact-list'>
        {this.props.contacts.map((contact) => (
          <li
            key={contact.id}
            className='contact-list-item'>
              <div
                className='contact-avatar'
                style={{
                  backgroundImage : `url(${contact.avatarURL})`
                }}>
              </div>

              <div
                className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              </div>

              <button
                onClick={() => this.props.deleteContact(contact)}
                className='contact-remove'>
                Remove
              </button>
          </li>
          ))}
      </ol>
    )

  }
}

export default ListContacts;