# EmailJS Setup Instructions

To enable real email sending functionality in your portfolio, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Templates

### Contact Form Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Name it something like "Contact Form"
4. Use these template variables in your template:

```
Subject: {{subject}}

Hello Javy,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Budget: {{budget}}
Timeline: {{timeline}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

5. Note down your **Template ID**

### Testimonial Template (Optional)
1. Create another template for testimonial notifications
2. Use these variables:

```
Subject: New Testimonial Submission from {{from_name}}

Hello Javy,

You have received a new testimonial:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service: {{service}}
Rating: {{rating}} stars

Testimonial:
{{testimonial_message}}

---
This testimonial is pending approval in your website.
```

## 4. Get Your Public Key
1. Go to "Integration" in the EmailJS dashboard
2. Copy your **Public Key**

## 5. Update Configuration
1. Open `src/services/emailService.js`
2. Replace the placeholder values:
   - `SERVICE_ID`: Your service ID from step 2
   - `TEMPLATE_ID`: Your contact form template ID from step 3
   - `PUBLIC_KEY`: Your public key from step 4
   - `template_testimonial_id`: Your testimonial template ID (if created)

## 6. Test the Forms
1. Save your changes and restart the development server
2. Fill out the contact form to test email sending
3. Check your email inbox for the message
4. Test the testimonial form if implemented

## Example Configuration
```javascript
const SERVICE_ID = 'service_abc123';
const TEMPLATE_ID = 'template_xyz789';
const PUBLIC_KEY = 'user_def456';
```

## Troubleshooting
- Make sure your email service is properly configured in EmailJS
- Check the browser console for any error messages
- Verify your template variable names match exactly
- Ensure your EmailJS account isn't over the free tier limits

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- For higher volumes, consider upgrading to a paid plan

## Security Note
The public key is safe to expose in client-side code. EmailJS is designed for this use case and includes rate limiting and spam protection.
