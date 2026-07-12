# Testing Guide - NAMI Website Refactoring

## Quick Start

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## Functionality Checklist

### 1. **Navigation & Layout** ✅

**Header Navigation:**
- [ ] Logo/brand link works (click "NAMI GROUP" logo → goes to home)
- [ ] All nav links visible and functional:
  - [ ] Home
  - [ ] About
  - [ ] Businesses
  - [ ] Careers
  - [ ] Insights
- [ ] Mobile menu opens/closes (click hamburger on mobile)
- [ ] Header scroll effect (white background appears on scroll)
- [ ] "Schedule Briefing" CTA button visible on desktop

**Footer:**
- [ ] All footer links work
- [ ] Social media links present
- [ ] Contact info visible

### 2. **Home Page Sections** ✅

**Visual Content (all should display identically to before):**
- [ ] Hero section with background image
- [ ] Headline: "Building the next global financial corridor"
- [ ] Hero buttons: "Explore Our Businesses" and "Contact Us"
- [ ] Marquee scrolling text with business names
- [ ] About section with company description
- [ ] Stats section with numbers
- [ ] Global presence section with map
- [ ] Verticals carousel showing 8 business lines
- [ ] Industries section
- [ ] Why choose NAMI section
- [ ] GIFT IFSC section
- [ ] Treasury section
- [ ] Aviation & Maritime section
- [ ] Technology section
- [ ] Leadership section
- [ ] ESG commitments
- [ ] FAQ accordion (test opening/closing items)
- [ ] CTA section at bottom with contact form

### 3. **Contact Form (Home Page)** ✅

**Location:** Bottom of home page in CTA section

**Test the form:**
1. [ ] Fill in all fields:
   - Full name: "John Doe"
   - Organization: "Test Corp"
   - Email: "john@test.com"
   - Phone: "123-456-7890"
   - Area of interest: Select "Investment Banking"
   - Message: "Test message for NAMI inquiry"

2. [ ] Click "Send Enquiry" button
3. [ ] Verify response:
   - [ ] Loading state shows "Sending..."
   - [ ] Button is disabled during submission
   - [ ] Success message: "Thank you! We've received your inquiry..."
   - [ ] Form resets after submission

**Test validation:**
1. [ ] Try submitting with empty name → error shows
2. [ ] Try invalid email → error shows
3. [ ] Try short message < 10 chars → error shows
4. [ ] Success message disappears after 5 seconds

