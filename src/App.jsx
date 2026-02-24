import { useEffect } from 'react'
import { getCandidate } from './functions/getCandidate.js';
import { getJob } from './functions/getJob';
import ListadoJobs from './components/ListadoJobs.jsx';

function App() {
 useEffect(()=>{
  getCandidate("marialauramachado66@gmail.com");
 },[]);

 useEffect(()=>{
  getJob();
 },[]);



  return (
    
      <div>
      <ListadoJobs email="marialauramachado66@gmail.com" />




      </div >
       
  );
}

export default App;
