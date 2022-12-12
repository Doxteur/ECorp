import React from "react";
import axios from "axios";
function Logs({ token }) {
  const [logs, setLogs] = React.useState([]);

  React.useEffect(() => {
    // fetch logs with token Bearer
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/logs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [logs, token]);

  // show logs in array
  const showLogs = () => {
    console.log(logs);
    if (logs.length > 0) {
      return logs.map((log) => {
        return (
          <tr key={log.id}>
            <td>{log.id_user}</td>
            <td>{log.action}</td>
            <td>{log.date}</td>
          </tr>
        );
      });
    } else {
      return <h3>No logs</h3>;
    }
  };

  return (
    // fetch logs with token Bearer

    <div>
      {/* Show logs in an array */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Action</th>
              <th>Date</th>

            </tr>
          </thead>
          <tbody>{showLogs()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Logs;
