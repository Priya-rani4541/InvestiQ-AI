import "./SummaryCard.css";

const SummaryCard = () => {
  return (
    <div className="summary-card">

      <h2>Company Summary</h2>

      <div className="summary-content">

        <div className="summary-item">
          <span>Company</span>
          <strong>Tesla Inc.</strong>
        </div>

        <div className="summary-item">
          <span>Sector</span>
          <strong>Automobile</strong>
        </div>

        <div className="summary-item">
          <span>Market Cap</span>
          <strong>$1.2 Trillion</strong>
        </div>

        <div className="summary-item">
          <span>Current Price</span>
          <strong>$326.21</strong>
        </div>

      </div>

    </div>
  );
};

export default SummaryCard;