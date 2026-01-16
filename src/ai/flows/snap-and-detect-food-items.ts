'use server';
/**
 * @fileOverview An AI agent that detects food items in a photo and estimates their calorie count.
 *
 * - snapAndDetectFoodItems - A function that handles the food detection and calorie estimation process.
 * - SnapAndDetectFoodItemsInput - The input type for the snapAndDetectFoodItems function.
 * - SnapAndDetectFoodItemsOutput - The return type for the snapAndDetectFoodItems function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SnapAndDetectFoodItemsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a meal, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SnapAndDetectFoodItemsInput = z.infer<typeof SnapAndDetectFoodItemsInputSchema>;

const SnapAndDetectFoodItemsOutputSchema = z.object({
  foodItems: z.array(
    z.object({
      name: z.string().describe('The name of the food item.'),
      estimatedCalories: z.number().describe('The estimated calorie count for the food item.'),
    })
  ).describe('A list of food items detected in the photo and their estimated calorie counts.'),
});
export type SnapAndDetectFoodItemsOutput = z.infer<typeof SnapAndDetectFoodItemsOutputSchema>;

export async function snapAndDetectFoodItems(input: SnapAndDetectFoodItemsInput): Promise<SnapAndDetectFoodItemsOutput> {
  return snapAndDetectFoodItemsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'snapAndDetectFoodItemsPrompt',
  input: {schema: SnapAndDetectFoodItemsInputSchema},
  output: {schema: SnapAndDetectFoodItemsOutputSchema},
  prompt: `You are an AI food detection and calorie estimation expert.

  Analyze the photo of the meal and identify the food items present. Estimate the calorie count for each food item.

  Return the food items and their estimated calorie counts in JSON format.

  Photo: {{media url=photoDataUri}}`,
});

const snapAndDetectFoodItemsFlow = ai.defineFlow(
  {
    name: 'snapAndDetectFoodItemsFlow',
    inputSchema: SnapAndDetectFoodItemsInputSchema,
    outputSchema: SnapAndDetectFoodItemsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
