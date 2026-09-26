import { useState, useCallback } from "react";
import { submitContactForm } from "@/utils/contactApi";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  website: "",
};

// status: idle | loading | success | error
export function useContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const setField = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }, []);

  const validate = useCallback((v) => {
    const next = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    else if (v.name.trim().length > 120) next.name = "Name is too long.";
    if (!/^[0-9+\-\s()]{7,15}$/.test(v.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
      next.email = "Enter a valid email address.";
    else if (v.email.trim().length > 180) next.email = "Email address is too long.";
    if (!v.service) next.service = "Select what you need help with.";
    if (v.message.trim().length < 5)
      next.message = "Tell us a little about your requirement.";
    else if (v.message.trim().length > 3000)
      next.message = "Please keep your message under 3,000 characters.";
    return next;
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      if (e && e.preventDefault) e.preventDefault();
      if (status === "loading") return; // prevent duplicate submission

      const nextErrors = validate(values);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;

      setStatus("loading");
      try {
        await submitContactForm(values);
        setStatus("success");
        setValues(EMPTY);
      } catch (err) {
        setStatus("error");
      }
    },
    [status, values, validate]
  );

  const reset = useCallback(() => {
    setValues(EMPTY);
    setErrors({});
    setStatus("idle");
  }, []);

  return { values, errors, status, setField, handleSubmit, reset };
}
