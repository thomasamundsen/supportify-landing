# Supportify Landing Page - Vercel Deployment Guide

## 📋 Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git repository with this project pushed to GitHub

---

## 🚀 Quick Deployment Steps

### Step 1: Push Code to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Add customer ticket portal and landing page"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/supportify-landing.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Log In"** with GitHub
3. Authorize Vercel to access your GitHub account

### Step 3: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find your repository: `supportify-landing`
3. Click **"Import"**

### Step 4: Configure Build Settings

Vercel will auto-detect Next.js settings. Verify these are correct:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | `./ ` (leave empty or `./`) |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |
| **Install Command** | `npm install` |
| **Development Command** | `npm run dev` |

> ✅ **Note**: Vercel auto-detects Next.js projects, so you usually don't need to change anything!

### Step 5: Configure Environment Variables

Click **"Environment Variables"** and add:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://your-backend-api.com` | Production |
| `NEXT_PUBLIC_API_URL` | `http://localhost:3001` | Preview (optional) |

**Where to find your backend API URL:**
- If backend is on Fly.io: `https://your-app.fly.dev`
- If backend is local: `http://localhost:3001`
- If backend is on Railway/Render: Use their provided URL

### Step 6: Deploy

1. Click **"Deploy"**
2. Wait for the build (usually 1-2 minutes)
3. You'll get a URL like: `https://supportify-landing-xyz123.vercel.app`

---

## 🔧 Detailed Configuration

### Build Settings (Auto-Detected)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Custom Domain Setup (Optional)

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain: `supportify.no`
4. Follow DNS configuration instructions
5. Vercel provides automatic SSL certificates

### Recommended Domain Setup

```
Main domain:     supportify.no → Landing page
API subdomain:   api.supportify.no → Backend
```

---

## 🌍 Environment Variables

### Production Environment

Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# Required: Backend API URL
NEXT_PUBLIC_API_URL=https://api.supportify.no

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Sentry Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
```

### Local Development

File: `.env.local` (already created)

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## 🧪 Testing Deployment

### Test the Customer Portal

1. Deploy to Vercel
2. Get your deployment URL: `https://your-app.vercel.app`
3. Update backend's `FRONTEND_URL` environment variable:
   ```bash
   FRONTEND_URL=https://your-app.vercel.app
   ```
4. Create a test ticket in your backend
5. Visit: `https://your-app.vercel.app/tickets/TKT-00001?token=YOUR_TOKEN`

### Test Email Links

When tickets are created, emails will now contain links like:
```
https://your-app.vercel.app/tickets/TKT-00123?token=abc123...
```

---

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main`** → Deployed to production
- **Push to any branch** → Creates preview deployment
- **Pull Request** → Creates preview deployment with unique URL

### Deployment URL Pattern

```
Production:  https://supportify-landing.vercel.app
Preview:     https://supportify-landing-git-feature-branch.vercel.app
```

---

## 📊 Post-Deployment Checklist

### 1. Update Backend Environment

Update your backend's environment variables to point to the Vercel deployment:

```bash
# In your backend .env file or hosting platform
FRONTEND_URL=https://your-app.vercel.app
APP_URL=https://your-app.vercel.app
```

This ensures email notifications send the correct ticket URLs.

### 2. Test Customer Portal Flow

- [ ] Create a test ticket
- [ ] Check email notification
- [ ] Click ticket link in email
- [ ] Verify portal loads correctly
- [ ] Test sending a reply
- [ ] Verify reply appears in admin panel
- [ ] Check admin receives notification email

### 3. Configure CORS (if needed)

If you get CORS errors, add your Vercel URL to backend CORS config:

```typescript
// backend/src/server.ts
app.use(cors({
  origin: [
    'https://your-app.vercel.app',
    'http://localhost:3000'
  ]
}));
```

### 4. Monitor Performance

Vercel provides:
- Analytics (View → Analytics tab)
- Build logs (View → Deployments → Click deployment)
- Function logs (View → Functions)

---

## 🐛 Troubleshooting

### Build Fails

**Error**: `Module not found`
- **Solution**: Ensure all dependencies are in `package.json`
- **Run**: `npm install` locally and commit `package-lock.json`

**Error**: `Type errors`
- **Solution**: Fix TypeScript errors locally first
- **Run**: `npm run build` locally to test

### Environment Variables Not Working

- Ensure variable names start with `NEXT_PUBLIC_` for client-side access
- Restart the dev server after adding env vars
- Redeploy after adding env vars in Vercel

### API Requests Fail

**Error**: `Failed to fetch`
- Check `NEXT_PUBLIC_API_URL` is set correctly
- Ensure backend CORS allows your Vercel domain
- Verify backend is running and accessible

### 404 on Ticket Portal

- Ensure you're using the correct URL format: `/tickets/TKT-00123?token=xxx`
- Check that the ticket exists in your database
- Verify the access token is correct

---

## 🎯 Production Optimization

### Performance

Vercel automatically provides:
- ✅ Edge caching
- ✅ Image optimization
- ✅ Gzip compression
- ✅ Global CDN
- ✅ Automatic HTTPS

### Recommended Settings

1. **Enable Speed Insights** (Vercel Dashboard → Speed Insights)
2. **Enable Web Analytics** (Vercel Dashboard → Analytics)
3. **Configure Custom Domain** with SSL
4. **Set up monitoring** (e.g., Sentry, LogRocket)

---

## 📱 Mobile Testing

Test the ticket portal on mobile:
1. Deploy to Vercel
2. Open ticket URL on phone
3. Verify responsive design
4. Test reply functionality
5. Check touch targets are large enough

---

## 🔐 Security Checklist

- [x] `.env.local` is in `.gitignore` (already done)
- [x] API URL uses HTTPS in production
- [x] CORS configured correctly
- [ ] Custom domain has SSL (Vercel provides free)
- [ ] Environment variables are set in Vercel (not in code)
- [ ] Rate limiting enabled on backend API
- [ ] Token validation working

---

## 🚀 Next Steps After Deployment

1. **Set Custom Domain**
   - Go to Vercel → Settings → Domains
   - Add `supportify.no`
   - Configure DNS records

2. **Update Backend URLs**
   - Update `FRONTEND_URL` in backend
   - Update email templates if needed
   - Test ticket creation flow

3. **Monitor**
   - Check Vercel Analytics
   - Monitor error logs
   - Track ticket portal usage

4. **Optimize**
   - Enable Web Vitals monitoring
   - Set up error tracking (Sentry)
   - Configure analytics (Google Analytics)

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Deployment Issues**: Check Vercel build logs

---

## 🎉 You're All Set!

Your Supportify landing page and customer ticket portal are now deployed to Vercel!

**Your URLs:**
- Landing Page: `https://your-app.vercel.app`
- Ticket Portal: `https://your-app.vercel.app/tickets/[ticketNumber]?token=xxx`

**What happens now:**
1. Customers receive email with ticket link
2. Click link → Opens your Vercel-hosted portal
3. Can view ticket and send replies
4. You receive notification emails
5. Full conversation thread maintained

Happy deploying! 🚀
