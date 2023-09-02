### [x] Feature `comment-out-first-imports`:

- Modifies the content of a file.
- If the first line does NOT start with `import`, contents are NOT modified.
- Otherwise comment out from the beginning of the content to the first two consecutive newlines chars (`\n\n`) found.
