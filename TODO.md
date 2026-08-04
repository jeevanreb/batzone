# BatZone Task TODO

## A. Add +91 7892735114 to Call/WhatsApp/Enquiry buttons
- [x] `app/trophies/cta/cta-buttons.jsx` — "Start Bulk Order" & "Talk To Specialist" are WhatsApp links
- [x] `app/trophies/herosection/hero-buttons.jsx` — "Request Custom Quote" is a WhatsApp link
- [x] `app/tournament-event/final-cta/cta-buttons.jsx` — "Inquire About Tournament Services" is a WhatsApp link
- [x] `app/tournament-event/herosection/hero-buttons.jsx` — "Book a Consultation" is a WhatsApp link
- [x] `app/garage/cta/cta-buttons.jsx` — "WhatsApp Expert" is a WhatsApp link
- [x] `app/garage/herosection/herosection-buttons.jsx` — both buttons are WhatsApp links
- [x] `app/jersey/herosection/hero-buttons.jsx` — both buttons are WhatsApp links
- [x] `app/jersey/herosection/hero.jsx` — "Start Customizing" is a WhatsApp link
- [x] `components/layouts/Footer.jsx` — Contact has tel:, WhatsApp and mailto links

## B. SEO for www.batzone.com (per-page)
- [x] `app/layout.js` — metadataBase, Open Graph, Twitter, title template, keywords, robots
- [x] `app/(landingPage)/page.js` — home page metadata
- [x] `app/garage/page.js` — garage metadata
- [x] `app/jersey/page.js` — jersey metadata
- [x] `app/tournament-event/page.js` — tournament metadata
- [x] `app/trophies/page.js` — trophies metadata
- [x] Created `app/sitemap.js` (www.batzone.com)
- [x] Created `app/robots.js` (www.batzone.com)

## C. Replace Oswald font references with global Figtree (free font)
- [x] `app/garage/craftmanship/craftmanship-markup.jsx`
- [x] `app/garage/cta/cta-markup.jsx`
- [x] `app/garage/herosection/herosection-markup.jsx`
- [x] `app/garage/services/services-markup.jsx`
- [x] `app/jersey/herosection/hero-markup.jsx`
- [x] `app/jersey/herosection/hero.jsx`
- [x] `app/jersey/intro/intro-markup.jsx`
- [x] `app/jersey/services/services-markup.jsx`
- [x] `app/jersey/whybatzone/whybatzone-markup.jsx`
- [x] `app/tournament-event/completeTournament/complete-markup.jsx`
- [x] `app/tournament-event/eventsetup/eventsetup-markup.jsx`
- [x] `app/tournament-event/final-cta/cta-buttons.jsx` + `cta-markup.jsx`
- [x] `app/tournament-event/herosection/hero-buttons.jsx` + `hero-markup.jsx`
- [x] `app/tournament-event/ledwall/ledwall-markup.jsx`
- [x] `app/tournament-event/versatile/versatile-markup.jsx`
- [x] `app/tournament-event/whychoose/whychoose-markup.jsx`

## D. Verification
- [x] Verified no Oswald/font-family references remain (only global Figtree)
- [x] Run `npm run build` — compiled successfully, all routes generated, /robots.txt and /sitemap.xml present
