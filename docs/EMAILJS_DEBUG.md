# EmailJS 400 Error Debugging Guide

## Step-by-Step Troubleshooting

### 1. Verify Your EmailJS Configuration

#### Check Your Dashboard
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Verify your **Service ID** (email service you connected)
3. Verify your **Template ID** (email template you created)
4. Get your **Public Key** from Integration section

#### Update emailService.js
Replace these values in `src/services/emailService.js`:
```javascript
const SERVICE_ID = 'service_abc123'; // Your actual service ID
const TEMPLATE_ID = 'template_xyz789'; // Your actual template ID  
const PUBLIC_KEY = 'user_def456'; // Your actual public key
```

### 2. Verify Template Variables

Your EmailJS template MUST contain these exact variable names:

#### In your EmailJS template editor, use:
```
Hello {{to_name}},

You received a new message from {{from_name}} ({{from_email}})

Subject: {{subject}}
Message: {{message}}
Budget: {{budget}}
Timeline: {{timeline}}

Reply to: {{reply_to}}
```

#### Common Issues:
- ❌ `{{name}}` instead of `{{from_name}}`
- ❌ `{{email}}` instead of `{{from_email}}`
- ❌ Missing double curly braces `{name}` instead of `{{name}}`
- ❌ Extra spaces `{{ name }}` instead of `{{name}}`

### 3. Test Your Configuration

#### Method 1: Use Browser Console
1. Open your website
2. Open Developer Tools (F12)
3. Go to Console tab
4. Look for these messages:
   - ✅ "EmailJS initialized successfully"
   - ❌ "Missing EmailJS configuration: ..."

#### Method 2: Test in EmailJS Dashboard
1. Go to your EmailJS template
2. Click "Test it" button
3. Fill in test data
4. Check if email is received

### 4. Debug Network Requests

#### In Browser DevTools:
1. Open Network tab
2. Submit your form
3. Look for `api.emailjs.com/api/v1.0/email/send` request
4. Check the request payload and response

#### Common 400 Error Responses:
- `"The service is not found"` → Wrong SERVICE_ID
- `"The template is not found"` → Wrong TEMPLATE_ID  
- `"The user_id is not found"` → Wrong PUBLIC_KEY
- `"Missing template parameter"` → Missing required template variable

### 5. Enhanced Debugging Code

Add this to your component to debug:

```javascript
// Add this function to debug EmailJS
const debugEmailJS = () => {
  console.log('=== EmailJS Debug Info ===');
  console.log('Service ID:', SERVICE_ID);
  console.log('Template ID:', TEMPLATE_ID);
  console.log('Public Key:', PUBLIC_KEY?.substring(0, 10) + '...');
  console.log('Form Data:', formData);
};

// Call it before sending email
const handleSubmit = async (e) => {
  e.preventDefault();
  debugEmailJS(); // Add this line
  // ... rest of your code
};
```

### 6. Common Solutions

#### If you get "service not found":
1. Check if your email service is active in EmailJS dashboard
2. Verify the Service ID exactly matches (case-sensitive)

#### If you get "template not found":
1. Check if your template is saved and published
2. Verify the Template ID exactly matches

#### If you get "user not found":
1. Check your Public Key in Integration section
2. Make sure you're using the Public Key, not Private Key

#### If template parameters are missing:
1. Ensure all template variables are defined in your EmailJS template
2. Make sure variable names match exactly (case-sensitive)

### 7. Working Example

Here's a minimal working example:

```javascript
// emailService.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_abc123';
const TEMPLATE_ID = 'template_xyz789';  
const PUBLIC_KEY = 'user_def456';

emailjs.init(PUBLIC_KEY);

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Your Name'
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
```

### 8. Testing Checklist

- [ ] EmailJS account is active
- [ ] Email service is connected and working
- [ ] Template is created with correct variables
- [ ] Service ID, Template ID, and Public Key are correct
- [ ] Template variables match exactly
- [ ] Form validation passes
- [ ] Network request shows correct payload
- [ ] No console errors

### 9. Alternative Testing

If still not working, try this minimal test:

```javascript
// Test directly in browser console
emailjs.send('your_service_id', 'your_template_id', {
  from_name: 'Test',
  from_email: 'test@example.com',
  message: 'Test message'
}, 'your_public_key').then(
  (response) => console.log('SUCCESS!', response),
  (error) => console.log('FAILED...', error)
);
```

This will help isolate if the issue is with your configuration or your application code.
