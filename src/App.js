import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import { useState } from "react"



function App() {
  //only show the first five contacts
  const fiveContacts = contacts.slice(0,5)

  //state variable and store an array containing the first 5 contacts. 
  const [contactState, setContactState] = useState(fiveContacts)

  const addContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    const newContacts = [...contactState, randomContact]
    //newContacts.push(randomContact)
    //Liste wird neu aktualisiert
    setContactState(newContacts)
  }
  const sortAfterNames = () => {
    const sortedContacts = [...contactState].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContactState(sortedContacts);
  }

  const sortAfterPopularity = () => {
    const sortedPopularity = [...contactState].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      } else if (a.popularity > b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    setContactState(sortedPopularity);
  }

  const delteContact = (id) => {
    const contactListCopy = [...contactState]
    const updatedContactList = contactListCopy.filter(contact => contact.id !== id)
    setContactState(updatedContactList)
  }

  return (
    <div className="App">
      
      <h1>test</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name <button onClick={sortAfterNames}>Sort</button></th>
      <th>Popularity <button onClick={sortAfterPopularity}>Sort</button></th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
      <th>Delete</th>
    </tr>
  </thead>
    {contactState.map(contact => 
    <tr>
      <td>
        <img src={contact.pictureUrl} alt ='' style={{height:100}}></img>
      </td>
      <td>
          {contact.name}
        </td>
        <td>
          {contact.popularity.toFixed(2)}
        </td>
        <td>
          {contact.wonOscar ? '🏆' : '🍉'}
        </td>
        <td>
          {contact.wonEmmy ? '🏆' : '🍉'}
        </td>
        <td>
          <button onClick={() => {delteContact(contact.id)}}>Delte</button>
        </td>
    </tr>
      )}
  </table>
     
    </div>
  );
}

export default App;
