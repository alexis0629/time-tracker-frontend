import axios from "axios";
import { useEffect, useState } from "react";

const WorkingHourContainer = () => {
  const [totalHours, setTotalHours] = useState(null);

  const fetchTotalHours = async () => {
    const userId = "ricardo0629";
    try {
      const res = await axios.get(`/api/total/${userId}`);
      console.log("Fetched data:", res.data)
      setTotalHours(res.data.total_hours || 0);
    } catch (err) {
      console.error("Failed to fetch total hours:", err);
    }
  }; 

  useEffect(() => {
    fetchTotalHours();
    const interval = setInterval(fetchTotalHours, 2 * 60 * 1000); // every 30 minutes
    return () => clearInterval(interval);
  }, []);

  const initialMembers = [
    { id: 1, name: "Alice", team: "9Team", start: "09:00", end: "No" },
    { id: 2, name: "Bob", team: "9Team", start: "10:00", end: "Yes" },
    { id: 3, name: "Ricardo", team: "9Team", start: totalHours, end: "No" },
    { id: 4, name: "Charlie", team: "9Team", start: "08:30", end: "No" },
    { id: 5, name: "Charlie", team: "9Team", start: "07:30", end: "No" },
    { id: 6, name: "Charlie", team: "9Team", start: "09:00", end: "No" },
    { id: 7, name: "Charlie", team: "9Team", start: "08:00", end: "No" },
    { id: 8, name: "Charlie", team: "9Team", start: "11:15", end: "No" },
    { id: 9, name: "Charlie", team: "9Team", start: "11:10", end: "No" },
    // Add more members here...
  ];

  const [members, setMembers] = useState(initialMembers);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSortByStart = () => {
    const sorted = [...members].sort((a, b) =>
      sortAsc
        ? a.start.localeCompare(b.start)
        : b.start.localeCompare(a.start)
    );
    setMembers(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div className="overflow-x-auto pt-10">
      <table className="min-w-full table-auto border-collapse border border-gray-300 text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">No</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Team</th>
            <th
              onClick={handleSortByStart}
              className="border border-gray-300 px-4 py-2 text-left cursor-pointer hover:underline"
            >
              Time {sortAsc ? "▲" : "▼"}
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">isBot</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{member.name}</td>
              <td className="border border-gray-300 px-4 py-2">{member.team}</td>
              <td className="border border-gray-300 px-4 py-2">{member.start}</td>
              <td className="border border-gray-300 px-4 py-2">{member.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkingHourContainer;