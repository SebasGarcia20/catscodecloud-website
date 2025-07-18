'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Option 1: EmailJS (easiest)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="px-6 py-20 max-w-xl mx-auto text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to take your business to the cloud?</h2>
      <p className="text-gray-300">Let's build something amazing—together.</p>
      
      {submitStatus === 'success' && (
        <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-md">
          Message sent! We will contact you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 rounded-md">
          Error sending message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-teal-500 focus:border-teal-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-teal-500 focus:border-teal-400 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-teal-500 focus:border-teal-400 focus:outline-none"
        ></textarea>
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="bg-teal-400 text-black w-full py-2 rounded-xl hover:bg-teal-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Send Message'}
        </Button>
      </form>
    </section>
  );
}
