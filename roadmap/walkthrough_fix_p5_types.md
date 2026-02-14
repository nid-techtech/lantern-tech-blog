# p5 Type Error Fix Walkthrough

Fixed the "Parameter 'p' implicitly has an 'any' type" error in `src/components/NotFoundAnimation.astro`.

### 1. Convert to Explicit TypeScript

Updated the script to use explicit TypeScript syntax. This involves:

1.  Adding type annotation `(p: p5)` to the `sketch` function.
2.  Removing the JSDoc `@param` tag.
3.  Ensuring `p5` is imported.

```typescript
// src/components/NotFoundAnimation.astro

import p5 from "p5";

const sketch = (p: p5) => {
    // ...
}
```

This provides stronger type safety and better IDE support compared to JSDoc.

## Verification

1.  **Build**: Ran `npm run build` to confirm that the Astro build process compiles the TypeScript correctly without errors.

