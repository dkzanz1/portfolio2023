/**
 * Commitlint Configuration File
 * Enforces the Conventional Commits Specification (Section 7 of V 2.4 Protocol).
 * * Rules:
 * - Must start with type (feat, fix, chore, etc.)
 * - Must contain a scope if used (e.g., feat(ui))
 * - Must contain a space after the colon (:)
 * - Max length of 100 characters for the header
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "chore",
        "perf",
        "build",
        "ci",
      ],
    ],
    // Scope is optional for simplicity but highly recommended for professionals
    "scope-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]],
  },
};
