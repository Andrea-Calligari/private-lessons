import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TeacherList from './components/TeacherList';
import TeacherDetails from './components/TeacherDetails';

function App() {
  const [teacherList, setTeacherList] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
     try {
      const response = await axios.get("/teachers.json");
      console.log('Response',response);
      const data = response.data;
      console.log('Data', data);

      setTeacherList(data);
     } catch (error) {
      console.log("Data-Fetch Error", error);
     }
    }
    fetchData();
  },[]);
  return (
    <div className="App">
      <TeacherList teachers={teacherList}/>
      <TeacherDetails teachers={teacherList}/>
    </div>
  );
}

export default App;
