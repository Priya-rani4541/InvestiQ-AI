import { Annotation } from "@langchain/langgraph";

export const graphState = Annotation.Root({
  company: Annotation(),

  research: Annotation(),

  financial: Annotation(),

  sentiment: Annotation(),

  decision: Annotation(),
});