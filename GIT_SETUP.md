# GitHub Authentication Guide

GitHub no longer supports password authentication for HTTPS. You need to use a **Personal Access Token (PAT)**.

## Option 1: Generate a Token (Recommended)

1.  Log in to your GitHub account.
2.  Go to **Settings** (click your profile photo).
3.  Scroll down to **Developer settings** (bottom left).
4.  Select **Personal access tokens** -> **Tokens (classic)**.
5.  Click **Generate new token** -> **Generate new token (classic)**.
6.  Give it a Note (e.g., "Brujita Landing").
7.  Select the **repo** scope (this is required to push code).
8.  Click **Generate token**.
9.  **COPY THE TOKEN IMMEDIATELY**. You won't see it again.

### How to Use the Token

Run the following command in your terminal, replacing `<YOUR_TOKEN>` with the token you just copied:

```bash
git remote set-url origin https://<YOUR_TOKEN>@github.com/EmilseErazo/brujita-candy-landing-v01.git
git push -u origin main
```

## Option 2: GitHub CLI (If installed)

If you have the GitHub CLI (`gh`) installed, run:

```bash
gh auth login
```
Follow the prompts to authenticate via the browser.
