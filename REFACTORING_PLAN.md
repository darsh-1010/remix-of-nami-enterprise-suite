# Comprehensive Refactoring Plan - NAMI Website

**Objective**: Restructure codebase for production-readiness while preserving all functionality  
**Status**: Implementation in Progress  
**Last Updated**: July 12, 2026

## Phase Overview

### Phase 1: Foundation & Quick Wins (2-3 hours)

- [x] Create project settings
- [ ] Extract CSS utility classes to globals.css
- [ ] Create constants file (lib/constants.ts)
- [ ] Create shared form schemas (lib/schemas.ts)
- [ ] Create reusable FormField component
- [ ] Fix Header hydration issue

### Phase 2: Component Architecture (4-6 hours)

- [ ] Extract page sections from src/app/page.tsx to src/components/sections/
- [ ] Create Section components index file
- [ ] Update home page to import sections instead of defining inline
- [ ] Create FormField component library
- [ ] Refactor ContactForm and CareersForm to use new FormField

### Phase 3: Form Infrastructure (3-4 hours)

- [ ] Create API route for form submissions (contact)
- [ ] Create API route for careers form
- [ ] Implement form validation with Zod
- [ ] Add error handling and loading states
- [ ] Integrate form submission with real API calls

### Phase 4: Performance & Polish (2-3 hours)

- [ ] Add image optimization with blur placeholders
- [ ] Extract repeated CSS classes to utilities
- [ ] Remove unused dependencies from imports
- [ ] Update package.json to reflect actual usage
- [ ] Performance audit and fixes

### Phase 5: Accessibility & Testing (2-3 hours)

- [ ] Fix form label associations (htmlFor)
- [ ] Add ARIA attributes
- [ ] Fix mobile menu focus trapping
- [ ] Test color contrast
- [ ] Create basic test setup

## Functionality Preservation Checklist

- [ ] All pages load and display correctly
- [ ] All navigation links work
- [ ] Header scrolling behavior maintained
- [ ] Mobile menu functionality preserved
- [ ] Form UI looks identical
- [ ] All images display correctly
- [ ] Footer links operational
- [ ] Responsive design preserved
- [ ] CSS styling unchanged (visually)
- [ ] Animations work (Marquee, etc.)

## File Structure After Refactoring

```
src/
├── app/
│   ├── page.tsx (refactored to import sections - ~50 lines)
│   ├── about/page.tsx (unchanged)
│   ├── businesses/page.tsx (unchanged)
│   ├── careers/
│   │   ├── page.tsx (updated with new form)
│   │   └── CareersForm.tsx (refactored)
│   ├── contact/
│   │   ├── page.tsx (new)
│   │   └── ContactForm.tsx (refactored)
│   ├── insights/page.tsx (unchanged)
│   ├── leadership/page.tsx (unchanged)
│   ├── who-we-serve/page.tsx (unchanged)
│   ├── api/
│   │   ├── contact/route.ts (NEW)
│   │   └── careers/route.ts (NEW)
│   ├── layout.tsx (unchanged)
│   ├── globals.css (updated with utilities)
│   └── sitemap.ts (unchanged)
│
├── components/
│   ├── site/
│   │   ├── Header.tsx (hydration fix)
│   │   └── Footer.tsx (unchanged)
│   │
│   ├── sections/ (NEW DIRECTORY)
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── About.tsx
│   │   ├── Stats.tsx
│   │   ├── GlobalPresence.tsx
│   │   ├── Verticals.tsx
│   │   ├── Industries.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── Gift.tsx
│   │   ├── Treasury.tsx
│   │   ├── AviationMaritime.tsx
│   │   ├── Technology.tsx
│   │   ├── Leadership.tsx
│   │   ├── Esg.tsx
│   │   ├── Faq.tsx
│   │   ├── CTA.tsx
│   │   └── index.ts
│   │
│   ├── forms/ (NEW DIRECTORY)
│   │   ├── FormField.tsx
│   │   ├── FormSelect.tsx
│   │   ├── FormTextarea.tsx
│   │   └── index.ts
│   │
│   └── ui/ (existing - unchanged)
│
├── hooks/
│   ├── use-mobile.tsx (unchanged)
│   └── use-form-submit.ts (NEW)
│
├── lib/
│   ├── utils.ts (unchanged)
│   ├── constants.ts (NEW)
│   ├── schemas.ts (NEW)
│   ├── email.ts (NEW - placeholder)
│   └── types.ts (NEW - shared types)
│
└── middleware.ts (NEW - security headers)
```

## Testing Strategy

1. **Visual Regression Testing**: Compare before/after screenshots
2. **Functionality Testing**: Test all forms, navigation, interactions
3. **Performance Testing**: Lighthouse audit
4. **Accessibility Testing**: WCAG 2.1 AA compliance
5. **Unit Tests**: Form validation, utilities

## Rollback Plan

- All changes are non-destructive
- Original files kept until confirmation
- Git history preserved
- Can revert at any commit point
