import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Toast from './Toast';

const CONTACT_EMAIL = 'd.abhinav12@gmail.com';

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

function validateEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

export default function Contact(): JSX.Element {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const hideToast = useCallback(() => setToastVisible(false), []);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => setToastVisible(true)).catch(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    });
  };

  const validate = (f: string, v: string) => {
    if (!v.trim()) return 'Required';
    if (f === 'email' && !validateEmail(v)) return 'Enter a valid email';
    return '';
  };

  const onChange = (f: string, v: string) => {
    setForm(p => ({ ...p, [f]: v }));
    if (errors[f]) setErrors(p => ({ ...p, [f]: validate(f, v) }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    Object.entries(form).forEach(([k, v]) => { const err = validate(k, v); if (err) newErrors[k] = err; });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Abhinav,\n\n${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="sec">
        <div className="kick"><Spk />Contact</div>
        <h2 className="htitle">Let's make<br/>something <span className="hl">good.</span></h2>
        <div className="ct-grid">
          <motion.form className="ct-form" onSubmit={onSubmit} noValidate initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            {sent ? (
              <p className="sent">Opening your email app — see you there. ✶</p>
            ) : (
              <>
                {(['name', 'email'] as const).map(f => (
                  <div key={f} className="ff">
                    <label className="fl">{f.charAt(0).toUpperCase() + f.slice(1)}</label>
                    <div className={`fwrap${focused[f] ? ' focused' : ''}`}>
                      <input className="fi" type={f === 'email' ? 'email' : 'text'} placeholder={f === 'email' ? 'your@email.com' : 'Your name'}
                        value={form[f]} onChange={e => onChange(f, e.target.value)}
                        onFocus={() => setFocused(p => ({ ...p, [f]: true }))}
                        onBlur={() => { setFocused(p => ({ ...p, [f]: false })); setErrors(p => ({ ...p, [f]: validate(f, form[f]) })); }} />
                    </div>
                    {errors[f] && <span style={{ fontSize: 12, color: 'var(--accent)' }}>{errors[f]}</span>}
                  </div>
                ))}
                <div className="ff">
                  <label className="fl">Message</label>
                  <div className={`fwrap${focused.message ? ' focused' : ''}`}>
                    <textarea className="fi" placeholder="Say hello..." rows={4}
                      value={form.message} onChange={e => onChange('message', e.target.value)}
                      onFocus={() => setFocused(p => ({ ...p, message: true }))}
                      onBlur={() => { setFocused(p => ({ ...p, message: false })); setErrors(p => ({ ...p, message: validate('message', form.message) })); }} />
                  </div>
                  {errors.message && <span style={{ fontSize: 12, color: 'var(--accent)' }}>{errors.message}</span>}
                </div>
                <button type="submit" className="send sketch">Send it →</button>
              </>
            )}
          </motion.form>
          <motion.div className="ct-right" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}>
            <svg className="ct-arrow" viewBox="0 0 80 80" fill="none">
              <path d="M68 8C40 10 18 26 16 58M16 58l-6-18M16 58l20-8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="ct-info">
              {[
                { label: 'Email', value: 'd.abhinav12@gmail.com', href: 'mailto:d.abhinav12@gmail.com', copy: true },
                { label: 'Location', value: 'Halifax, Nova Scotia', href: null },
                { label: 'LinkedIn', value: 'in/abhinav-durgavarjhula', href: 'https://www.linkedin.com/in/abhinav-durgavarjhula/' },
                { label: 'Instagram', value: '@the.diarybylens', href: 'https://instagram.com/the.diarybylens' },
              ].map((ci, i) => (
                <div key={i} className="ci">
                  <div>
                    <div className="ci-l">{ci.label}</div>
                    <div className="ci-v">
                      {ci.href ? (
                        <a
                          href={ci.href}
                          target={ci.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          onClick={ci.copy ? copyEmail : undefined}
                          title={ci.copy ? 'Click to copy' : undefined}
                        >
                          {ci.value}
                        </a>
                      ) : ci.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Toast message="Email copied ✶" visible={toastVisible} onHide={hideToast} />
    </section>
  );
}
