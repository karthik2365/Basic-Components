import React from "react";

const name = ()=>{
    const[name,setName]=useState("Jhon dee");
    const[age,setAge]=useState(25);

    return(
        <div>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <button onClick={()=>setName("John dee")}>Change name</button>
            <button onClick={()=>setAge(age+1)}>Increase the age</button>
        </div>
    )
}