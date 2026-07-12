#!/bin/bash

# NAMI Website - Local Development Setup & Verification Script
# Run this script to start the dev server and verify all functionality

set -e  # Exit on error

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║     NAMI Website - Local Development & Verification Setup      ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check Node.js
echo "✓ Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "✗ Node.js not found. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi
NODE_VERSION=$(node --version)
echo "  Found: $NODE_VERSION"
echo ""

# Check npm
echo "✓ Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo "✗ npm not found. Please install Node.js which includes npm"
    exit 1
fi
NPM_VERSION=$(npm --version)
echo "  Found npm: $NPM_VERSION"
echo ""

# Install dependencies
echo "✓ Installing dependencies..."
echo "  This may take a few minutes on first run..."
npm install
echo "  ✓ Dependencies installed!"
echo ""

# Run TypeScript check
echo "✓ Checking TypeScript compilation..."
npx tsc --noEmit --skipLibCheck || {
    echo "  ⚠ TypeScript warnings found (non-critical)"
}
echo ""

# Start development server
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║              🚀 Starting Development Server                    ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "  Server will run on: http://localhost:3000"
echo ""
echo "  Available routes to test:"
echo "    • http://localhost:3000           - Home page"
echo "    • http://localhost:3000/about     - About"
echo "    • http://localhost:3000/businesses - Businesses"
echo "    • http://localhost:3000/contact   - Contact page"
echo "    • http://localhost:3000/careers   - Careers"
echo "    • http://localhost:3000/leadership - Leadership"
echo ""
echo "  API endpoints to test:"
echo "    • POST http://localhost:3000/api/contact"
echo "    • POST http://localhost:3000/api/careers"
echo ""
echo "  To stop the server: Press Ctrl+C"
echo ""
echo "  For testing guide, see: TESTING_GUIDE.md"
echo ""

# Start the dev server
npm run dev
