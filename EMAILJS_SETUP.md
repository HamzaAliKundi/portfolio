# EmailJS Setup Guide

## What is EmailJS?

EmailJS allows you to send emails directly from your frontend without a backend server. It's free for up to 200 emails per month.

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin/integration)
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

### 3. Create Email Template

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/template)
2. Click "Create New Template"
3. Use this template structure:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Copy your Template ID** (you'll need this)

### 4. Get Your Public Key

1. Go to [Account > General](https://dashboard.emailjs.com/admin/account/general)
2. Find your **Public Key** (also called API Key)
3. **Copy your Public Key** (you'll need this)

### 5. Update Contact.jsx

Open `src/sections/Contact.jsx` and replace these placeholders:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';       // Replace with your Public Key
```

### 6. Test the Form

1. Start your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Security Note

The Public Key is safe to use in frontend code. EmailJS uses it to identify your account, but it doesn't grant full access. However, for production, consider:

- Using environment variables (`.env` file)
- Setting up rate limiting in EmailJS dashboard
- Adding reCAPTCHA to prevent spam

## Environment Variables (Optional)

Create a `.env` file in the root directory:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update Contact.jsx:

```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Troubleshooting

- **Email not received?** Check spam folder and verify EmailJS service is connected
- **Error 400?** Check that template variables match ({{from_name}}, {{from_email}}, {{message}})
- **Error 401?** Verify your Public Key is correct
- **Rate limit?** Free tier allows 200 emails/month. Upgrade for more.

## Support

- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Dashboard: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)

