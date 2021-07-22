import React from 'react';
import {Link} from 'react-router-dom';
import Contactcard from './contactcard';

const contactlist =(props)=>{
  console.log(props)
  const deleteContactHandler=(id)=>{
      props.getContactId(id)
  };
  
  const rendercontactlist=props.contacts.map((contact)=>{
      return (
         <Contactcard contact={contact} clickHandler={deleteContactHandler}></Contactcard>
      )
  })
    return (
        
        <div className='main'>
            <h1>hey</h1>
            
             
            <h2>Contact list   &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/add'>
                <button className='ui button green'>Add contact</button>
                </Link>
            </h2>
            
            
            
        <div className='ui celled list'>
        {rendercontactlist}
        </div>
        
        </div>
    )
} 



export default contactlist;