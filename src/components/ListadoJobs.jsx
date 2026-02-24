import React, { useEffect } from "react";
import { getJob } from "../functions/getJob";
import { useState } from "react";
import { postPostulacion } from "../functions/postPostulacion";
import "./ListadoJobs.css";

function ListadoJobs({ uuid, candidateId }){
const [jobs, setJobs]=useState([]);
const [repoUrls, setRepoUrls]=useState({});

useEffect(()=>{
    const fetchJobs= async()=>{
        const jobsData=await getJob(); //trae la función getJobs para obtener el listado
     setJobs(Array.isArray(jobsData)?jobsData : []);
    
    };
    fetchJobs();
},[]);

const handleChange = (jobId, value)=>{
    setRepoUrls((prev)=>({
        ...prev,
        [jobId]:value,
}));
};

const handleSubmit= async (jobId)=>{
    try {
        await postPostulacion({
        uuid,
        jobId,
        candidateId,
        repoUrl: repoUrls[jobId]|| "",

    });

    alert("Postulación exitosa");
}
        catch (error){
            alert ("Error en la postulación");
        }
    };
return (
    <div className="container">
        <h1>LISTADO POSICIONES</h1>
        <ul>
            {jobs.map((job)=>(
            <li key={job.id}>
                {job.title}
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