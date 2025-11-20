import { useState, useEffect } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const dataResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setStudents(dataResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {students.map((s) => (
        <li key={s.id}>{s.name}</li>
      ))}
    </ul>
  );
}

export default StudentList;
