import React from 'react';
import StudentList from '../components/StudentList';
import FacultyList from '../components/FacultyList';
import CourseList from '../components/CourseList';


const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <StudentList />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <FacultyList />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <CourseList />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
