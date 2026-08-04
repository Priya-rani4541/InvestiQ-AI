import api from "./api";

/**
 * Analyze Company
 */

export const analyzeCompany = async (companyName) => {

    const response = await api.post("/company/analyze", {
        company: companyName,
    });

    return response.data;
};