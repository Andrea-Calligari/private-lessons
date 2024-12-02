import React from 'react';
import { useParams } from 'react-router-dom';


const TeacherDetails = ({teachers}) => {
    const {id} = useParams();
    const teacher = teachers.filter(teacher=> teacher.id === parseInt(id));
    const {  name, subject, short_description, availability,} = teacher;

  return (
    <ul>
        <li>{name}</li>
        <li>{subject}</li>
        <li>{short_description}</li>
        <li>{availability}</li>
     
    </ul>
  )
}

export default TeacherDetails
