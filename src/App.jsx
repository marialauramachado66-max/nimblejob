import { useEffect } from 'react'
import { getCandidate } from './functions/getCandidate.js';
import { getJob } from './functions/getJob';

function App() {
 useEffect(()=>{
  getCandidate("marialauramachado66@gmail.com");
 },[]);

 useEffect(()=>{
  getJob();
 },[]);



  return (
    
      <div>
       
      <h1>nimble</h1>
      </div >
       
  );
}

export default App;
