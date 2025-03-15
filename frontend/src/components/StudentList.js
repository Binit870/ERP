import React from 'react';

const StudentList = () => {
  const students = [
    { id: 1, name: 'Alice', enrollment: 'E12345' },
    { id: 2, name: 'Bob', enrollment: 'E54321' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold">Student List</h3>
      <ul className="list-disc ml-5">
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.enrollment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
