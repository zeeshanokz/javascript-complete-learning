# npm Basics

## What it is

**npm** (Node Package Manager) ships with Node.js. It installs packages and runs scripts defined in `package.json`.

A **package** is reusable code published to the npm registry (or private registries).

## Why backend developers use it

- Share libraries (Express, database drivers, validators)
- Pin versions so deploys are reproducible
- Run scripts: `npm test`, `npm start`

## Real-world example

```bash
npm init -y
npm install express
```

Then `require("express")` or `import express from "express"`.

This learning repo intentionally has **no extra production dependencies**. Learn the language first.

## How it connects with Node.js

- `package.json` describes the project
- `node_modules/` holds installed code (never commit it)
- `package-lock.json` locks exact versions

## Common mistakes

- Committing `node_modules`
- Installing everything globally
- Using packages you do not understand (security + bundle size)
- Running `npm install` from random tutorials without reading the package
