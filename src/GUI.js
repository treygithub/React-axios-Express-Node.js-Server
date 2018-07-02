import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
constructor(props){
  super(props);
  this.state ={
    title:'React CRUD GUI',
    act:0,
    index:'',
    data:[]
  }

 }


   submit = (e) => {
      e.preventDefault();
      let data = this.state.data;
      let name = this.refs.name.value;
      let address = this.refs.address.value;

      if(this.state.act === 0){
        let data = {
            name,address
        }
        data.push(data);
      }else{
        let index = this.state.index;
        data[index].name = name;
        data[index].address =address;
      }
  

  this.setState({
      data:data,
      act:0
  });

  this.refs.input.reset();
  this.refs.name.focus();
}

remove = (i) =>{
    let data = this.state.data;
    data.splice(i,1);
  this.setState({
      data:data
  });
  this.ref.input.reset();
  this.ref.name.focus();
}

edit =(i)=>{
    let data = this.state.data[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    
    this.setState({
        act:1,
        index:i
    });
    this.refs.name.focus();
}

  render() {
        let data = this.state.data;

    return (

      <div className="form-edit-delete">
      <h2>{this.state.title}</h2>
        <form ref="input" className="crud-gui">
            <input type="text" ref="name" placeholder="Type new Chracter name"/>
            <input type="text" ref="address" placeholder="Add Super Power"/>
            <button onClick={(e)=>this.submit(e)} className="gui-Btn">Submit</button>
        </form>
        <div>
        {data.map((data,i) => 
             <li key={i} className="list1">
             {i+1}. {data.name}, {data.address}
             <button className="my-delete-btn" onClick={()=> this.remove(i)}>Remove</button>
             <button className="my-edit-btn" onClick={()=> this.edit(i)}>Edit</button>
            </li>
        )}
        </div>
      </div>
    );
  }
}

export default Form;
