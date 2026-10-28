# Content customization guide

Most site copy is centralized in `src/data/portfolio.js`.

- `profile`: name, email, GitHub, LinkedIn, resume, location.
- `skills`: skill groups and explanatory notes.
- `experience`: employers, dates, responsibilities, and tags.
- `projects`: case studies, problems, approaches, stacks, and caveats.
- `principles` and `learning`: engineering principles and current development goals.

Update the data file rather than searching through JSX. The contact section reads public profile details from Vite environment variables first, with safe dummy defaults.

Before launch:
1. Confirm job dates and responsibilities.
2. Keep project descriptions within what you personally worked on.
3. Remove any item you cannot confidently discuss in an interview.
4. Never include employer source code, credentials, internal hostnames, private supplier details, or customer data.
5. Add verified outcomes only when you can explain how they were measured.
