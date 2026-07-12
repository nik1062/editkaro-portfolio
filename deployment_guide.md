# Deploying Editkaro.in to GitHub Pages

Follow this step-by-step guide to push your code and host your new multi-page creative agency portfolio webpage online for free.

## Step 1: Initialize Git and Commit Code
Open your terminal in the project directory (`C:\Users\nikun\OneDrive\Desktop\on work\internship\project 1`) and execute the following commands:

```bash
# Initialize a Git repository
git init

# Stage all files
git add .

# Create your first commit
git commit -m "feat: launch Editkaro agency portfolio website"
```

## Step 2: Create a New GitHub Repository
1. Go to [github.com/new](https://github.com/new) in your web browser.
2. Set the repository name to `editkaro-portfolio`.
3. Set the visibility to **Public** (required for free static hosting on GitHub Pages).
4. **Leave all initialization options unchecked** (do not add a README, gitignore, or license).
5. Click **Create repository**.

## Step 3: Link and Push to GitHub
Link your local project folder to your newly created GitHub repository and upload the code:

```bash
# Set default branch to main
git branch -M main

# Link repository (Replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/editkaro-portfolio.git

# Push files to GitHub
git push -u origin main
```

## Step 4: Activate GitHub Pages
1. Navigate to your repository page on [GitHub](https://github.com).
2. Open the **Settings** tab.
3. Select **Pages** from the left-hand navigation sidebar.
4. Under **Build and deployment**, set the **Source** to `Deploy from a branch`.
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.

---

## 🚀 Live URL
Your website will be published in a few minutes at:
`https://YOUR_USERNAME.github.io/editkaro-portfolio/`
