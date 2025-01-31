



import Sidebar from "./Sidebar";


function Dashboard() {

  return (
    <div className="flex h-screen">
      <Sidebar  />
      <div className="flex-1 p-4 overflow-auto">
      <h1>welcome to dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;

