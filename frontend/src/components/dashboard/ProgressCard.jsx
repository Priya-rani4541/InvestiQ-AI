import "./ProgressCard.css";

const ProgressCard = () => {

    const steps = [

        "Research Agent",

        "Financial Agent",

        "Sentiment Agent",

        "Decision Agent"

    ];

    return (

        <div className="progress-card">

            <h2>

                AI Analysis Progress

            </h2>

            {

                steps.map((step,index)=>(

                    <div

                        className="progress-item"

                        key={index}

                    >

                        <span>

                            ✅

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