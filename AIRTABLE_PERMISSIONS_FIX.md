# 🔧 Airtable Permissions Fix Guide

## Current Issue

Your Airtable integration is failing with **403 Forbidden** errors because your Personal Access Token doesn't have the correct permissions.

## ✅ Step-by-Step Fix

### 1. Regenerate Your Personal Access Token

1. **Go to Airtable Account Settings:**

   - Visit: https://airtable.com/account
   - Click "Personal access tokens" in the left sidebar

2. **Delete Your Current Token:**

   - Find your existing token
   - Click "Delete" or "Revoke"

3. **Create a New Token:**

   - Click "Create new token"
   - **Name:** "Contact Form Integration"
   - **Scopes:** Select ALL of these:
     - ✅ `data.records:write`
     - ✅ `data.records:read`
     - ✅ `data.bases:read`
     - ✅ `data.bases:write`
     - ✅ `schema.bases:read`
     - ✅ `webhook:manage`

4. **Copy the New Token:**
   - Copy the entire token (starts with `pat`)
   - Update your `.env.local` file

### 2. Verify Your Base ID

1. **Go to your Airtable base**
2. **Check the URL:** `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. **Copy the Base ID** (the part after `/app`)
4. **Make sure it matches:** `appY4xBPhZXSIG1oR`

### 3. Create the Contacts Table

1. **In your Airtable base, create a new table:**

   - Click the "+" button to add a new table
   - Name it exactly: **"Contacts"**

2. **Add these fields:**
   - **Name** (Single line text)
   - **Email** (Email)
   - **Phone** (Phone number)
   - **Message** (Long text)
   - **Date** (Date)
   - **IP_Address** (Single line text)
   - **User_Agent** (Long text)

### 4. Update Your .env.local File

Replace your current `.env.local` with:

```env
VITE_AIRTABLE_BASE_ID=appY4xBPhZXSIG1oR
VITE_PAT=your_new_token_here
VITE_TABLE_NAME=Contacts
```

### 5. Test the Connection

Run the test script again:

```bash
node test-airtable-connection.js
```

You should see:

- ✅ GET request successful
- ✅ POST request successful
- 🎉 Airtable integration is working correctly!

## 🚨 Common Issues

### Issue: "Invalid permissions"

**Solution:** Your token doesn't have the right scopes. Create a new token with ALL the scopes listed above.

### Issue: "Model not found"

**Solution:**

1. Check your Base ID is correct
2. Make sure the "Contacts" table exists
3. Verify the table name is exactly "Contacts" (case-sensitive)

### Issue: "Base not found"

**Solution:**

1. Double-check your Base ID
2. Make sure you have access to the base
3. Try creating a new base and testing with that

## 🧪 Alternative: Test with a New Base

If you're still having issues:

1. **Create a new Airtable base**
2. **Create a "Contacts" table** with the fields listed above
3. **Get the new Base ID** from the URL
4. **Create a new Personal Access Token** with full permissions
5. **Update your .env.local** with the new credentials
6. **Test again**

## 📞 Need Help?

If you're still having issues:

1. Check the Airtable API documentation
2. Verify your account has the right permissions
3. Try using a different Airtable account
4. Contact Airtable support if needed

The key is making sure your Personal Access Token has ALL the required scopes!
