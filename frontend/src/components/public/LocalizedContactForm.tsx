"use client";

import { FormEvent, useState } from "react";
import { API_BASE_URL } from "@/lib/apiBase";
import type { MarketingLocale } from "@/lib/marketingContent";

type Props = {
  locale: MarketingLocale;
  pagePath: string;
  form: {
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    objectiveLabel: string;
    messageLabel: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    objectives: string[];
  };
};

export default function LocalizedContactForm({ locale, pagePath, form }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [objective, setObjective] = useState(form.objectives[0] || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch(`${API_BASE_URL}/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          objective,
          message,
          language: locale,
          pagePath,
          source: "premium-contact-form",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setName("");
      setEmail("");
      setPhone("");
      setObjective(form.objectives[0] || "");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <label>{form.nameLabel}</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={form.placeholders.name}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group-meta form-group mb-25">
            <label>{form.emailLabel}</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={form.placeholders.email}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group-meta form-group mb-25">
            <label>{form.phoneLabel}</label>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={form.placeholders.phone}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <label>{form.objectiveLabel}</label>
            <select
              className="form-select"
              value={objective}
              onChange={(event) => setObjective(event.target.value)}
            >
              {form.objectives.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label>{form.messageLabel}</label>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={form.placeholders.message}
              required
            />
          </div>
        </div>

        {status === "success" ? (
          <div className="col-12">
            <p className="alert alert-success mb-20">{form.success}</p>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="col-12">
            <p className="alert alert-danger mb-20">{form.error}</p>
          </div>
        ) : null}

        <div className="col-12">
          <button
            type="submit"
            className="btn-nine text-uppercase rounded-3 fw-normal w-100"
            disabled={loading}
          >
            {loading ? form.sending : form.submit}
          </button>
        </div>
      </div>
    </form>
  );
}
