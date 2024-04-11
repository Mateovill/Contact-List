export default function ContactInfo({ selectedContact, setSelectedContact }) {
    console.log(selectedContact);
function handleClick (){
setSelectedContact(null)
}
    return (
        <div>
            <h1>Details:</h1>
            <span>
                {''}
                {selectedContact.address.street} {selectedContact.address.city} 
            </span>
            <button className='btn' onClick={handleClick}>Go Back!</button>
        </div>
    )
}