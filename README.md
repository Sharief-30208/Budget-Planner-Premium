# BudgetWise Premium

A bright, responsive React + Vite personal finance demonstration with User, Admin and Head Admin roles.

## Run
1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the localhost URL printed in the terminal.

## Demo accounts
- User: `user@budgetwise.demo` / `user123`
- Admin: `admin@budgetwise.demo` / `admin123`
- Head Admin: `ceo@budgetwise.demo` / `ceo123`

## Production build
Run `npm run build`, then deploy this folder to Vercel. `vercel.json` provides SPA routing.

## Important
This is a front-end college demo using LocalStorage. Browser-local data is not secure, is not shared between devices, and client-side role checks are not production security. Do not use real financial or sensitive personal data. A real service requires a backend, database, and server-side authorization.

PDF export uses the browser print dialog: choose Save as PDF. CSV export downloads a file.
