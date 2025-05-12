// app/patients/page.jsx
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function PatientListPage() {
  const [patients, setPatients] = useState([]);
  const [filterGender, setFilterGender] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      const { data, error } = await supabase.from('basic_information').select('*');
      if (error) {
        console.error('Error fetching patients:', error);
      } else {
        setPatients(data);
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = filterGender
    ? patients.filter((p) => p.gender === filterGender)
    : patients;

  return (
    <main>
      <h2 className="text-2xl font-semibold mb-4">Patient List</h2>
      <div className="mb-4">
        <label className="mr-2">Filter by Gender:</label>
        <select
          className="border px-2 py-1"
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Patient ID</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Income</th>
              <th className="px-4 py-2 border">Occupation</th>
              <th className="px-4 py-2 border">Diet</th>
              <th className="px-4 py-2 border">Condition</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="px-4 py-2 border text-blue-500">
                  <Link href={`/patients/${p.patient_id}`}>
                    {p.patient_id}
                  </Link>
                </td>
                <td className="px-4 py-2 border">{p.gender}</td>
                <td className="px-4 py-2 border">{p.income}</td>
                <td className="px-4 py-2 border">{p.occupation}</td>
                <td className="px-4 py-2 border">{p.diet}</td>
                <td className="px-4 py-2 border">{p.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
