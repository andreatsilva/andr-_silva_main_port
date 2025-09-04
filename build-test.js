#!/usr/bin/env node

// Simple build test script
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);

// Check if all required files exist
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'package.json',
  'vite.config.js',
  'index.html',
  'src/main.jsx',
  'src/App.jsx'
];

console.log('\nChecking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${file}: ${exists ? '✓' : '✗'}`);
});

console.log('\nBuild test completed.');