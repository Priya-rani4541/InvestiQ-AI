import "./SummaryCard.css";

import useCompany from "../../hooks/useCompany";

const SummaryCard = () => {

    const { analysis, loading } = useCompany();
    console.log("Analysis:", analysis);

    if (loading) {
        return (
            <div className="summary-card">
                <h2>Company Summary</h2>
                <p>Loading...</p>
            </div>
        );
    }

    return (

        <div className="summary-card">

            <h2>Company Summary</h2>

            <div className="summary-content">

                <div className="summary-item">
                    <span>Company</span>
                    <strong>{analysis?.company || "-"}</strong>
                </div>

                <div className="summary-item">
                    <span>Sector</span>
                    <strong>{analysis?.sector || "-"}</strong>
                </div>

                <div className="summary-item">
                    <span>Market Cap</span>
                    <strong>{analysis?.marketCap || "-"}</strong>
                </div>

                <div className="summary-item">
                    <span>Current Price</span>
                    <strong>{analysis?.currentPrice || "-"}</strong>
                </div>

            </div>

        </div>

    );

};

export default SummaryCard;