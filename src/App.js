
import './App.css';
import Select from 'react-select'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [datas, setDatas] = useState([])
  const [userSelect, setUserSelect] = useState("")
  const [isShow, setIsShow] = useState(false)

  const allBarries = async () =>{
    const response = await axios('https://pokeapi.co/api/v2/berry')
    const result = response.data.results.map(data =>{
      return {
        label: data.name,
        value: data.name
      }
    })
    
    setDatas(result.sort(function(a, b) {return a.label.localeCompare(b.label)}))
  }

  useEffect(() => {
    allBarries()
  })

  const handleSubmit = () =>{
    setIsShow(state => !state)
  }
  const handleOnChange = (event)=>{
    setUserSelect(event.value)
  }


  return (
    <div className="App">
      <h1>{isShow ? userSelect : " "}  </h1>
      <button onClick={() => handleSubmit()} disabled={!userSelect}>{isShow ? "Hide Button" : "Show Value"}</button>
      <br />
      <br />
      <Select options={datas} onChange={(e) => handleOnChange(e)} />
    </div>
  );
}

export default App;
