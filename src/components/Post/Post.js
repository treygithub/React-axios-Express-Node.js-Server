import React, {Component} from 'react';
import axios from 'axios'
// page Not Being used..... Moved all functions and html / jsx too comonents.js
// i could have used this and pased props instead of moving it...

class Post extends Component {
    constructor(){
        super();
        this.state={
        database:[],
        pushPost:{ database:''},
        name:'',
        gender:'',
        height:'',
        mass:''
        }
        this.pushPost2= this.pushPost2.bind(this)
        this.handleInputChange2 = this.handleInputChange2.bind(this)
    }
    handleInputChange2(e){
        this.setState({[e.target.name]: e.target.value})
      }

    pushPost2 = () => {
    let {name,gender,height,mass} = this.state
    axios.post("/api/AddPost",{name,gender,height,mass} ).then(res => {
      this.setState({
        pushPost:res.data
      })
    })
  }
    

  render() {
    return (
      <div>
        <form>
            <input placeholder="Create Name" type="text" name="inputName" onChange={e => this.handleInputChange2(e)}/>
            <input placeholder="Create Gender" type="text" name="inputGender" onChange={e => this.handleInputChange2(e)}/>
            <input placeholder="Create Height" type="text" name="inputHeight" onChange={e => this.handleInputChange2(e)}/>
            <input placeholder="Create Mass" type="text" name="inputMass" onChange={e => this.handleInputChange2(e)}/>
            <button onClick={(e) => this.pushPost2(e, this.state.update)} className="gui-Btn"> Post New Guy </button>
        </form>
      </div>
    );

   }
 }

export default Post;