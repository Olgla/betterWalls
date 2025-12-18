import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { validateEmail } from "../shared/utils";

const ContactsSection = styled.section`
  padding: 3rem 2rem;
  background: #faf6f2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-burgundy);
  margin: 0;
  font-weight: bold;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ContactInfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

const ContactDetails = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  text-align: center;
  max-width: 600px;

  h4 {
    color: var(--color-burgundy);
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    color: #555;
  }
`;

const FormContainer = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
`;

const ToggleButton = styled.button`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  width: 100%;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 30, 63, 0.25);
  }
`;

const ContactForm = styled.form`
  display: ${(props) => (props.$isVisible ? "block" : "none")};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-burgundy);
  }

  &.error {
    border-color: var(--color-burgundy);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-burgundy);
  }

  &.error {
    border-color: var(--color-burgundy);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 30, 63, 0.25);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-burgundy);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: #16a085;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background: #d1f2eb;
  border-radius: 5px;
  text-align: center;
`;

const Contacts = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("contactDraft");
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  // Save draft when formData changes
  useEffect(() => {
    try {
      localStorage.setItem("contactDraft", JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
          newErrors.name = "Name is required";
        } else if (formData.name.length > 100) {
          newErrors.name = "Name must be less than 100 characters";
        }

        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Email is invalid";
        } else if (formData.email.length > 255) {
          newErrors.email = "Email must be less than 255 characters";
        }

        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
          newErrors.phone = "Phone number contains invalid characters";
        } else if (formData.phone.length > 20) {
          newErrors.phone = "Phone number must be less than 20 characters";
        }

        if (!formData.message.trim()) {
          newErrors.message = "Message is required";
        } else if (formData.message.length > 1000) {
          newErrors.message = "Message must be less than 1000 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      if (!validateForm()) {
        return;
      }

      // Rate limiting: max 3 submissions per minute
      const now = Date.now();
      const timeSinceLastSubmit = now - lastSubmitTime;

      if (submitAttempts >= 3 && timeSinceLastSubmit < 60000) {
        alert(
          "Too many submission attempts. Please wait a minute before trying again."
        );
        return;
      }

      // Reset attempts if more than a minute has passed
      if (timeSinceLastSubmit > 60000) {
        setSubmitAttempts(0);
      }

      setIsSubmitting(true);
      setSubmitAttempts((prev) => prev + 1);
      setLastSubmitTime(now);

      try {
        // Airtable API integration with security measures
        const sanitizeInput = (input) => {
          return input.trim().replace(/[<>]/g, ""); // Basic XSS prevention
        };

        const airtableData = {
          fields: {
            Email: sanitizeInput(formData.email),
            Name: sanitizeInput(formData.name),
            Phone: sanitizeInput(formData.phone),
            Message: sanitizeInput(formData.message),
            Date: new Date().toISOString(),
            IP_Address: "Client-side submission", // Note: Real IP would come from server
            User_Agent: navigator.userAgent.substring(0, 255), // Truncated for security
          },
        };

        // Validate environment variables
        const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
        const pat = import.meta.env.VITE_PAT;
        const tableName = import.meta.env.VITE_TABLE_NAME || "Contacts";

        if (!baseId || !pat) {
          throw new Error(
            "Airtable configuration is missing. Please check your environment variables."
          );
        }

        // Make actual Airtable API call with security headers
        const url = `https://api.airtable.com/v0/${
          import.meta.env.VITE_AIRTABLE_BASE_ID
        }/${import.meta.env.VITE_TABLE_NAME}`;
        const token = `Bearer ${import.meta.env.VITE_PAT}`;
        console.log("Attempting to submit to Airtable...");
        console.log("URL:", url);

        const options = {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest", // CSRF protection
          },
          body: JSON.stringify(airtableData),
        };

        const response = await fetch(url, options);

        console.log("Airtable response status:", response.status);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("Airtable API error:", errorData);

          // Provide more specific error messages
          let errorMessage = "Unknown error";
          if (response.status === 401) {
            errorMessage =
              "Invalid Airtable credentials. Please check your Personal Access Token.";
          } else if (response.status === 403) {
            errorMessage =
              "Access denied. Please check your Base ID and ensure your Personal Access Token has the correct permissions (data.records:write scope).";
          } else if (response.status === 404) {
            errorMessage = `Airtable base or table not found. Please check your Base ID and ensure the '${tableName}' table exists.`;
          } else if (response.status === 422) {
            errorMessage =
              "Invalid data format. Please check your form fields.";
          } else if (response.status === 429) {
            errorMessage = "Rate limit exceeded. Please try again later.";
          } else {
            errorMessage =
              errorData.error?.message || `HTTP ${response.status}`;
          }

          throw new Error(`Airtable API error: ${errorMessage}`);
        }

        const result = await response.json();
        console.log("Airtable submission successful:", result);

        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsFormVisible(false);

        // clear draft
        try {
          localStorage.removeItem("contactDraft");
        } catch {
          // ignore
        }

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting your message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, lastSubmitTime, submitAttempts]
  );

  return (
    <ContactsSection id="contacts">
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactContent>
          <ContactInfoSection>
            <ContactInfo>
              <h3>Get In Touch</h3>
              <p>
                Ready to transform your space? We'd love to hear from you!
                Whether you need wall repairs, painting services, or have
                questions about our work, we're here to help.
              </p>
              <p>
                Contact us today for a free consultation and estimate. We'll
                work with you to bring your vision to life with quality
                craftsmanship and exceptional service.
              </p>
            </ContactInfo>

            <ContactDetails>
              <h4>Contact Information</h4>
              <p>
                <strong>Phone:</strong> (878) 787-1033
              </p>
              <p>
                <strong>Email:</strong> betterwalls@gmail.com
              </p>
              <p>
                <strong>Service Area:</strong> Pittsbutgh and surrounding areas
              </p>
              <p>
                <strong>Hours:</strong> Monday - Sunday, 9AM - 6PM
              </p>
            </ContactDetails>
          </ContactInfoSection>

          <FormSection>
            <FormContainer>
              <ToggleButton onClick={() => setIsFormVisible(!isFormVisible)}>
                {isFormVisible ? "Hide Contact Form" : "Request Call Back"}
              </ToggleButton>

              <ContactForm $isVisible={isFormVisible} onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? "error" : ""}
                    placeholder="Your full name"
                    maxLength="100"
                    autoComplete="name"
                    required
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "error" : ""}
                    placeholder="your.email@example.com"
                    maxLength="255"
                    autoComplete="email"
                    required
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? "error" : ""}
                    placeholder="(555) 123-4567"
                    maxLength="20"
                    autoComplete="tel"
                    required
                  />
                  {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? "error" : ""}
                    placeholder="Tell us about your project or any questions you have..."
                    maxLength="1000"
                    required
                  />
                  {errors.message && (
                    <ErrorMessage>{errors.message}</ErrorMessage>
                  )}
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </SubmitButton>
              </ContactForm>

              {submitSuccess && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}
            </FormContainer>
          </FormSection>
        </ContactContent>
      </Container>
    </ContactsSection>
  );
};

export default Contacts;
