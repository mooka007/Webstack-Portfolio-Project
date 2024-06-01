import { useState, useEffect } from "react";

const useFetch = ()=>{
  const [items, setItems]= useState([]);

  useEffect(()=>{ 
    fetchData()
  }, []);

  const fetchData = () =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '40d4110d53msh05a5cfe396e9fe2p1f810bjsna3dda3bfd857',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    };
    
    fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)
      
      .then(response => response.json())
      .then(response => {
        const data =[]
            response.hits.map(({id, title, coverPhoto, purpose, price, location}) =>{
              data.push({
                id,
                title,
                purpose,
                price,
                url : coverPhoto.url,
                state: location[0].name})
                return (data);
            })
            
            setItems(data); 
            console.log(data)


        })
          
      .catch(err => console.error(err));
  }
    
    return {items};
  }
  
  
  export default useFetch;
  
