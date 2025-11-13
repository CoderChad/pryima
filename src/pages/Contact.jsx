import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from "@/api/base44Client";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: "hello@pryima.com",
        subject: `Contact Form: ${formData.name}`,
        body: `From: ${formData.name} (${formData.email})\n\n${formData.message}`,
        from_name: "Pryima Contact Form",
      });

      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040A] to-[#050814] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#FF4A00] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-gray-400 text-xl">
            Questions about Pryima? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md p-8">
            <Mail className="w-8 h-8 text-[#FF4A00] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-400 mb-4">For general inquiries and support</p>
            <a href="mailto:hello@pryima.com" className="text-[#FF4A00] hover:underline">
              hello@pryima.com
            </a>
          </div>

          <div className="rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md p-8">
            <MessageSquare className="w-8 h-8 text-[#FF4A00] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Chat with Us</h3>
            <p className="text-gray-400 mb-4">Quick questions? Message us directly</p>
            <Button
              variant="outline"
              className="border-[#FF4A00] text-[#FF4A00] hover:bg-[#FF4A00] hover:text-white"
            >
              Start Chat
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-[#FF4A00]/30 bg-gradient-to-br from-black/80 to-[#050814]/80 backdrop-blur-md p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          {sent && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <p className="text-green-400 font-medium">Message sent successfully! We'll get back to you soon.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-black/50 border-[#FF4A00]/30 text-white focus:border-[#FF4A00]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-black/50 border-[#FF4A00]/30 text-white focus:border-[#FF4A00]"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-black/50 border-[#FF4A00]/30 text-white focus:border-[#FF4A00] min-h-[150px]"
                placeholder="Tell us what's on your mind..."
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] hover:from-[#FF5A10] hover:to-[#FF7B10] text-white py-6 text-lg font-semibold shadow-lg shadow-[#FF4A00]/30"
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}