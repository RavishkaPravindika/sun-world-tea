'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name (at least 2 characters).'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Please enter a subject (at least 3 characters).'),
  message: z.string().min(10, 'Please enter your message (at least 10 characters).'),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  'General Enquiry',
  'Tea Information',
  'Opening Hours',
  'Directions',
  'Wholesale / Bulk Order Enquiry',
  'Feedback',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 px-8 text-center rounded-sm"
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border-gold)',
          backdropFilter: 'blur(8px)',
          minHeight: '400px',
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'rgba(74,124,40,0.1)', color: 'var(--color-brand-secondary)' }}
        >
          <CheckCircle size={36} />
        </div>
        <h3 className="font-serif text-2xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Message Received
        </h3>
        <p className="text-base leading-relaxed max-w-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
          Thank you for getting in touch with Sun World Tea. We will respond to your message as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: 'var(--color-brand-secondary)' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Full Name <span aria-hidden="true" style={{ color: 'var(--color-brand-secondary)' }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={`form-input ${errors.name ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs" role="alert" style={{ color: '#c0392b' }}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Email Address <span aria-hidden="true" style={{ color: 'var(--color-brand-secondary)' }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className={`form-input ${errors.email ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs" role="alert" style={{ color: '#c0392b' }}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Phone Number <span className="text-xs font-normal" style={{ color: 'var(--color-text-muted)' }}>(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+94 (0) 00 000 0000"
            className="form-input"
            {...register('phone')}
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Subject <span aria-hidden="true" style={{ color: 'var(--color-brand-secondary)' }}>*</span>
          </label>
          <select
            id="contact-subject"
            className={`form-input ${errors.subject ? 'error' : ''}`}
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            {...register('subject')}
            defaultValue=""
          >
            <option value="" disabled>Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-xs" role="alert" style={{ color: '#c0392b' }}>
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium mb-1.5"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Message <span aria-hidden="true" style={{ color: 'var(--color-brand-secondary)' }}>*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="How can we help you?"
          className={`form-input resize-none ${errors.message ? 'error' : ''}`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs" role="alert" style={{ color: '#c0392b' }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: 'var(--color-brand-primary)',
          color: '#FAF7F2',
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-secondary)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-primary)';
          (e.currentTarget as HTMLElement).style.transform = '';
          (e.currentTarget as HTMLElement).style.boxShadow = '';
        }}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
        Fields marked with * are required. We will respond to your enquiry as soon as possible.
      </p>
    </form>
  );
}
