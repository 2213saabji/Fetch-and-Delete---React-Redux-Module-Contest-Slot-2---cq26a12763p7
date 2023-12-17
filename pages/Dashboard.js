import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";
import DataItem from "./dataItem";

function Dashboard() {
  const { data, setData, msg, setMsg, isDeleting, setIsDeleting } = useContext(AuthContext);

  const handleDelete = () => {
    if (isDeleting) {
      return;
    }

    setIsDeleting(true);
    setMsg("Data Deleted");

    setTimeout(() => {
      setIsDeleting(false);
      setMsg("");
    }, 3000);
  };

  return (
    <div id="dashboardPage">
      <div id="message">{msg}</div>

      {data.map(item => (
        <DataItem key={item.id} {...item} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Dashboard;
