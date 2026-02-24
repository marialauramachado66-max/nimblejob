export async function postPostulacion({uuid, jobId, candidateId, repoUrl}) {
    const BASE_URL='https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net'

     const body = { uuid, jobId, candidateId, repoUrl };
  console.log("Body enviado:", body);

    try {
        const response = await fetch (`${BASE_URL}/api/candidate/apply-to-job`,{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(body),
        
      })
           
            if(!response.ok){
             const errorText = await response.text();
      console.error("Respuesta del servidor:", errorText);
      throw new Error(`Error en la postulación: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Problema al enviar la postulación:", error);
    throw error;
  }
}





                
            
        
    
