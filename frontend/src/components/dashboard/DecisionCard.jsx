import "./DecisionCard.css";

const DecisionCard = () => {

    return (

        <div className="decision-card">

            <h2>AI Decision</h2>

            <div className="decision-badge">

                INVEST

            </div>

            <div className="decision-info">

                <p>

                    Confidence

                </p>

                <strong>

                    91%

                </strong>

            </div>

            <div className="decision-info">

                <p>

                    Risk Level

                </p>

                <strong>

                    Medium

                </strong>

            </div>

        </div>

    );

};

export default DecisionCard;