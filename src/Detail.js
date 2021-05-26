import React, { useState,useEffect } from 'react';
import './Detail.css'
import axios from 'axios'
const Detail = ({match}) => {
    
    const [name,setName] = useState('')
    const [episode,setEpisode] = useState('')
    const [image,setImage] = useState('')
    const [end,setEnd] = useState('')
    const [startDate,setStartDate] = useState('')
    const [type,setType] = useState('')
    const [title,setTitle] = useState('')
    const [synopsis,setSynopsis] = useState('')
    const [score,setScore] = useState('')
    
    const dataFetch = async(name,id)=> {
        const url = `https://api.jikan.moe/v3/search/anime?q=${name}`
        const response =  await axios.get(url)
        let responses = response.data.results
        console.log(responses)
        const value = responses.filter((item)=>item.mal_id == id)
        setImage(value[0].image_url)
        setStartDate(value[0].start_date)
        setEnd(value[0].end_date)
        setType(value[0].type)
        setTitle(value[0].title)
        setSynopsis(value[0].synopsis)
        setEpisode(value[0].episodes)
        setScore(value[0].score)
        // setResult(...value)
        console.log(value)
        // console.log(result)
      }
  
        useEffect ( () => {
          dataFetch(match.params.name,match.params.id)
         }, [match.params.name,match.params.id]);
  
    

    return (  
        <div className='container'>
            <div className="row" id='full'>
                <div className='col'id='image'>
                    <img src={image} alt=''/>
                </div>
                    <div className='col' id='title'>
                    <div className='container'>
                        <div className='row row-cols-1'>
                            <div className='col' id="syn">
                                <h1>{title}</h1>
                                <p>{synopsis}</p>
                            </div>
                            <div className='col' id='value'>
                                <h4>Total Episode :{title}</h4>
                                <h4>Score :{score}</h4>
                                <h4>Type :{type}</h4>
                                <h4>Start Date :{startDate}</h4>
                                <h4>End Date :{end}</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                     </div>
                </div>
    );
}
 
export default Detail;