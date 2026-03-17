import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { fadeInUp } from '@/design-system/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/config/services';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please describe your project (at least 10 characters)'),
  contactMethod: z.enum(['phone', 'email', 'either']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputStyles =
  'w-full px-4 py-3 rounded-lg bg-white border border-stone-light/50 font-body text-darkwood placeholder:text-stone-light focus:outline-none focus:ring-2 focus:ring-cedar/30 focus:border-cedar transition-colors';
const labelStyles = 'block font-body text-sm font-medium text-darkwood mb-1.5';
const errorStyles = 'font-body text-xs text-red-600 mt-1';

export function ContactForm() {
  const { ref, animate } = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { contactMethod: 'either' },
  });

  async function onSubmit(data: ContactFormData): Promise<void> {
    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
        <h3 className="font-display text-3xl tracking-wider text-darkwood uppercase">
          Thank You!
        </h3>
        <p className="font-body text-stone mt-2">
          We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={animate} variants={fadeInUp}>
      {/* Netlify hidden form for detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="service">
          <option value=""></option>
        </select>
        <textarea name="message"></textarea>
        <input type="text" name="contactMethod" />
      </form>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelStyles}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Smith"
              className={cn(inputStyles, errors.name && 'border-red-400')}
              {...register('name')}
            />
            {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className={cn(inputStyles, errors.email && 'border-red-400')}
              {...register('email')}
            />
            {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(832) 555-1234"
              className={cn(inputStyles, errors.phone && 'border-red-400')}
              {...register('phone')}
            />
            {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="service" className={labelStyles}>
              Service Interest
            </label>
            <select
              id="service"
              className={cn(
                inputStyles,
                errors.service && 'border-red-400',
                'appearance-none'
              )}
              {...register('service')}
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s.id} value={s.shortTitle}>
                  {s.shortTitle}
                </option>
              ))}
              <option value="Multiple Services">Multiple Services</option>
              <option value="Not Sure">Not Sure Yet</option>
            </select>
            {errors.service && <p className={errorStyles}>{errors.service.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelStyles}>
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Describe your outdoor living project..."
            className={cn(inputStyles, errors.message && 'border-red-400', 'resize-none')}
            {...register('message')}
          />
          {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
        </div>

        <div>
          <p className={labelStyles}>Preferred Contact Method</p>
          <div className="flex gap-6">
            {(['phone', 'email', 'either'] as const).map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value={method}
                  {...register('contactMethod')}
                  className="accent-cedar"
                />
                <span className="font-body text-sm text-darkwood capitalize">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full gap-2"
          disabled={isSubmitting}
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
}
