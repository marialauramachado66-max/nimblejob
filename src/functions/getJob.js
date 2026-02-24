export async function getJob (){
const BASE_URL = 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net';

    try{
    const response = await fetch 
   (`${BASE_URL}/api/jobs/get-list`,{
    method: "GET"
   });
   if (!response.ok){
    throw new Error(`Error en la petición: ${response.status}`);
    
   }

   const data= await response.json();
   console.log("Respuesta de la API",data);
   return data;
}
catch (error){
    console.error("Problema con la petición:",error);
    return[];
}
}