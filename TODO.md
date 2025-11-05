# Phase 1 — Architecture & Setup TODO

- [x] Initialize git repository in the root.
- [x] Create pnpm-workspace.yaml to define the monorepo workspaces (packages/*).
- [x] Create root package.json with dependencies: @turbo/gen, typescript, eslint, prettier, husky, etc.
- [x] Create turbo.json with basic pipeline configuration for build, lint, test.
- [x] Create tsconfig.base.json for shared TypeScript configuration.
- [x] Create packages/ directory with subdirectories: core, css, react, vue, angular, svelte, docs.
- [x] For each package, create a basic package.json with name, version, and scripts.
- [x] Create .eslintrc.js and .prettierrc at root with standard configs.
- [x] Setup Husky with pre-commit hook for lint-staged.
- [x] Create .github/workflows/ci.yml for basic CI/CD (install, lint, build).
- [x] Create README.md with project description and setup instructions.
- [ ] Run pnpm install to install dependencies.
- [ ] Run pnpm run build to verify Turborepo setup.
- [ ] Run pnpm run lint to check ESLint and Prettier.
- [ ] Test git commit to ensure Husky hooks work.
