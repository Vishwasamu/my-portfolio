import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const serviceId = 'service_203k8kk';
    const templateId = 'template_9ekkkus';
    const publicKey = 'lpPJ72ssd3a57S3_E';

    // FormData ekata aluthin recipient email eka add karaganna puluwan (Optional)
    // Nathnam EmailJS dashboard eke template setting wala To Email eka vishwasamuditha8@gmail.com widiyata denna.

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus({
          type: 'success',
          message: '✅ Your message has been sent successfully! I will get back to you soon.'
        });
        form.current.reset();
        setIsSubmitting(false);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setSubmitStatus({
          type: 'error',
          message: '❌ Failed to send message. Please try again or contact me directly via email.'
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Contact Me</h2>
      
      <div className="glass-card w-full max-w-md p-8 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg">
        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          {/* Hidden input to ensure email goes to your specific address if template supports it */}
          <input type="hidden" name="to_email" value="vishwasamuditha8@gmail.com" />

          <input 
            type="text" 
            name="from_name"
            placeholder="Your Name" 
            required
            className="w-full p-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
          />
          <input 
            type="email" 
            name="from_email"
            placeholder="Your Email" 
            required
            className="w-full p-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
          />
          <input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            required
            className="w-full p-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="4"
            required
            className="w-full p-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-cyan-400 text-black py-3 rounded-lg font-bold hover:bg-cyan-300 transition duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block animate-spin mr-2">⟳</span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;