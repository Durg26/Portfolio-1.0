import { useState } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const FORMSPREE_URL = 'https://formspree.io/f/xpwzwjqg';

const CONTACT_INFO: [string, string, string | null][] = [
  ['Email', 'd.abhinav12@gmail.com', 'mailto:d.abhinav12@gmail.com'],
  ['Location', 'Halifax, Nova Scotia', null],
  ['LinkedIn', 'linkedin.com/in/abhinav-durgavarjhula', 'https://www.linkedin.com/in/abhinav-durgavarjhula/'],
  ['Photography', '@the.diarybylens', 'https://instagram.com/the.diarybylens'],
  ['The Abstract Cafe', '@the.abstract.cafe', 'https://instagram.com/the.abstract.cafe'],
  ['Latispanica', '@latispanica', 'https://instagram.com/latispanica'],
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact(): JSX.Element {
  const magnetic = useMagnetic<HTMLButtonElement>(12);

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = (field: keyof FormState, value: string): string => {
    if (!value.trim()) return 'This field is required';
    if (field === 'email' && !validateEmail(value)) return 'Please enter a valid email';
    return '';
  };

  const onBlur = (field: keyof FormState): void => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validate(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const onChange = (field: keyof FormState, value: string): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validate(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const onSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    (Object.keys(form) as (keyof FormState)[]).forEach((f) => {
      const err = validate(f, form[f]);
      if (err) newErrors[f] = err;
    });
    setTouched({ name: true, email: true, message: true });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);
    setServerError('');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setServerError('Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Could not send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="full-bg" id="contact" style={{ background: 'var(--dark)' }} data-bg="dark">
      <section className="sec">
        <span className="lbl lbl-dim">Contact</span>
        <h2 className="st lh">Get in Touch</h2>
        <div className="ct-grid">
          <form className="ct-form" onSubmit={onSubmit} noValidate>
            <div className="ff">
              <label className="fl" htmlFor="ct-name">Name</label>
              <input
                id="ct-name"
                className={`fi${errors.name && touched.name ? ' error' : ''}`}
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => onChange('name', e.target.value)}
                onBlur={() => onBlur('name')}
              />
              {touched.name && errors.name && (
                <span className="field-err">{errors.name}</span>
              )}
            </div>
            <div className="ff">
              <label className="fl" htmlFor="ct-email">Email</label>
              <input
                id="ct-email"
                className={`fi${errors.email && touched.email ? ' error' : ''}`}
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => onChange('email', e.target.value)}
                onBlur={() => onBlur('email')}
              />
              {touched.email && errors.email && (
                <span className="field-err">{errors.email}</span>
              )}
            </div>
            <div className="ff">
              <label className="fl" htmlFor="ct-message">Message</label>
              <textarea
                id="ct-message"
                className={`fi${errors.message && touched.message ? ' error' : ''}`}
                rows={4}
                placeholder="Say hello..."
                value={form.message}
                onChange={(e) => onChange('message', e.target.value)}
                onBlur={() => onBlur('message')}
              />
              {touched.message && errors.message && (
                <span className="field-err">{errors.message}</span>
              )}
            </div>
            {serverError && (
              <p style={{ fontSize: 13, color: 'var(--rust)' }}>{serverError}</p>
            )}
            {sent ? (
              <p style={{ fontSize: 15, color: 'var(--rust)' }}>
                Thank you, I will be in touch soon.
              </p>
            ) : (
              <button
                type="submit"
                className="fs-btn"
                disabled={loading}
                ref={magnetic.ref}
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
              >
                {loading && <span className="spinner" />}
                Send Message
              </button>
            )}
          </form>
          <div className="ct-info">
            {CONTACT_INFO.map(([l, v, h], i) => (
              <div key={i} className="ci">
                <div className="ci-l">{l}</div>
                <div className="ci-v">
                  {h ? (
                    <a href={h} target="_blank" rel="noopener noreferrer">
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
