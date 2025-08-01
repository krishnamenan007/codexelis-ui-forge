import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration using environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Method 1: Using EmailJS (recommended for production)
      if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && EMAILJS_SERVICE_ID !== '') {
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Codexelis Team'
          },
          EMAILJS_PUBLIC_KEY
        );

        if (result.status === 200) {
          toast.success('Message sent successfully! We\'ll get back to you soon.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        // Method 2: Fallback to console log (for development)
        console.log('Email would be sent with data:', formData);
        toast.success('Message sent successfully! (Development mode)');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight font-title">CONTACT US</h2>
          {/* <h3 className="text-2xl lg:text-3xl mb-4">Contact Us</h3> */}
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Build Something Amazing Together</h3>
            <p className="text-primary-foreground/80">
              Whether you need a complete digital transformation or specific IT solutions, our team is ready to help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Jaffna, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>codexelis@gmail.com</span>
              </div>
        
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-background/10 border rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? 'border-red-400 focus:ring-red-400' : 'border-primary/20'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-background/10 border rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? 'border-red-400 focus:ring-red-400' : 'border-primary/20'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject <span className="text-red-400">*</span>
              </label>
              <input 
                type="text" 
                id="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-background/10 border rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.subject ? 'border-red-400 focus:ring-red-400' : 'border-primary/20'
                }`}
                placeholder="How can we help?"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea 
                id="message" 
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-background/10 border rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.message ? 'border-red-400 focus:ring-red-400' : 'border-primary/20'
                }`}
                placeholder="Tell us about your project..."
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </p>
              )}
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-[#000d4a] hover:bg-[#000d4a]/80 hover:text-white px-8 py-4 text-lg shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 