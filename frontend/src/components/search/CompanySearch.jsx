import "./CompanySearch.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCompany from "../../hooks/useCompany";

const CompanySearch = () => {

  const [company, setCompany] = useState("");

  const { analyze, loading } = useCompany();

  const navigate = useNavigate();

  const handleAnalyze = async () => {

    if (!company.trim()) {
      alert("Please enter company name.");
      return;
    }

    try {

      const result = await analyze(company);
      console.log("Analyze Result =>", result);

      console.log(result);

      navigate("/dashboard");

    } catch (error) {

      console.error("FULL ERROR :", error);
    
      console.error("RESPONSE :", error.response);
    
      console.error("DATA :", error.response?.data);
    
      alert(
        error.response?.data?.message ||
        error.response?.data?.error?.message ||
        error.message
      );
    
    }

  };

  return (
    <section className="search-section">

      <input
        type="text"
        placeholder="Search Company (Tesla, Apple, Nvidia...)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

    </section>
  );
};

export default CompanySearch;