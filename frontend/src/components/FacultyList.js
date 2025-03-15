import React from 'react';

const FacultyList = () => {
  const faculties = [
    { id: 1, name: 'Dr. Smith', department: 'Computer Science' },
    { id: 2, name: 'Prof. Johnson', department: 'Mathematics' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold">Faculty List</h3>
      <ul className="list-disc ml-5">
        {faculties.map(faculty => (
          <li key={faculty.id}>
            {faculty.name} - {faculty.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
