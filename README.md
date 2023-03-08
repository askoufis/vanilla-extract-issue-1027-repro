# Vanilla Extract Issue 1027 Reproduction

Reproduction for [issue 1027].

Seems like the likely culprit is [@vanilla-extract/integration@6.1.1][integration release].

[issue 1027]: https://github.com/vanilla-extract-css/vanilla-extract/issues/1027
[integration release]: https://github.com/vanilla-extract-css/vanilla-extract/releases/tag/%40vanilla-extract%2Fintegration%406.1.1

## Steps to reproduce

1. Clone repo
1. `pnpm install`
1. `pnpm dev`. Page loads as expected.
1. Bump `@vanilla-extract/integration` to version `6.1.1`.
1. `pnpm install`
1. `pnpm dev`. Page no longer loads and an error is logged in the browser console.
