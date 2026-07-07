import "./FeatureCards.css";

const features = [
  {
    title: "Research Agent",
    description: "Collects company information using AI and external sources.",
  },
  {
    title: "Financial Agent",
    description: "Analyzes revenue, profit, valuation and financial health.",
  },
  {
    title: "Sentiment Agent",
    description: "Evaluates market sentiment from news and public signals.",
  },
  {
    title: "Decision Agent",
    description: "Generates final INVEST or PASS recommendation with confidence.",
  },
];

const FeatureCards = () => {
  return (
    <section className="feature-section">

      <h2>AI Multi-Agent System</h2>

      <div className="feature-grid">

        {features.map((item) => (

          <div className="feature-card" key={item.title}>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeatureCards;