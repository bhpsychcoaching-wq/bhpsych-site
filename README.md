BH Psych Solutions — Deployment-ready static site
===================================================

What this bundle contains
- A simple static site (HTML/CSS/JS) that mirrors the designed content and layout.
- A pop-up "Request a Call-Back" form that submits to Formspree (you must create a Formspree form and replace FORM_ID in script.js with your form id).
- Contact email pre-filled to: brendan.hubbins@bhpsych.co.uk
- Phone pre-filled to: +44 (0)7523 108727
- A placeholder logo file: logo-psi-white.png (replace this with your real logo in ./logo-psi-white.png)

How to deploy to Vercel (no Git required)
1. Go to https://vercel.com/new/upload
2. Drag and drop *bhpsych-site.zip* (this file)
3. Vercel will build and deploy the static site and give you a temporary URL.
4. In Vercel, go to the project → Settings → Domains and add your domain: bhpsych.co.uk
5. Follow Vercel's DNS guidance to update A/CNAME records in your IONOS control panel.

Formspree setup (for form emails)
1. Go to https://formspree.io and create a free account.
2. Create a new form and copy its FORM_ID (it looks like: https://formspree.io/f/xyzabc)
3. In the file script.js, replace both occurrences of 'https://formspree.io/f/FORM_ID' with your actual Formspree endpoint (e.g. 'https://formspree.io/f/xyzabc').
4. Deploy the site. Test the forms. Formspree will forward submissions to brendan.hubbins@bhpsych.co.uk.

Customize
- Replace the placeholder logo (public/logo-psi-white.png) with your real logo (transparent PNG).
- Edit text in index.html to tweak copy.

Support
If you'd like, I can:
- Replace FORM_ID for you once you create the Formspree form.
- Walk you through the Vercel upload step live (step-by-step).
- Swap this static site for a React/Vite project if you prefer a development workflow.
