import "./Dashboard.css";

import SummaryCard from "./SummaryCard";
import DecisionCard from "./DecisionCard";
import ProgressCard from "./ProgressCard";
import BusinessCard from "./BusinessCard";

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

            {/* Summary + Decision */}

            <section className="dashboard-grid">

                <SummaryCard />

                <DecisionCard />

            </section>

            {/* Business + Progress */}

            <section className="dashboard-grid">

                <BusinessCard />

                <ProgressCard />

            </section>

        </main>
    );
};

export default Dashboard;