import React, { useState } from 'react';
import './App.css';

function StudentRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <input
          type="checkbox"
          checked={props.present}
          onChange={() => props.togglePresent(props.index)}
        />
      </td>
    </tr>
  );
}

function StudentList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Present</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student, index) => (
          <StudentRow
            key={index}
            name={student.name}
            present={student.present}
            index={index}
            togglePresent={props.togglePresent}
          />
        ))}
      </tbody>
    </table>
  );
}

function ClassRoom(props) {
  return (
    <div>
      <h2>Classroom: {props.roomName}</h2>
      <StudentList
        students={props.students}
        togglePresent={props.togglePresent}
      />
    </div>
  );
}

function FacultyList(props) {
  return (
    <div>
      <h2>Faculty: {props.facultyName}</h2>
      {props.classrooms.map((classroom) => (
        <ClassRoom
          key={classroom.roomName}
          roomName={classroom.roomName}
          students={classroom.students}
          togglePresent={props.togglePresent}
        />
      ))}
    </div>
  );
}

function AttendanceSystem() {
  const [students, setStudents] = useState([
    { name: 'John Doe', present: false },
    { name: 'Jane Smith', present: true },
    { name: 'Bob Johnson', present: false }
  ]);

  const [classrooms, setClassrooms] = useState([
    { roomName: 'A101', students: students },
    { roomName: 'B201', students: [] }
  ]);

  const [facultyName, setFacultyName] = useState('Computer Science');

  const togglePresent = (index, roomName) => {
    const updatedClassrooms = [...classrooms];
    const roomIndex = updatedClassrooms.findIndex((room) => room.roomName === roomName);
    updatedClassrooms[roomIndex].students[index].present = !updatedClassrooms[roomIndex].students[index].present;
    setClassrooms(updatedClassrooms);
  }

  return (
    <div className="AttendanceSystem">
      <h1>Attendance System</h1>
      <FacultyList
        facultyName={facultyName}
        classrooms={classrooms}
        togglePresent={togglePresent}
      />
    </div>
  );
}

export default AttendanceSystem;
