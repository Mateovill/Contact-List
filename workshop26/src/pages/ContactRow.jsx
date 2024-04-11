export default function ContactRow ({data, setSelectedContact}){
    function handleClick (){
        setSelectedContact(data);
    }
    return(
      <tr 
      className='row'
       onClick ={handleClick}
       >

        <td className="row-data">{data.name}</td>
        <td className="row-data">{data.email}</td>
        <td className="row-data">{data.phone}</td>
      </tr>
    )
}