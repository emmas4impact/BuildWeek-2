import React from 'react'
import {Jumbotron, Dropdown} from 'react-bootstrap';
import {Container,Card, Image,Button} from 'react-bootstrap';
import { FaCamera, FaPen, FaClosedCaptioning, FaTimes } from 'react-icons/fa';
import { GiPencil } from "react-icons/gi";
// const username="user29";
// const password="w4X9FKLNUDSXwzYu";

class Jumbotrons extends React.Component{
    state = {
      loading: true,
       profile: null,
       person: [],
       image: null,
       
        
   };


componentDidMount=async()=>{
this.fetchUserData()
}

fetchUserData = async () => {
  const url="http://localhost:3003/profile/me" 
const response= await fetch(url,{
  method:'Get',
  credentials: "include",
  headers:new Headers({
   'Content-type':'applicationCache/json', 
   'Authorization':'Basic ' + " dXNlcjk6c1A0WU1LaEJwcVFIQVBKTg=="
  })
})
const data= await response.json();
console.log("my data",data);
this.setState({person:data, loading:false})
}

uploadPicture = async () =>{
        
  // const username="user29";
  
  const url="http://localhost:3003/profile/me" + this.state.person._id+"/upload"
  const response= await fetch(url,{
    method:'POST',
    body: this.state.image,
   
  })
  
  if(response.ok){
      alert("Post successfully!")
      this.fetchUserData()
  }

}


onChange=(e)=>{
  let photo =new FormData()
  photo.append('profile', e.target.files[0])
  this.setState({
      image: photo
  }, () => {
    this.uploadPicture()
  })
  console.log(photo)
}

render(){
 return(
    <Jumbotron fluid className='box jumbo-box'>
    <Container style={{padding: '0'}} className='ommit '>
    
      <Card style={{position: 'relative'}} style={{border: 'none'}}>
      
        <Card.Img variant="top" src="/jumboCover.jpeg"/>

<div class="image-upload" style={{position:'absolute', top:'0.5rem', right: '-60px', width:'100px',cursor:'pointer'}} onSubmit={this.uploadPicture}>
    <label for="file-input">
    <FaCamera style={{width:'20px'}}/>
    </label>

    <input id="file-input" type="file" style={{display:'none'}} onChange={(e)=> this.onChange(e)}/>
</div>
       
        <Card.Body>
        <Button className="btn btn-light"  variant="primary" style={{position:'absolute',bottom:'2rem',right:'1rem',width:'100px',background:'rgb(250,250,250)',color:'rgb(105,105,105)',border:'1px solid black '}} >More..</Button>&nbsp;&nbsp;
                    <Dropdown style={{position:'absolute',bottom:'2rem',right:'8.8rem'}}>
                    <Dropdown.Toggle id="dropdown-basic" style={{background:'rgb(0,123,250)',color:'rgb(250,250,250)',border:'1px solid rgb()'}}> Add section profile </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item>Intro
                    </Dropdown.Item>
                    <Dropdown.Item>About
                    </Dropdown.Item>
                    <Dropdown.Item>Featured
                    </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
        <Card.Text>
          {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image className='img-jumbo' src={this.state.person.image}/></div><div> {this.state.person.id}</div>
 <div className='name pt-4'>{this.state.person.name}</div><div className='bio'>{this.state.person.bio}</div><div className='email'>{this.state.person.email}</div><div className='Title'>{this.state.person.title}</div></div>)}
          </Card.Text>
          <div className='mt-2 height-mg' style={{lineHeight: '0.5', fontWeight: '600', padding: '20px 20px 5px', border: "1px dashed #B3B6B9", margin: '0 auto'}}>
              <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>Show recruiters you're open to work - you control who sees this<FaTimes style={{fontSize: '15px'}} /> </p>
              <p style={{color: '#006097'}}>Get started</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  </Jumbotron>
 )   
}
}

export default Jumbotrons