**API Test (in browser console):**
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@test.com',
    org: 'Test',
    phone: '123456',
    interest: 'Investment Banking',
    message: 'This is a test message for the contact form'
  })
}).then(r => r.json()).then(d => console.log(d))
```
Expected: `{ success: true, message: "Thank you for your inquiry..." }`

### 4. **Dedicated Contact Page** ✅

**Location:** `/contact` route

1. [ ] Page loads with title "Get in Touch"
2. [ ] Contact form visible
3. [ ] Contact information section shows:
   - [ ] Email: contact@namigroup.com
   - [ ] Phone: +1 (234) 567-8900
   - [ ] Office locations
4. [ ] Form works same as home page
5. [ ] All links functional

### 5. **Careers Page** ✅

**Location:** `/careers` route

1. [ ] Page loads
2. [ ] CareersForm component visible with fields:
   - [ ] Full Name
   - [ ] Email Address
   - [ ] Phone Number
   - [ ] Position dropdown
   - [ ] Experience Level dropdown
   - [ ] Resume file upload
   - [ ] Cover Letter textarea
   - [ ] Submit button

**Test the form:**
1. [ ] Fill all fields
2. [ ] Upload a test PDF/DOC file for resume
3. [ ] Click "Submit Application"
4. [ ] Verify response:
   - [ ] Loading state shows
   - [ ] Success message appears
   - [ ] Form resets

**Test validation:**
1. [ ] Try submitting empty form → errors show
2. [ ] Try uploading non-PDF file → error shows
3. [ ] Try file > 5MB → error shows

### 6. **Page Routes** ✅

Test that all pages load correctly:
- [ ] `/` (home) - loads
- [ ] `/about` - loads
- [ ] `/businesses` - loads
- [ ] `/who-we-serve` - loads
- [ ] `/leadership` - loads
- [ ] `/insights` - loads
- [ ] `/careers` - loads
- [ ] `/contact` - loads
- [ ] `/nonexistent` - shows 404 page

### 7. **Responsive Design** ✅

**Test on different screen sizes:**
- [ ] Desktop (1920px) - layout correct
- [ ] Tablet (768px) - layout adjusts properly
- [ ] Mobile (375px) - layout adjusts, menu works

**Check:**
- [ ] Images scale correctly
- [ ] Text readable on all sizes
- [ ] Buttons clickable on mobile
- [ ] No horizontal scroll

### 8. **Styling & Animations** ✅

- [ ] Gold (#A3844C) and navy colors correct
- [ ] Fonts load properly (Playfair Display, Manrope, Inter)
- [ ] Hover effects work (buttons, links change color)
- [ ] Animations work:
  - [ ] Hero fade-up on load
  - [ ] Marquee scrolling text
  - [ ] FAQ toggle rotation
  - [ ] Card glass effect visible

### 9. **Images** ✅

- [ ] Hero background image loads
- [ ] All section images display
- [ ] Images are optimized (check Network tab - should see WebP/AVIF)
- [ ] Images load without gaps (no layout shift)

### 10. **Error Handling** ✅

**Test error states:**
1. [ ] Try submitting contact form with rate limit (submit 6+ times in 60 seconds)
   - Expected: "Too many requests" error on 6th attempt

2. [ ] Check browser console for any errors
   - [ ] No red errors (warnings are OK)
   - [ ] No hydration mismatches

---

## API Testing

### Contact Form API

```bash
# Test valid submission
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "org": "Test Corp",
    "phone": "123-456-7890",
    "interest": "Investment Banking",
    "message": "This is a test message"
  }'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Thank you for your inquiry. We'll be in touch shortly."
}
```

### Careers Form API

```bash
# Note: Can't test file upload with curl easily, test via UI instead
```

---

## Performance Checks

**Open DevTools (F12) → Network tab:**
1. [ ] Load home page
2. [ ] Check:
   - [ ] Main bundle size (should be < 200KB for JS)
   - [ ] Total page size (should be < 2MB)
   - [ ] Load time (should be < 3 seconds on 4G)
   - [ ] No 404 errors for resources

**Check Lighthouse (DevTools → Lighthouse):**
- [ ] Run audit
- [ ] Performance score should be > 70
- [ ] Accessibility score should be > 90
- [ ] Best Practices score should be > 90

---

## Code Verification

**Verify the refactoring by checking:**
1. [ ] Main page is 73 lines (was 1,028)
   ```bash
   wc -l src/app/page.tsx
   # Should show: 73
   ```

2. [ ] Sections are extracted
   ```bash
   ls src/components/sections/*.tsx | wc -l
   # Should show: 16 components
   ```

3. [ ] No console errors about missing components
4. [ ] TypeScript compiles without errors (when building)

---

## Final Verification Checklist

- [ ] All pages load without errors
- [ ] All forms validate and submit
- [ ] Responsive design works on all sizes
- [ ] Navigation functional
- [ ] Animations play smoothly
- [ ] No console errors
- [ ] APIs respond correctly
- [ ] Rate limiting works
- [ ] Form errors display properly
- [ ] Success feedback shows to user

---

## If You Find Issues

**Issue: Form not submitting?**
- [ ] Check browser console (F12) for errors
- [ ] Check Network tab to see API response
- [ ] Verify all required fields are filled
- [ ] Check API route exists: `/api/contact/route.ts`

**Issue: Styles look wrong?**
- [ ] Clear cache (Cmd+Shift+R or Ctrl+Shift+R)
- [ ] Check if Tailwind classes are loading
- [ ] Verify `globals.css` is imported in layout

**Issue: Images not loading?**
- [ ] Check Network tab for 404 errors
- [ ] Verify image paths: `/assets/hero-financial.jpg`, etc.
- [ ] Check `public/assets/` directory exists

**Issue: Components missing?**
- [ ] Check `src/components/sections/index.ts` exports all components
- [ ] Verify `src/app/page.tsx` imports from `@/components/sections`
- [ ] Run `npm install` if you haven't yet

---

## Success Criteria

✅ **All of the following should work:**
- Home page displays all 16 sections identically to before
- Both contact forms submit and validate properly
- All navigation links work
- Responsive design works
- No console errors
- No hydration warnings
- Forms show success/error messages
- Rate limiting prevents spam
- All pages accessible

If all above items are checked, the refactoring is complete and successful! 🎉
