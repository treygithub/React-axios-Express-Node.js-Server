
import React, { Component } from 'react';
import axios from 'axios'
import Loader from "./../Loader/Loader"

class InstanceLoop extends Component {
  constructor(props){
    super(props);
    this.state={
      database:[],
      changeme:'',
      pushPost:''
    }

    
    this.deletePeople = this.deletePeople.bind(this)
    this.shipMe = this.shipMe.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.pushPost2= this.pushPost2.bind(this)
    this.handleInputChange2 = this.handleInputChange2.bind(this)
   }
  
   componentDidMount(){
     axios.get('/api/getData').then(results => {
       this.setState({
         database: results.data
       })
      console.log(results)
     })
   };
 
   handleInputChange2(e){
    this.setState({[e.target.name]: e.target.value})
  }

  pushPost2 = () => {
    let {name, gender, height, mass} = this.state
    axios.post("/api/AddPost",{database: {name, gender, height, mass}} ).then(res => {
      this.setState({
        database: res.data
      })
    })
  }
  
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
    
    render() {

      console.log(this.state.database)
  
      let mapdatabase  = this.state.database.map((e,i) => {
        return (
          <div key={i} className="container-fluid col-lg-3">
            <h2> {e.name}</h2>
            <h4>Gender: {e.gender}</h4>
            <h4>Height: {e.height}</h4>
            <h4>Mass: {e.mass}</h4>
            <button  className="del-peps" onClick={()=> this.deletePeople(i)}> Delete</button>
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
        <form>
            <input className="form-field-create" placeholder="Create Name" type="text" name="name" onChange={e => this.handleInputChange2(e)}/>
            <input className="form-field-create" placeholder="Create Gender" type="text" name="gender" onChange={e => this.handleInputChange2(e)}/>
            <input className="form-field-create" placeholder="Create Height" type="text" name="height" onChange={e => this.handleInputChange2(e)}/>
            <input className="form-field-create" placeholder="Create Mass" type="text" name="mass" onChange={e => this.handleInputChange2(e)}/>
            <button className="form-field-create" onClick={(e) => this.pushPost2(e, this.state.update)} className="gui-Btn"> Post New Guy </button>
        </form>
      </div>
    );
  }
}

export default InstanceLoop;
