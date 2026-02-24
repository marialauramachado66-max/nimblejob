export async function postPostulacion({uuid, jobId, candidateId, repoUrl}) {
    const BASE_URL='https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net'

    try {
        const response = await fetch (`${BASE_URL}/api/candidate/apply-to-job`,{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
        uuid,
        candidateId,
        jobId,
        repoUrl,
      }),

            });
            
            if(!response.ok){
                throw new Error(`Error en la postulación: ${response.status}`);
            }
            const result = await response.json();
    return result;
  } catch (error) {
    console.error("Problema al enviar la postulación:", error);
    throw error;
  }
}


                
            
        
    
