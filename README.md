# Next Step Private Limited — Abroad Consultancy Website

Modern responsive Next.js website for **Next Step Private Limited**, inspired by the supplied brochure and branded around the supplied logo.

## Stack
- Next.js 16.3 (App Router)
- React 19
- JSX
- Framer Motion
- Lucide React
- Nodemailer
- CSS (no Tailwind dependency)

Next.js 16 is the current Active LTS major line. The project uses App Router Route Handlers and `request.formData()` for the enquiry endpoint.

## Pages
- `/` — Home
- `/about` — About
- `/services` — Services
- `/contact` — Contact + enquiry form
- `/api/lead` — POST endpoint for Nodemailer

## Form
Fields:
- Name *
- Mobile Number *
- Email Id
- Passport No
- Choose File

The browser and server enforce a **2 MB maximum** for the uploaded file. Supported types: PDF, JPG/JPEG, PNG, DOC and DOCX.

## Email setup
1. Copy `.env.example` to `.env.local`.
2. Fill in your SMTP details and `CONTACT_RECEIVER_EMAIL`.
3. For Gmail, use an App Password rather than your normal account password.
4. Run `npm install` and `npm run dev`.

Example:

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Assets
- `public/logo.png` — transparent version derived from the supplied business logo.
- `public/logo-source.jpg` — original supplied logo image.
- `public/reference-brochure.png` — supplied brochure/reference image.

The website's destination artwork is built locally with CSS/HTML so the project does not depend on third-party stock-image URLs.

## Important production note
The SMTP credentials are intentionally not included. Add them through your hosting provider's environment variables. Never commit `.env.local`.
