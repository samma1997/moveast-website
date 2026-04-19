import Anthropic from "@anthropic-ai/sdk";

let client: Anthropic | null = null;

export function getAnthropicClient(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set");
  }
  if (!client) {
    client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return client;
}

/**
 * Modelli supportati per article generation, con tiering.
 * haiku = meta/title/SEO tasks ($1/M input, $5/M output)
 * sonnet = default body generation ($3/M input, $15/M output)
 * opus = premium quality ($5/M input, $25/M output)
 */
export const MODELS = {
  haiku: "claude-haiku-4-5",
  sonnet: "claude-sonnet-4-6",
  opus: "claude-opus-4-7",
} as const;

export type AiModel = keyof typeof MODELS;

export function resolveModelId(model: AiModel | string): string {
  if (model in MODELS) return MODELS[model as AiModel];
  // Pass through raw IDs (future-proof if user picks a specific version)
  return model;
}
