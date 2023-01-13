import logo from './logo.svg';
import './App.css';
import{useState ,useEffect} from 'react'

function App() {
 const[firstName, setFirstName] = useState("");
 const[lastName, setLastName] = useState("");
 
useEffect(()=>{
  console.log('First Name: ${firstName}')
  console.log('last Name: ${lastName}')
},[lastName])
 
 

  return (
    <div>
      <form>
        Enter First Name: <br />
        <input type = "text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        <br /> <br />
        
        Enter Last Name: <br />
        <input type = "text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        <br /> <br />
        
       
        
      </form>
      <h3>{firstName}</h3>
      
      <br /> <br />
      
   </div>
  );
}

export default App;
