# 🎬 What to Expect When Running Locally

## Step-by-Step: From Terminal to Browser

### Step 1: Install Dependencies
```bash
npm install
```

**What you'll see:**
```
added 500+ packages in 45s
```

Takes 30-60 seconds depending on internet speed.

---

### Step 2: Start Dev Server
```bash
npm run dev
```

**What you'll see:**
```
  ▲ Next.js 15.3.4
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

The server starts in a few seconds. Keep this terminal window open.

---

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

**What you'll see:**

A modern corporate website with:

1. **Navigation Header** (fixed at top)
   - NAMI logo on the left
   - Nav menu (Home, About, Businesses, Careers, etc.)
   - "Schedule Briefing" button (gold)
   - Mobile hamburger menu

2. **Hero Section** (full-screen)
   - Background image of financial district
   - Headline: "Building the next global financial corridor"
   - Description text
   - Two CTA buttons: "Explore Our Businesses" & "Contact Us"
   - Scroll indicator

3. **Marquee Section** (scrolling text)
   - Moving text: "INVESTMENT BANKING • TREASURY & BONDS • AVIATION LEASING..."

4. **About Section**
   - Company description
   - Text about NAMI Group

5. **Stats Section**
   - Numbers showing company metrics

6. **Global Presence**
   - Map showing office locations
   - Text about global reach

7. **Verticals Section** (carousel)
   - Cards showing 8 business verticals
   - Icons and descriptions

8. **Industries Section**
   - List of industries served

9. **Why Choose NAMI**
   - Value propositions
   - Benefits listing

10. **GIFT IFSC Section**
    - Section about GIFT IFSC services

11. **Treasury Section**
    - Treasury & bonds information

12. **Aviation & Maritime**
    - Leasing services overview

13. **Technology Section**
    - Tech solutions

14. **Leadership Section**
    - Team photos and bios

15. **ESG Section**
    - Environmental/Social/Governance

16. **FAQ Section**
    - Accordion with Q&A
    - Click to expand/collapse

17. **CTA Section** (at bottom)
    - "Let's build the next capital corridor — together"
    - Contact form (the form you can test!)
    - Contact info (email, phone, LinkedIn)

18. **Footer**
    - Company links
    - Location links
    - Social media icons
    - Copyright info

---

## Testing the Contact Form

### Located At
Bottom of the home page, right side (in the CTA section)

### Form Fields
- Full name (required)
- Organization (optional)
- Email (required)
- Phone (optional)
- Area of interest (dropdown)
- Message (required, min 10 chars)

### How to Test

1. **Scroll to bottom** of home page
2. **See the contact form** on the right side
3. **Fill in the form:**
   ```
   Full name: John Doe
   Organization: Test Company
   Email: john@example.com
   Phone: 123-456-7890
   Area of interest: Investment Banking
   Message: I'm interested in learning more about your investment banking services.
   ```

4. **Click "Send Enquiry"** button

5. **You'll see:**
   - Button shows "Sending..."
   - Button is disabled (grayed out)
   - Form is read-only

6. **Success message appears:**
   ```
   ✅ Thank you! We've received your inquiry and will be in touch shortly.
   ```

7. **Form resets** - all fields clear
8. **Success message disappears** after 5 seconds

---

## Testing Validation

### Test Required Field Validation

1. **Try submitting empty form** → Error: "Name must be at least 2 characters"
2. **Enter short name "J"** → Error: "Name must be at least 2 characters"
3. **Enter invalid email** → Error: "Invalid email address"
4. **Enter short message** → Error: "Message must be at least 10 characters"
5. **Don't select area of interest** → Error: "Please select an area of interest"

Each error appears **below the field** in red text. Fix the error and try again.

---

## Testing API Directly

### Open Browser Console
Press: **F12** (or Cmd+Option+I on Mac)

### Go to Console Tab
Click: **Console** tab

### Paste This Test Code
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    org: 'Test Corp',
    phone: '123-456-7890',
    interest: 'Investment Banking',
    message: 'This is a test message to verify the API works'
  })
}).then(r => r.json()).then(d => console.log(d))
```

### Press Enter

### You'll See
```json
{
  "success": true,
  "message": "Thank you for your inquiry. We'll be in touch shortly."
}
```

This confirms the API is working! ✅

---

## Testing Rate Limiting

