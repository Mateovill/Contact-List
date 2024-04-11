import { useState, useEffect } from "react";
import React from "react";
import ContactRow from "../pages/ContactRow";


export default function ContactList({setSelectedContact}) {
   
    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        async function fetchContacts() {
            try {
               
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`
                    );
                    const result = await response.json();
            if (response.status === 200){
                setContacts(result);
               
            }
            } catch (error) {
                console.log(error);
            }
        }
        fetchContacts();
    }, [])
  
     //combines js and html = jsx
    return (
       <table className="list">
        <thead>
            <tr>
                <th>Contact List:</th>
            </tr>
        </thead>
       {contacts.map((contact)=>{
        return <ContactRow 
        key={contact.id} 
        data={contact}
        setSelectedContact = {setSelectedContact}/>
})}
       </table>

    );
}