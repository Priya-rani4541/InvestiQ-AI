export const financialPrompt = (companyName) => `
You are a Senior Financial Analyst.

Analyze the financial performance of ${companyName}.

Return your response in the following format:

# Revenue

# Net Profit

# Operating Margin

# Debt

# Cash Flow

# EPS

# PE Ratio

# ROE

# Financial Strength

# Overall Financial Score (0-100)
`;