### Do This
1. **Submit contact form 6+ times** in quick succession (within 60 seconds)
2. **On the 6th submit**, instead of success, you'll see:
   ```
   ❌ Too many requests. Please try again in a minute.
   ```

This is **good!** It means rate limiting is protecting against spam. ✅

---

## Testing Responsive Design

### Desktop (1920px)
- Full layout with 3 columns
- Navigation visible
- All content spread out

### Tablet (768px)
```bash
# In Chrome DevTools: Press Ctrl+Shift+M
# Select "iPad" or "iPad Pro"
```
- Layout adjusts to 2 columns
- Menu becomes hamburger
- Content still readable

### Mobile (375px)
```bash
# In Chrome DevTools
# Select "iPhone 12"
```
- Single column layout
- Menu is hamburger (click to open/close)
- Touch-friendly buttons
- No horizontal scroll

---

## Testing Navigation

Click these links - they should all work:

- **Home** → /
- **About** → /about
- **Businesses** → /businesses
- **Who We Serve** → /who-we-serve
- **Leadership** → /leadership
- **Careers** → /careers (has another form)
- **Insights** → /insights
- **Contact** → /contact (dedicated contact page)

All pages should load without errors.

---

## Testing the Careers Form

### Located At
`http://localhost:3000/careers`

### Form Fields
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Position (dropdown - required)
- Experience Level (dropdown - required)
- Resume File (required - PDF/DOC)
- Cover Letter (optional)

### How to Test
1. Navigate to `/careers`
2. Fill in all fields
3. Upload a PDF file (any PDF works for testing)
4. Click "Submit Application"
5. See success message

---

## Checking for Errors

### Open Browser Console
Press: **F12**

### Look at Console Tab
- **Green text** = Normal logs (OK)
- **Yellow text** = Warnings (OK)
- **Red text** = Errors (Not OK)

**Expected:** No red errors, maybe some warnings

**Not expected:** 
- `Cannot find module...`
- `Hydration mismatch...`
- `API endpoint not found...`

---

## Performance Check

### Open DevTools Network Tab
1. Press **F12**
2. Click **Network** tab
3. Refresh page (Cmd+R or Ctrl+R)
4. Wait for page to fully load

### Look for
- ✅ Main JS bundle < 200KB
- ✅ No 404 errors (red)
- ✅ All images load
- ✅ Page loads in < 3 seconds

---

## Troubleshooting

### "Cannot GET /"
- Dev server not running
- Solution: Run `npm run dev` in terminal

### "Cannot find module '@/components/sections'"
- Import path wrong
- Solution: Check `tsconfig.json` has path aliases
- Should have: `"@/*": ["./src/*"]`

### Form doesn't submit
- Check browser console for errors
- Make sure you filled all required fields
- Check Network tab to see API response

### Mobile menu doesn't work
- Make sure you're below 768px width
- Try refreshing page (F5)
- Check console for JavaScript errors

### Styles look broken
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then `npm run dev`)
- Make sure Tailwind CSS is loaded (check Network tab)

---

## Success Criteria

You've successfully verified the refactoring when you can:

- [ ] App loads at http://localhost:3000
- [ ] See all sections displayed
- [ ] Submit contact form and get success message
- [ ] Validation errors show correctly
- [ ] API test in console works
- [ ] Rate limiting works (6+ submissions)
- [ ] Navigation links work
- [ ] Mobile menu opens/closes
- [ ] Careers page loads and form works
- [ ] Contact page loads
- [ ] No red errors in console

If all above are checked ✅, **everything is working perfectly!**

---

## What This Proves

✅ **Functionality Preserved**
- All pages display the same
- All navigation works
- All animations play

✅ **New Features Working**
- Forms submit via API
- Validation works
- Rate limiting protects against spam

✅ **Code Quality Improved**
- Component extracted cleanly
- Proper error handling
- Security headers configured

✅ **Ready for Production**
- Code is maintainable
- Forms are functional
- Security is implemented

---

## Next Steps After Verification

1. **Local Verification** ← You are here
2. **Test all features** → Use TESTING_GUIDE.md
3. **Deploy to production** → Push to GitHub, Vercel auto-deploys
4. **Optional: Add email service** → Set up Resend API key
5. **Enjoy the improved codebase!** → Easy to maintain and extend

---

**Happy testing! 🎉**

If everything works as described above, the refactoring is complete and successful!
