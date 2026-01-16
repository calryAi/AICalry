'use server';

/**
 * @fileOverview This file defines a Genkit flow for estimating the calorie count and nutritional information of food items from an image.
 *
 * - estimateCalorieCount - An exported function that takes an image data URI and returns the estimated calorie count and nutritional information.
 * - EstimateCalorieCountInput - The input type for the estimateCalorieCount function.
 * - EstimateCalorieCountOutput - The output type for the estimateCalorieCount function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateCalorieCountInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a meal, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type EstimateCalorieCountInput = z.infer<typeof EstimateCalorieCountInputSchema>;

const EstimateCalorieCountOutputSchema = z.object({
  calorieEstimate: z.number().describe('The estimated calorie count of the meal.'),
  nutritionalInformation: z
    .string()
    .describe('Detailed nutritional information for the meal, including macronutrients and micronutrients.'),
});
export type EstimateCalorieCountOutput = z.infer<typeof EstimateCalorieCountOutputSchema>;

export async function estimateCalorieCount(
  input: EstimateCalorieCountInput
): Promise<EstimateCalorieCountOutput> {
  return estimateCalorieCountFlow(input);
}

const estimateCalorieCountPrompt = ai.definePrompt({
  name: 'estimateCalorieCountPrompt',
  input: {schema: EstimateCalorieCountInputSchema},
  output: {schema: EstimateCalorieCountOutputSchema},
  prompt: `You are an AI food expert that is able to detect the food items present in a meal and provide an
accurate estimation of the calorie count and detailed nutritional information.

Analyze the image of the meal and provide the estimated calorie count and detailed nutritional information.

Image: {{media url=photoDataUri}}

Respond in a format parseable by Zod:
{{outputFormat schema=EstimateCalorieCountOutputSchema}}`,
});

const estimateCalorieCountFlow = ai.defineFlow(
  {
    name: 'estimateCalorieCountFlow',
    inputSchema: EstimateCalorieCountInputSchema,
    outputSchema: EstimateCalorieCountOutputSchema,
  },
  async input => {
    const {output} = await estimateCalorieCountPrompt(input);
    return output!;
  }
);
