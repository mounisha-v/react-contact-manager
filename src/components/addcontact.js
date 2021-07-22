import React from 'react';


class addcontact extends React.Component{
    state={
        name:'',
        email:'',
    }

    add=(e)=>{
        e.preventDefault();
        if(this.state.name===''||this.state.email===''){
            alert('all the fields are mandatory')
            return;
        }
        this.props.addcontactHandler(this.state);
        this.setState({name:'',email:''});
       this.props.history.push('/');
    }
render (){
    return(
      
<div className='ui main'>
    <h1>hi</h1>
        <form className='ui form' onSubmit={this.add}>
        
              <div className='field'>
              <h1>Add contact</h1>
              <label>Name</label>
              <input type='text' name='name' placeholder='name'
              value={this.state.name} onChange={
                  (e)=>this.setState({name:e.target.value})}/>
              </div>
              <div className='field'>
              <label>Email</label>
              <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={
                  (e)=>this.setState({email:e.target.value})}/>
              </div>
              <button className='ui button green'>Add </button>
          </form>
        </div>
        
    )
};
}

export default addcontact;