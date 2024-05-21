import axios from "axios";
import { React,useEffect,useState } from "react";

function App() {
  
const [data,setData]=useState([]);

const fetchData=async()=>{

    try{

       const response=await axios.get('https://opentdb.com/api.php?amount=30&category=18&difficulty=medium&type=multiple')
       setData(response.data.results);

    }
    catch(error){
      console.error(error.message);
    }


}
console.log(data);
useEffect(()=>{
  fetchData();
});
  return (
    <div className="App">    
    <h1>Fetching Api data</h1> 
    </div>
  );
}

export default App;
