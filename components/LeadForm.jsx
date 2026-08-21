'use client';

import { useRef, useState } from 'react';
import { CheckCircle2, FileUp, LoaderCircle, Send } from 'lucide-react';

export default function LeadForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [fileName, setFileName] = useState('No file selected');

  function onFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return setFileName('No file selected');
    if (file.size > 2 * 1024 * 1024) {
      e.target.value = '';
      setFileName('No file selected');
      setStatus({ type: 'error', message: 'Please choose a file smaller than 2 MB.' });
      return;
    }
    setStatus({ type: 'idle', message: '' });
    setFileName(file.name);
  }

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your enquiry…' });
    try {
      const response = await fetch('/api/lead', { method: 'POST', body: new FormData(formRef.current) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to send enquiry.');
      formRef.current.reset();
      setFileName('No file selected');
      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been sent successfully.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  }

  return (
    <form className="lead-form" ref={formRef} onSubmit={submit}>
      <div className="form-heading"><span>PROFILE ASSESSMENT</span><h2>Tell us about your goal.</h2><p>Fields marked * are required.</p></div>
      <div className="form-grid">
        <label>Name *<input name="name" required placeholder="Your full name" /></label>
        <label>Mobile Number *<input name="mobile" required inputMode="tel" placeholder="Your mobile number" /></label>
        <label>Email Id<input name="email" type="email" placeholder="you@example.com" /></label>
        <label>Passport No<input name="passport" placeholder="Optional" /></label>
        <label className="full">Choose File<input name="document" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={onFileChange} /><span className="file-ui"><FileUp size={18} /><b>{fileName}</b><small>(Resume) Max 2 MB</small></span></label>
      </div>
      <button className="btn btn-primary form-submit" disabled={status.type === 'loading'}>{status.type === 'loading' ? <LoaderCircle className="spin" size={18} /> : <Send size={18} />} {status.type === 'loading' ? 'Sending…' : 'Send Enquiry'}</button>
      {status.type === 'success' && <div className="form-status success"><CheckCircle2 size={18} />{status.message}</div>}
      {status.type === 'error' && <div className="form-status error">{status.message}</div>}
    </form>
  );
}
