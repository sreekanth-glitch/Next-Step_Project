import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const allowedTypes = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function required(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const email = formData.get('email');
    const passport = formData.get('passport');
    const file = formData.get('document');

    if (!required(name) || !required(mobile)) {
      return Response.json({ message: 'Name and mobile number are required.' }, { status: 400 });
    }

    if (email && typeof email === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    let attachment;
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return Response.json({ message: 'The uploaded file must be 2 MB or smaller.' }, { status: 413 });
      }
      if (file.type && !allowedTypes.has(file.type)) {
        return Response.json({ message: 'Please upload PDF, JPG, PNG, DOC or DOCX files only.' }, { status: 415 });
      }
      attachment = {
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || undefined,
      };
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL;

    if (!host || !user || !pass || !receiver) {
      return Response.json({ message: 'Email service is not configured yet. Add the SMTP values to .env.local.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: String(process.env.SMTP_SECURE ?? 'true') === 'true',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Next Step Private Limited'}" <${user}>`,
      to: receiver,
      replyTo: required(email) ? email.trim() : undefined,
      subject: `New Website Enquiry — ${name.trim()}`,
      text: [
        'New enquiry from Next Step Private Limited website',
        `Name: ${name.trim()}`,
        `Mobile: ${mobile.trim()}`,
        `Email: ${email?.trim() || 'Not provided'}`,
        `Passport No: ${passport?.trim() || 'Not provided'}`,
        `Attachment: ${attachment?.filename || 'None'}`,
      ].join('\n'),
      html: `
        <h2>New Website Enquiry</h2>
        <p><b>Name:</b> ${escapeHtml(name.trim())}</p>
        <p><b>Mobile:</b> ${escapeHtml(mobile.trim())}</p>
        <p><b>Email:</b> ${escapeHtml(email?.trim() || 'Not provided')}</p>
        <p><b>Passport No:</b> ${escapeHtml(passport?.trim() || 'Not provided')}</p>
        <p><b>Attachment:</b> ${escapeHtml(attachment?.filename || 'None')}</p>
      `,
      attachments: attachment ? [attachment] : [],
    });

    return Response.json({ message: 'Enquiry sent successfully.' });
  } catch (error) {
    console.error('Lead email error:', error);
    return Response.json({ message: 'We could not send the enquiry right now. Please try again.' }, { status: 500 });
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}
