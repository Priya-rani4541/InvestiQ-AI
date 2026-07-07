import "./Dashboard.css";

import SummaryCard from "./SummaryCard";
import DecisionCard from "./DecisionCard";
import ProgressCard from "./ProgressCard";

const Dashboard = () => {
  return (
    <main className="dashboard">

      <section className="dashboard-header">

        <div>

          <h1>Investment Analysis Dashboard</h1>

          <p>
            Enterprise AI Multi-Agent Investment Research Platform
          </p>

        </div>

      </section>

      <section className="dashboard-grid">

        <SummaryCard />

        <DecisionCard />

      </section>

      <section className="dashboard-progress">

        <ProgressCard />

      </section>

    </main>
  );
};

export default Dashboard;