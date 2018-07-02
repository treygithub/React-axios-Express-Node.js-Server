import React from 'react';

    const User = (props) =>{
      
    
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <form onSubmit={props.getUser} >
          <input style={{color:`black`}} type="text" name="username"/>
          <button >SUBMIT</button>
        </form>
      </div>
    );
  }

export default User;