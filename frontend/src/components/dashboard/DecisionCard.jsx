import "./DecisionCard.css";

import useCompany from "../../hooks/useCompany";

const DecisionCard = () => {

    const { analysis, loading } = useCompany();

    if (loading) {

        return (

            <div className="decision-card">

                <h2>AI Decision</h2>

                <p>Analyzing...</p>

            </div>

        );

    }

    return (

        <div className="decision-card">

            <h2>AI Decision</h2>

            <div className="decision-badge">

                {analysis?.decision || "-"}

            </div>

            <div className="decision-info">

                <p>Confidence</p>

                <strong>

                    {analysis?.confidence || "-"}

                </strong>

            </div>

            <div className="decision-info">

                <p>Risk Level</p>

                <strong>

                    {analysis?.risk || "-"}

                </strong>

            </div>

        </div>

    );

};

export default DecisionCard;