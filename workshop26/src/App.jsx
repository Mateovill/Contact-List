import { useState } from 'react';
import ContactList from './components/ContactList'
import ContactInfo from './pages/ContactInfo'
import './App.css'

function App() {
  const [selectedContact, setSelectedContact] = useState (null);  
  
  return (
    <>
      {selectedContact ? (
      <ContactInfo
       selectedContact={selectedContact}
       setSelectedContact={setSelectedContact}
        />
        ) : (
        <ContactList setSelectedContact={setSelectedContact} />
     )}
    </>
  )
}

export default App
