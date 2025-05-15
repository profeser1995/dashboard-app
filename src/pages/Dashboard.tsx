// const Dashboard = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Dashboard</h1>
//       <p className="mt-2">Welcome to your admin panel.</p>
//     </div>U
//   );
// };

// export default Dashboard;




import UserTable from "../components/UserTable";
import SummaryCards from "../components/SummaryCards";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
        <SummaryCards />
      <UserTable />
    </div>
  );
};

export default Dashboard;

