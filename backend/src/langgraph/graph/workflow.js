import { StateGraph, START, END } from "@langchain/langgraph";

import { graphState } from "../state/graphState.js";

import { ragNode } from "../nodes/rag.node.js";
import { researchNode } from "../nodes/research.node.js";
import { financialNode } from "../nodes/financial.node.js";
import { sentimentNode } from "../nodes/sentiment.node.js";
import { decisionNode } from "../nodes/decision.node.js";

import { GRAPH_EDGES } from "../edges/graphEdges.js";

const workflow = new StateGraph(graphState);

// ======================
// Nodes
// ======================

workflow.addNode("ragAgent", ragNode);

workflow.addNode("researchAgent", researchNode);

workflow.addNode("financialAgent", financialNode);

workflow.addNode("sentimentAgent", sentimentNode);

workflow.addNode("decisionAgent", decisionNode);

// ======================
// Start
// ======================

workflow.addEdge(START, "ragAgent");

// RAG → Research

workflow.addEdge("ragAgent", "researchAgent");

// ======================
// Remaining Graph Edges
// ======================

GRAPH_EDGES.forEach(([from, to]) => {

    workflow.addEdge(from, to);

});

// ======================
// End
// ======================

workflow.addEdge("decisionAgent", END);

export default workflow;