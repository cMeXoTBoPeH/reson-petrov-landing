# EmailJS Setup Guide

## Overview
The contact form now uses EmailJS to send emails directly without opening the user's email client. This provides a much better user experience.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** Website Inquiry — Резон-Петров 90

**Content:**
```
Ново запитване от уебсайта:

Име: {{from_name}}
Имейл: {{from_email}}
Телефон: {{phone}}
Компания: {{company}}

Съобщение:
{{message}}

---
Това съобщение е изпратено от уебсайта на Резон-Петров 90.
```

**Alternative template variables (if the above doesn't work):**
```
Ново запитване от уебсайта:

Име: {{user_name}}
Имейл: {{user_email}}
Телефон: {{user_phone}}
Компания: {{user_company}}

Съобщение:
{{user_message}}

---
Това съобщение е изпратено от уебсайта на Резон-Петров 90.
```

**For the name field, try these variables in your template:**
- `{{from_name}}` (most common)
- `{{user_name}}`
- `{{full_name}}`
- `{{contact_name}}`
- `{{sender_name}}`

**Test template with all name variables:**
```
Ново запитване от уебсайта:

Име: {{from_name}} ({{user_name}} / {{full_name}} / {{contact_name}} / {{sender_name}})
Имейл: {{from_email}}
Телефон: {{phone}}
Компания: {{company}}

Съобщение:
{{message}}

---
Това съобщение е изпратено от уебсайта на Резон-Петров 90.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

### 5. Update Contact.tsx
Replace these placeholders in `src/components/Contact.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### 6. Test the Form
1. Start your development server: `npm start`
2. Fill out the contact form
3. Check your email for the message
4. Verify the success message appears on the website

## Features
- ✅ No email client required
- ✅ Loading spinner during submission
- ✅ Success/error messages
- ✅ Form validation
- ✅ Automatic form reset after successful submission
- ✅ Professional user experience

## Free Tier Limits
- 200 emails per month
- Perfect for most small business websites

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify email service is properly connected
- Ensure template variables match the code

## Security Note
The public key is safe to use in frontend code. EmailJS handles the security on their end.
