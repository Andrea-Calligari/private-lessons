import React from 'react'

const TeacherList = ({ teachers }) => {
    return (
        <div>
            {teachers.map((teacher, index) => {
                return( 
                <ul key={index}>
                    <li >{[teacher.name, teacher.subject]}</li>
                    
                   
                </ul>


            )})}
        </div>
    )
}

export default TeacherList
