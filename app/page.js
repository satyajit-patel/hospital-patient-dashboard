'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function DashboardPage() {
  const [total, setTotal] = useState(0);
  const [avgAge, setAvgAge] = useState(0);
  const [genderCount, setGenderCount] = useState({ Male: 0, Female: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("basic_information")
        .select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else if (data) {
        setTotal(data.length);
        let sumAge = 0;
        let male = 0;
        let female = 0;
        data.forEach((p) => {
          sumAge += p.ageatfirstpregnancy || 0;
          if (p.gender === 'Male') male++;
          if (p.gender === 'Female') female++;
        });
        setAvgAge((data.length > 0 ? (sumAge / data.length).toFixed(1) : 0));
        setGenderCount({ Male: male, Female: female });
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-xl font-semibold">Total Patients</h3>
          <p className="mt-2 text-3xl">{total}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-xl font-semibold">Avg. Age (First Preg.)</h3>
          <p className="mt-2 text-3xl">{avgAge}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-xl font-semibold">Gender Ratio</h3>
          <p className="mt-2">Male: {genderCount.Male}</p>
          <p>Female: {genderCount.Female}</p>
        </div>
      </div>
    </main>
  );
}
