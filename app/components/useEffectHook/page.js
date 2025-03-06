// "use client"
// import React, { useEffect, useState } from "react";

// const Counter=()=>{
//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log(`count updated: ${count}`);
//     });

//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//         </div>
//     )
// }

// export default Counter;

// "use client"
// import React, { useEffect, useState } from "react";

// const Counter=()=>{
//     const [name,setName]=useState("karthik");
//     useEffect(()=>{
//         console.log(`the changed name is:${name}`);
//     },[name]);
//     return(
//         <div>
//             <h2>{name}</h2>
//             <button onClick={()=>setName("simran")}>Change name</button>
//         </div>
//     )
// }
// export default Counter;


"use client"
import React, { useEffect, useState } from "react";

const interval=()=>{
    const [seconds,setSeconds]= useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setSeconds((prev)=>prev+3);
        },1000);

        return ()=>{
            clearInterval(interval);
        };
    },[]);
    return <h2>
        timer:{seconds}
    </h2>
}

export default interval;