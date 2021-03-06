//My require's
const axios = require('axios');
//My Database
let database = [];
let repo = 0;

//Get
axios.get('https://swapi.co/api/people').then(res =>{
  database = res.data.results;
});

  function getPeople (req, res) {
    return res.status(200).send(database);
  }
//Export
  module.exports={
    getPeople,
    deletePeople,
    editPeople,
    pushPost
  }

//Delete
  function deletePeople (req,res,next){
    database.forEach((peps,index) => {
      if(index == req.params.id){
        database.splice(index,1);
      }
    });
    res.status(200).send(database)
  }

// Post
function pushPost(req,res){
  // console.log(req.body)
  database.push(req.body.database)
  console.log(database)
    res.status(200).send(database)
  }



//put
 function editPeople (req, res, next){
  const {name}= req.body;
  const {id} = req.params;
  database.forEach((e,i)=>{
    if(i=== parseInt(id)){
      e.name=name;
    }
  })
  res.status(200).send(database);
  }

