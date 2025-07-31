# 🚀 Quick EmailJS Setup Guide

Your contact form is currently not configured with EmailJS credentials. Here's how to fix it:

## 📋 Prerequisites
- You need an EmailJS account (free tier available)
- 5-10 minutes to set up

## 🛠️ Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or your preferred provider
4. Follow the authorization steps
5. **Copy your Service ID** (looks like `service_abc123`)

### 3. Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Name it "Contact Form Template"
4. Use this template content:

```
Subject: New Contact from {{from_name}} - {{subject}}

Hello Javy,

You received a new message from your portfolio:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

Additional Details:
- Budget: {{budget}}
- Timeline: {{timeline}}

---
Reply to: {{reply_to}}
```

5. **Save and copy your Template ID** (looks like `template_xyz789`)

### 4. Get Public Key
1. Go to **"Account"** → **"API Keys"**
2. **Copy your Public Key** (looks like `user_def456`)

### 5. Configure Your Portfolio
1. Open the `.env` file in your project root
2. Replace the empty values with your actual credentials:

```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_def456
```

### 6. Restart Development Server
```bash
npm run dev
```

## ✅ Test Your Setup

1. Fill out the contact form on your portfolio
2. Check browser console for success messages
3. Check your email for the message

## 🐛 Troubleshooting

### Common Issues:
- **Wrong IDs**: Double-check Service ID, Template ID, and Public Key
- **Template Variables**: Ensure template uses exact variable names shown above
- **Email Provider**: Gmail works best, some providers may need additional setup
- **Quotas**: Free tier has monthly limits

### If Still Not Working:
1. Check browser console for error messages
2. Verify template is published in EmailJS dashboard  
3. Test with simple template first
4. Check EmailJS service status

## 💡 Pro Tips

- **Security**: Never commit your `.env` file (it's already in `.gitignore`)
- **Production**: Set environment variables on your hosting platform
- **Testing**: Use a simple template first, then customize
- **Backup**: Save your IDs somewhere safe

## 📞 Need Help?

If you're still having issues:
1. Check the browser console for detailed error messages
2. Review the EmailJS dashboard for service status
3. Verify your template uses the correct variable names

Your contact form will work perfectly once configured! 🚀
