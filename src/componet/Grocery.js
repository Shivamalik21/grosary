import React, { useState } from 'react'


const Grocery = () => {
    const [data,setdata]=useState("")
     const [Generate,setGenerate]=useState([])
     const[checked,setchecked]=useState(false)
    
    
     function myfunction(){
       setGenerate([...Generate,{
        name:data ,
        
       }])
     
     }
     function myfunction2(name){
        const newList = Generate.filter((item,index) =>index!==name);
         
    setGenerate(newList);
     }
     
  return (
    <div id="main" >
        <h2>Grocery Bud</h2>
        <div id="inp">
        <input type='text' onChange={(e)=>setdata(e.target.value)}></input>
        <button onClick={myfunction} id="btn">Add item</button>
        </div>
       
       
        <ul style={{listStyle:"none",  }}>
            {Generate.map((e,index)=>
      <li key= {index} ><div style={{display:"flex", alignItems:"center", gap:"1vw"}}><input type="checkbox" onChange={()=>{
      setchecked((pr)=>!pr)
      }}/> <p style={{textDecoration: checked?'Line-through':'none'}}>{data} </p>
      </div>
        <button onClick={()=>{
            myfunction2(index)
        }}>remove</button>
        </li>
        )}
        </ul>
    </div>
  )
}

export default Grocery