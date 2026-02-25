import React, { useEffect } from "react";
import { getJob } from "../functions/getJob";
import { useState } from "react";
import { postPostulacion } from "../functions/postPostulacion";
import "./ListadoJobs.css";
import { getCandidate } from "../functions/getCandidate";

function ListadoJobs({ email}){
const [candidate, setCandidate] = useState(null);
const [jobs, setJobs]=useState([]);
const [repoUrls, setRepoUrls]=useState({});

useEffect(()=>{
    const fetchData= async()=>{
        try{
        const candidateData = await getCandidate(email);
        setCandidate(candidateData);
        const jobsData=await getJob(); //trae la función getJobs para obtener el listado
     setJobs(Array.isArray(jobsData)?jobsData : []);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };
    fetchData();
  }, [email]);    
    
const handleChange = (jobId, value)=>{
    setRepoUrls((prev)=>({
        ...prev,
        [jobId]:value,
}));
};

const handleSubmit= async (jobId)=>{
     if (!candidate) {
      alert("Datos del candidato no cargados todavía");
      return;
    }
const repoUrl = repoUrls[jobId];

    if (!repoUrl){
      alert("Ingresar repositorio");
      return;
    }


    try {
        const result = await postPostulacion({
        uuid: candidate.uuid,
        jobId,
        candidateId: candidate.candidateId,
        repoUrl,
        applicationId: candidate.applicationId,
       

    });
    console.log("Respuesta del servidor:", result);

    alert("Postulación exitosa");
}
        catch (error){
            console.error("Error en la postulación:", error);
            alert ("Error en la postulación"+error.message);
        }
    };
return (
    <div className="container">
        <h1>LISTADO POSICIONES</h1>
        <ul>
            {jobs.map((job)=>(
            <li key={job.id}>
                {job.title}
                <br/>
                <input type="text"
                name="url"
                placeholder="Ingresá la URL de tu repositorio"
                value={repoUrls[job.id]|| ""}
                onChange={(e)=>handleChange(job.id, e.target.value)}/>
                <button className = "btn" onClick={()=> handleSubmit(job.id)}>Enviar Postulación</button>
            </li>
            ))}
            </ul>
    </div>
);
}

export default ListadoJobs;