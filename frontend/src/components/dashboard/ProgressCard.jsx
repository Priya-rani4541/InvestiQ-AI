import "./ProgressCard.css";

import useCompany from "../../hooks/useCompany";

const ProgressCard = () => {

    const { loading } = useCompany();

    const steps = [

        "Research Agent",

        "Financial Agent",

        "Sentiment Agent",

        "Decision Agent",

    ];

    return (

        <div className="progress-card">

            <h2>AI Analysis Progress</h2>

            {

                steps.map((step, index) => (

                    <div

                        key={index}

                        className="progress-item"

                    >

                        <span>

                            {

                                loading

                                    ? "⏳"

                                    : "✅"

                            }

                        </span>

                        <p>

                            {step}

                        </p>

                    </div>

                ))

            }

        </div>

    );

};

export default ProgressCard;