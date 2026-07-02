export const buildPromptContext = (

    question,

    context

) => {

    return `

You are an Enterprise Investment Research AI.

Answer ONLY using the provided context.

If the answer is unavailable,
say:

"I couldn't find relevant information."

==================

QUESTION

${question}

==================

CONTEXT

${context}

==================

Answer:

`;

};