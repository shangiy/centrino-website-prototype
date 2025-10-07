'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting the most relevant service
 * offered by Centrino Technologies based on a user's prompt describing their needs.
 *
 * - suggestServiceFromPrompt - A function that takes a user's prompt and returns a suggested service.
 * - ServiceSuggestionInput - The input type for the suggestServiceFromPrompt function.
 * - ServiceSuggestionOutput - The return type for the suggestServiceFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceSuggestionInputSchema = z.object({
  prompt: z
    .string()
    .describe('A description of the user needs to find a matching service.'),
});
export type ServiceSuggestionInput = z.infer<typeof ServiceSuggestionInputSchema>;

const ServiceSuggestionOutputSchema = z.object({
  suggestedService: z
    .string()
    .describe('The name of the most relevant service based on the prompt.'),
  reason: z
    .string()
    .describe('The reasoning behind the service suggestion.'),
});
export type ServiceSuggestionOutput = z.infer<typeof ServiceSuggestionOutputSchema>;

export async function suggestServiceFromPrompt(
  input: ServiceSuggestionInput
): Promise<ServiceSuggestionOutput> {
  return suggestServiceFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceSuggestionPrompt',
  input: {schema: ServiceSuggestionInputSchema},
  output: {schema: ServiceSuggestionOutputSchema},
  prompt: `You are an expert at matching customer needs with the services offered by Centrino Technologies.

  Given the following description of customer needs, identify the most relevant service offered by Centrino Technologies.

  Customer Needs: {{{prompt}}}

  Respond with the suggestedService and reason.

  The output must be in JSON format. Do not include any additional text outside of the JSON.`,
});

const suggestServiceFromPromptFlow = ai.defineFlow(
  {
    name: 'suggestServiceFromPromptFlow',
    inputSchema: ServiceSuggestionInputSchema,
    outputSchema: ServiceSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
