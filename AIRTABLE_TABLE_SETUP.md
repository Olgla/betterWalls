# 🔧 Airtable Table Setup Guide

## Current Issue

Your Airtable table "Contacts" exists but doesn't have the required fields for the contact form to work.

## ✅ Solution: Create the Required Fields

### Step 1: Go to Your Airtable Base

1. Open your Airtable base: `https://airtable.com/appY4xBPhZXSIG1oR`
2. Make sure you're in the "Contacts" table

### Step 2: Add These Required Fields

Create these fields in your "Contacts" table:

| Field Name     | Field Type       | Description                 |
| -------------- | ---------------- | --------------------------- |
| **Email**      | Email            | Customer's email address    |
| **Name**       | Single line text | Customer's full name        |
| **Phone**      | Phone number     | Customer's phone number     |
| **Message**    | Long text        | Customer's message/inquiry  |
| **Date**       | Date             | When the form was submitted |
| **IP_Address** | Single line text | Client IP address           |
| **User_Agent** | Long text        | Browser information         |

### Step 3: Field Setup Instructions

1. **Email Field:**

   - Click the "+" button to add a new field
   - Name it exactly: **"Email"**
   - Type: **Email**

2. **Name Field:**

   - Add another field
   - Name it exactly: **"Name"**
   - Type: **Single line text**

3. **Phone Field:**

   - Add another field
   - Name it exactly: **"Phone"**
   - Type: **Phone number**

4. **Message Field:**

   - Add another field
   - Name it exactly: **"Message"**
   - Type: **Long text**

5. **Date Field:**

   - Add another field
   - Name it exactly: **"Date"**
   - Type: **Date**

6. **IP_Address Field:**

   - Add another field
   - Name it exactly: **"IP_Address"**
   - Type: **Single line text**

7. **User_Agent Field:**
   - Add another field
   - Name it exactly: **"User_Agent"**
   - Type: **Long text**

### Step 4: Test the Setup

After creating all the fields, run this test:

```bash
node test-simple-airtable.js
```

You should see:

- ✅ Response Status: 200
- ✅ Success message
- ✅ Created record in your Airtable

### Step 5: Test the Contact Form

1. Go to your website: `http://localhost:5176/`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your Airtable to see the new record

## 🎯 Expected Result

Once you've added all the required fields, your contact form will successfully submit data to Airtable and you'll see new records appear in your "Contacts" table.

## 🚨 Important Notes

- **Field names must match exactly** (case-sensitive)
- **Field types must be correct** for data validation
- **All fields are required** for the form to work properly

## 📞 Need Help?

If you're still having issues:

1. Double-check that all field names match exactly
2. Make sure the field types are correct
3. Verify you're in the right table ("Contacts")
4. Test with the simple test script first
