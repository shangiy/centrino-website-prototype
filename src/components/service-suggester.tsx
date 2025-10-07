'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { suggestServiceFromPrompt } from '@/ai/flows/service-suggestion-from-prompt';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  prompt: z
    .string()
    .min(20, {
      message: 'Please describe your needs in at least 20 characters.',
    })
    .max(500, {
      message: 'Prompt must not be longer than 500 characters.',
    }),
});

type ServiceSuggestion = {
  suggestedService: string;
  reason: string;
};

export function ServiceSuggester() {
  const [suggestion, setSuggestion] = useState<ServiceSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSuggestion(null);
    try {
      const result = await suggestServiceFromPrompt({ prompt: data.prompt });
      setSuggestion(result);
    } catch (error) {
      console.error('Error fetching service suggestion:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description:
          'Failed to get a service suggestion. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-3xl mx-auto border-2 border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Sparkles className="w-6 h-6 text-primary" />
          Need help? Let our AI guide you.
        </CardTitle>
        <CardDescription>
          Describe your project or business challenge, and our AI will suggest
          the best Centrino service to help you succeed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your business need</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'I want to build a mobile app for my e-commerce store to increase customer engagement and sales.'"
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Suggestion
            </Button>
          </form>
        </Form>
      </CardContent>
      {(isLoading || suggestion) && (
        <CardFooter>
          {isLoading ? (
            <div className="w-full space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : suggestion ? (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 w-full animate-in fade-in-50">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Our Recommendation
              </h3>
              <p className="text-xl font-headline text-primary mt-2">
                {suggestion.suggestedService}
              </p>
              <p className="mt-4 text-muted-foreground">{suggestion.reason}</p>
            </div>
          ) : null}
        </CardFooter>
      )}
    </Card>
  );
}
