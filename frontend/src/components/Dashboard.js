import React, { useEffect, useState } from "react";
import { getTopIncrease } from "../services/api";
import TopIncreaseChart from "./TopIncreaseChart";

function Dashboard() {
	  const [data, setData] = useState([]);

	  useEffect(() => {
		      async function fetchData() {
			            const res = await getTopIncrease();
			            setData(res.data);
			          }
		      fetchData();
		    }, []);

	  return (
		      <div>
		        <h2>Top Cost Increase Resources</h2>
		        <TopIncreaseChart data={data} />
		      </div>
		    );
}

export default Dashboard;
