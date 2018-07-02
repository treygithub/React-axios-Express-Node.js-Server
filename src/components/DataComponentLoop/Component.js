
import React, { Component } from 'react';
import axios from 'axios'
import Loader from "./../Loader/Loader"

class InstanceLoop extends Component {
  constructor(props){
    super(props);
    this.state={
      database:[],
      changeme:'',
      pushPost:{ database:''},
      name:'',
      gender:'',
      height:'',
      mass:''
    }

    
    this.deletePeople = this.deletePeople.bind(this)
    this.shipMe = this.shipMe.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
   }
  
   componentDidMount(){
     axios.get('/api/getData').then(results => {
       this.setState({
         database: results.data
       })
      console.log(results)
     })
   };
  
  
  deletePeople(id){
    axios.delete(`api/duces/${id}`).then(results => {
      this.setState({
        database: results.data
      });
    });
  };


  shipMe(id,name){
    axios.put(`/api/editcharacters/${id}`,{name}).then(results => {
      this.setState({ database:results.data })
    })
  }

  handleInputChange(e){
    this.setState({update: e.target.value})
  }





  // pushPost = () => {
  //   let {name,gender,height,mass} = this.state
  //   axios.post("/api/AddPost",{name,gender,height,mass} ).then(res => {
  //     this.setState({
  //       pushPost:res.data
  //     })
  //   })
  // }
  
  
    
  
    render() {
  
      let mapdatabase  = this.state.database.map((e,i) => {
        return (
          <div key={i} className="container-fluid col-lg-3">
           <h2> {e.name}</h2>
        <h4>Gender: {e.gender}</h4>
        <h4>Height: {e.height}</h4>
        <h4>Mass: {e.mass}</h4>
        <button  className="del-peps" onClick={()=> this.deletePeople(i)}> Delete</button>
        <button className="btn1" onClick={()=> this.add1()}>+</button> 
        <button className="btn2" onClick={()=> this.remove1()}>-</button>
        {/* put request  input fields below */}
        <input placeholder="Change Name" type="text" name="input" onChange={e => this.handleInputChange(e)}/>
        <button onClick={() => this.shipMe(i, this.state.update)} className="gui-Btn"> Update </button>
        </div>
        )
      })
    
  //my Loader

  if(!this.state.database.length){
    return <Loader className="Loaderr"/>
  }

    return (

      <div>
        <div>{mapdatabase}</div>
      </div>
    );
  }
}

export default InstanceLoop;
