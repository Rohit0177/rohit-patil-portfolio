"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "Portfolio enquiry").trim();
    const message = String(data.get("message") || "").trim();
    const body = "Hi Rohit,\n\n" + message + "\n\nFrom " + name + " (" + email + ")";
    const mailto = "mailto:rohitp2188@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    setDraft(mailto);
    setReady(true);
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Jane Smith" required minLength={2} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="jane@example.com" required /></label></div>
    <label>What’s this about?<input name="subject" placeholder="A project, opportunity, or just hello" required minLength={3} /></label>
    <label>Your message<textarea name="message" rows={5} placeholder="Tell me a little about what you have in mind…" required minLength={10} /></label>
    <button className="button button-primary" type="submit">Prepare your message <span aria-hidden="true">↗</span></button>
    {ready && <p className="form-success" role="status">Your message is ready to send. <a href={draft}>Open your email app <span aria-hidden="true">↗</span></a></p>}
    <p className="form-note">This form opens your email app with the details filled in. Your information stays with you.</p>
  </form>;
}