# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}

Best regards,
Your Website
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code

Replace the placeholder values in `src/components/ContactSection.tsx`:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## Step 6: Test Your Setup

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the received message

## Alternative Solutions

### Option 1: Formspree (No Setup Required)
- Go to [Formspree](https://formspree.io/)
- Create a form and get the endpoint URL
- Replace the EmailJS implementation with Formspree

### Option 2: Netlify Forms (If Deployed on Netlify)
- Add `name="contact"` to your form
- Netlify will automatically handle form submissions
- No additional setup required

### Option 3: Backend API
- Create a simple backend API (Node.js/Express)
- Use nodemailer to send emails
- Call your API from the frontend

## Security Notes

- Never expose private keys in client-side code
- Use environment variables for sensitive data
- Consider rate limiting to prevent spam
- Validate all inputs on both client and server side

## Environment Variables (Recommended)

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update your component:

```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Troubleshooting

1. **Emails not sending**: Check your EmailJS service configuration
2. **Template variables not working**: Ensure variable names match your template
3. **CORS errors**: EmailJS handles this automatically
4. **Rate limiting**: Free tier has limits, consider upgrading for production

## Production Considerations

- Upgrade to a paid EmailJS plan for production use
- Implement proper error handling
- Add CAPTCHA to prevent spam
- Consider using a backend API for better security 