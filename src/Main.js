import './main.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Dropdown,DropdownButton, } from 'react-bootstrap';
import {BrowserRouter as Router,Link } from 'react-router-dom';
import { Pie, PieChart, Tooltip } from 'recharts';


const Main = () => {

  const [names,setNames] = useState('pokemon')
  const[values,setValues]= useState([])
 


    const dataFetch = async(name)=> {
      const url = `https://api.jikan.moe/v3/search/anime?q=${name}`
      const response =  await axios.get(url)
    //   console.log(response)
      let responses = response.data.results
      setValues(responses)
     let types = responses.map((item)=>item.type )
  

    //  for(let i=0;i<types.length;i++){
    //  if(types[i]==='TV'){
    //    tv=tv+1
    //    console.log('tv',tv)
    //  }else if(types[i]==='Movie'){
    //     movie=movie+1
    //     console.log('movie',movie)
    //  }else if(types[i]==='OVA'){
    //    ova=ova+1
    // console.log('ova',ova)
    //  }else if(types[i]==='Special'){
    //    special=special+1
    //    console.log('special',special)
    //  }
    //  else{
    //    ona=ona+1
    //    console.log('ona',ona)
    //  }
    //  }      
    
    //  for(let i=0;i<types.length;i++)   
    //  {
    //    counts[types[i]] += 1
    //  }
    //  console.log(counts)


    }
   
      useEffect ( () => {
        dataFetch(names)
       }, [names]);
    // console.log(tv)
    // console.log(counts[TV])
    

      //  SetTv(counts["TV"]);
       

      const data = [
        { name: 'TV', value: 10 },
        { name: 'Movie', value: 6  },
        { name: 'OVA', value: 2 },
        { name: 'Special', value: 17 },
        { name: 'ONA', value: 15 },
        
      ];


       
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <h1 id='header'>ANIME MAZE</h1>
                </div>
            </div>
            <div className="row">

                <div class="col" style={{ width:'80vw',height:'80vh'}}>
                <div className="dropdown">
    <DropdownButton id="dropdown-basic-button" title={names}>
    <Dropdown.Item onClick={()=>{setNames('naruto')}} href="#">Naruto</Dropdown.Item>
    <Dropdown.Item  onClick={()=>{setNames('pokemon')}} href="#">Pokemon</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setNames('Ghost in the Shell')}} href="#">Ghost in the Shell</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setNames('Death Note')}} href="#">Death Note</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setNames('Samurai Champloo')}} href="#">Samurai Champloo</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setNames('Darker Than Black')}} href="#">Darker Than Black</Dropdown.Item>
    </DropdownButton>
    </div>
    <div className='picture'>
        <div className="container">
            <div className="row">
                <div className="col">
                {
      values && values.map((element)=>(
        <Router>
        <a href={`/detail/${names}/${element.mal_id}`}>
          <img src={element.image_url} alt='' id='image' />   
        </a> 
        </Router>      
      ))
    }
                </div>
               
            </div>
        </div>
    </div>

          </div>
          <div class="col" style={{backgroundColor:'yellow', width:'0vw',height:'80vh',borderRadius:'20px'}}>
          <h1 id='chartHead'>{names}</h1>
          <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="red"
            label
          />
          <Tooltip />
        </PieChart>
                </div>
            </div>
        </div>
        


    )
}
 
export default Main;