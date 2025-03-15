import React from 'react';

const CourseList = () => {
  const courses = [
    { id: 1, courseName: 'Algorithms', courseCode: 'CS101' },
    { id: 2, courseName: 'Calculus', courseCode: 'MATH101' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold">Course List</h3>
      <ul className="list-disc ml-5">
        {courses.map(course => (
          <li key={course.id}>
            {course.courseName} - {course.courseCode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
