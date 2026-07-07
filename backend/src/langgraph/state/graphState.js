import { Annotation } from "@langchain/langgraph";

export const graphState = Annotation.Root({

    /**
     * User Input
     */
    company: Annotation(),

    /**
     * RAG Context
     */
    retrievedContext: Annotation(),

    /**
     * AI Agents
     */
    research: Annotation(),

    financial: Annotation(),

    sentiment: Annotation(),

    /**
     * Final Decision
     */
    decision: Annotation(),

});