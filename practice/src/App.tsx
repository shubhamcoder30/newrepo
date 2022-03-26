import {useEffect, useState} from 'react'

function App() {
let [count,setCount] = useState<number>(0)

useEffect(() => {
  // Update the document title using the browser API
  console.log( `You clicked ${count} times`);
  return ()=>console.log('hello')
},[]);


  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)} >Click me to update Count</button>
    </>
  );
}

export default App;
