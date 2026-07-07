import "./CompanySearch.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CompanySearch = () => {

  const [company, setCompany] = useState("");

  const navigate = useNavigate();

  const handleAnalyze = () => {

    if (!company.trim()) {

      alert("Please enter a company name.");

      return;

    }

    navigate("/dashboard");

  };

  return (

    <section className="search-section">

      <input

        type="text"

        placeholder="Search Company (Tesla, Apple, Nvidia...)"

        value={company}

        onChange={(e) => setCompany(e.target.value)}

      />

      <button onClick={handleAnalyze}>

        Analyze

      </button>

    </section>

  );

};

export default CompanySearch;