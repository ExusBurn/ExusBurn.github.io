# aadithyaiyer.github.io

Personal portfolio website — built with vanilla HTML/CSS/JS, hosted on GitHub Pages.

## Deploy

1. Create a new GitHub repo named **`ExusBurn.github.io`**
2. Push all files in this folder to the `main` branch
3. Go to **Settings → Pages → Source: Deploy from branch → main / (root)**
4. Site goes live at `https://ExusBurn.github.io`

### Custom domain (aadithyaiyer.com)

1. Add a `CNAME` file containing `aadithyaiyer.com` (already included)
2. In your domain registrar's DNS, add:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` record: `www` → `ExusBurn.github.io`
3. Enable **Enforce HTTPS** in GitHub Pages settings after DNS propagates (~24h)
