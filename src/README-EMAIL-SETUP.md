# Email Setup Instructions

## Quick Setup

1. **Create a `.env` file in your project root** with the following content:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. **Follow the EmailJS setup guide** in `src/config/emailjs-setup.md`

3. **Test your contact form** by filling it out and submitting

## Current Implementation

The contact form now includes:

- ✅ **Form validation** with real-time error feedback
- ✅ **EmailJS integration** for sending emails
- ✅ **Loading states** during form submission
- ✅ **Toast notifications** for success/error feedback
- ✅ **Environment variable support** for secure configuration
- ✅ **Comprehensive test coverage** (≥90% branch coverage)
- ✅ **Accessibility features** with proper labels and ARIA attributes

## Features

### Form Validation
- Required field validation
- Email format validation
- Minimum message length (10 characters)
- Real-time error clearing when user types

### Email Functionality
- **Development mode**: Logs form data to console
- **Production mode**: Sends actual emails via EmailJS
- **Error handling**: Graceful fallback and user feedback
- **Security**: Environment variables for sensitive data

### User Experience
- Loading spinner during submission
- Disabled button while processing
- Form clearing after successful submission
- Toast notifications for feedback
- Responsive design

### Testing
- Unit tests with ≥90% branch coverage
- Integration tests for form submission
- Mocked external services
- Error scenario testing

## Alternative Solutions

If you prefer not to use EmailJS, here are other options:

### 1. Formspree (Easiest)
```typescript
// Replace the handleSubmit function with:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } else {
    toast.error('Failed to send message. Please try again.');
  }
};
```

### 2. Netlify Forms (If deployed on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- Add hidden input for Netlify -->
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your existing form fields -->
</form>
```

### 3. Custom Backend API
Create a simple Node.js/Express server with nodemailer:

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: req.body.email,
      to: 'your-email@example.com',
      subject: `Contact Form: ${req.body.subject}`,
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Message: ${req.body.message}
      `,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

## Security Considerations

1. **Environment Variables**: Never commit sensitive keys to version control
2. **Rate Limiting**: Consider implementing rate limiting to prevent spam
3. **Input Validation**: Always validate inputs on both client and server
4. **CAPTCHA**: Consider adding CAPTCHA for production use
5. **HTTPS**: Always use HTTPS in production

## Troubleshooting

### Common Issues

1. **Emails not sending**: Check your EmailJS configuration
2. **CORS errors**: EmailJS handles this automatically
3. **Environment variables not working**: Restart your dev server after adding `.env`
4. **Template variables not working**: Ensure variable names match your EmailJS template

### Debug Mode

The form will log data to console in development mode when EmailJS is not configured. Check your browser's developer console to see the form data.

## Testing

Run the tests with:

```bash
npm test
```

The test suite covers:
- Form rendering
- User interactions
- Validation logic
- Email submission
- Error handling
- Loading states 