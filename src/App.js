import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts


    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[
        { name: 'Victor'},
        {name: 'Uwem'},
        {name: 'Isaac'}
      ]} />
      <ContactList contacts={[
        { name: 'Swiss'},
        {name: 'Chima'},
        {name: 'Emma'}
      ]} />
    </div>
  );
}

export default App;
