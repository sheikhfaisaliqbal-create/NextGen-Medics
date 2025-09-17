NextGen Medical Academy — Static Website

Files:
- index.html
- services.html
- contact.html
- css/styles.css
- js/main.js
- assets/logo.svg

Quick deploy options:
1) Netlify Drop: https://app.netlify.com/drop — drag the whole folder, done.
2) GitHub Pages:
   - Create new repo, upload files.
   - Settings → Pages → Deploy from branch → (main / root).
   - Your site will be available at: https://<user>.github.io/<repo>/
3) Vercel:
   - vercel.com → New Project → Import Git repository or upload folder.
   - Build preset: Other (static).

Contact form:
- Formspree: replace action URL in contact.html (https://formspree.io/f/your_form_id)
- Netlify Forms: use data-netlify="true" and add hidden input form-name.
