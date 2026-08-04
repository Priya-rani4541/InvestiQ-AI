import { createContext, useState } from "react";

import { analyzeCompany } from "../services/company.service";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {

    const [company, setCompany] = useState("");

    const [analysis, setAnalysis] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const analyze = async (companyName) => {

        try {

            setLoading(true);

            setError(null);

            const response = await analyzeCompany(companyName);

            setCompany(companyName);

            // response = { success, message, data }
            setAnalysis(response.data);

            return response.data;

        }

        catch (err) {

            const message =
                err.response?.data?.error?.message ||
                err.response?.data?.message ||
                err.message ||
                "Something went wrong.";

            setError(message);

            throw err;

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <CompanyContext.Provider

            value={{

                company,

                analysis,

                loading,

                error,

                analyze,

            }}

        >

            {children}

        </CompanyContext.Provider>

    );

};