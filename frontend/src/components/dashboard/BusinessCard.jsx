import "./BusinessCard.css";

import useCompany from "../../hooks/useCompany";

const BusinessCard = () => {

    const { analysis, loading } = useCompany();

    if (loading) {

        return (

            <div className="business-card">

                <h2>Business Analysis</h2>

                <p>Loading...</p>

            </div>

        );

    }

    return (

        <div className="business-card">

            <h2>Business Analysis</h2>

            <div className="business-section">

                <h3>Company Summary</h3>

                <p>

                    {analysis?.summary || "No summary available."}

                </p>

            </div>

            <div className="business-section">

                <h3>Business Model</h3>

                <p>

                    {analysis?.businessModel || "No business model available."}

                </p>

            </div>

        </div>

    );

};

export default BusinessCard;