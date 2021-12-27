import './App.css';
import Formcomp from './components/Formcomp';
import React, { useState } from 'react'
import Table from './components/Table';

function App() {
  let [data, setdata] = useState({name: '',
  dateOfBirth: '',
  bloodGroup: '',
  address: '',
  age:'',
  });
  const getData=(vals)=>{
    // console.log(vals)
    const dob = new Date(vals.dateOfBirth);
    const month_diff = Date.now() - dob.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    const age_cal = Math.abs(year - 1970);
    setdata(data={name: vals.name,
    dateOfBirth: vals.dateOfBirth,
    bloodGroup: vals.bloodGroup,
    address: vals.address,
  age:age_cal});
    console.log(data);
  }
  return (
    <div className="App">
      <Formcomp getData={getData}/>
      <Table Data={data}/>
    </div>
  );
}

export default App;
