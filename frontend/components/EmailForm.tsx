'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitEmail } from '@/lib/api';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  feedback: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function EmailForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError('');
    
    try {
      await submitEmail(data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      if (err.response?.data?.detail === 'Email already registered') {
        setError('This email is already registered');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register('feedback')}
            placeholder="Leave your feedback or questions (optional)"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Submitting...' : 'Get Notified'}
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-center">
            ✅ Successfully registered! We'll notify you soon.
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-center">{error}</p>
        </div>
      )}
    </div>
  );
}