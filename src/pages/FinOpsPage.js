import React, { useEffect, useState } from "react";

function FinOpsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://0azsdk6qbb.execute-api.ap-south-1.amazonaws.com/prod/finops")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>FinOps Monthly Cost</h2>

      {data.length === 0 ? (
        <p>No data found...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.month} — ${item.total_cost.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FinOpsPage;
