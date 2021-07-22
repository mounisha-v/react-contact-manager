import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {uuid} from 'uuidv4';
import Header from './header';
import Addcontact from './addcontact';
import Contactlist from './contactlist';
import Contactdetail from './contactdetail';


import './App.css';


function App() {
  const LOCAL_STORAGE_KEY='contacts'
  const [contacts,setContacts]=useState([]);


  const addcontactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id: uuid(),...contact}])
  };

const removeContactHandler=(id)=>{
  const newcontactlist=contacts.filter((contact)=>{
    return contact.id!==id;
  })
  setContacts(newcontactlist)
}



  useEffect(()=>{
    const retrievecontacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)
    );
  if(retrievecontacts)
setContacts(retrievecontacts)  },[]);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);
  return (
    
    <div className='ui container'> 
    
    <Router>
    <Header />
    <Switch>
    <Route path='/' exact render
    ={(props)=>(<Contactlist {...props} contacts={contacts} getContactId={removeContactHandler}/>)}/>
    <Route path='/add' exact  render={(props)=>(<Addcontact {...props} addcontactHandler={addcontactHandler}/>)}
/>    </Switch>
    {/*<Addcontact addcontactHandler={addcontactHandler} />
    <Contactlist contacts={contacts} getContactId={removeContactHandler}/>
*/  } 

<Route path='/contact/:id' component={Contactdetail}/> </Router>
     
    </div>
  );
}

export default App;
