// "use client"
// import React from "react"
// import { useState } from "react";

// const counter  = ()=>{
//     const [count , setCount] = useState(0);
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//         </div>
//     )
// }
// export default counter;


"use client"
import React from "react";
import { useState } from "react";
const name = ()=>{
    const[name,setName]=useState("Jhon dee");
    const[age,setAge]=useState(25);

    return(
        <div>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <button onClick={()=>setName("Karthik")}>Change name</button>
            <button onClick={()=>setAge(age+1)}>Increase the age</button>
        </div>
    )
}
export default name;