# Copilot Instructions for Dell Technologies Azure Stack Documentation

## Repository Overview

This repository contains the **Dell Technologies Solutions for Microsoft Azure** documentation - a Hugo-based static site documenting Dell Integrated System for Microsoft Azure Stack Hub and Dell AX System for Azure Local (formerly Azure Stack HCI). The site is built with Hugo static site generator using Google's Docsy theme and deployed to GitHub Pages.

**Repository Stats:** ~716 content and configuration files, primarily Markdown documentation organized by product and version.

**Key Technologies:**
- **Hugo Extended v0.146.0+** - Static site generator (minimum required for Docsy theme compatibility)
- **Node.js 18+** with npm - Frontend tooling 
- **Go 1.19+** - Hugo modules and theme dependencies
- **Google Docsy Theme** - Documentation theme via Git submodule
- **PostCSS/Autoprefixer** - CSS processing
- **GitHub Actions** - CI/CD deployment to GitHub Pages

## Essential Build Instructions

### Prerequisites Setup (ALWAYS REQUIRED)
```bash
# Verify required versions
node --version    # Should be 18+
go version       # Should be 1.19+
hugo version     # Should be 0.146.0+ extended

# If Hugo is not installed or version is too old, install latest:
# wget https://github.com/gohugoio/hugo/releases/download/v0.146.4/hugo_extended_0.146.4_linux-amd64.tar.gz
# tar -xzf hugo_extended_0.146.4_linux-amd64.tar.gz
# sudo cp hugo /usr/local/bin/

# Initialize Git submodules (CRITICAL - always run first)
git submodule init
git submodule update
# If themes/docsy directory is missing, manually clone:
mkdir -p themes && cd themes && git clone https://github.com/google/docsy.git && cd ..
```

### Build Process (Follow in Order)
```bash
# 1. Install Node dependencies
npm ci

# 2. Install required PostCSS dependencies (must be done explicitly)
npm install -D --save autoprefixer postcss postcss-cli

# 3. Build the site
hugo --baseURL="https://example.com"
```

**Build Time:** ~2-3 seconds for full build (136 pages)

### Common Build Issues and Solutions

**Issue:** Hugo version too old
```
WARN Module "github.com/google/docsy" is not compatible with this Hugo version: Min 0.146.0 extended
```
**Solution:** Install Hugo Extended v0.146.0 or later

**Issue:** Missing themes/docsy directory
**Solution:** Run submodule commands above or manually clone Docsy theme

**Issue:** PostCSS processing errors  
**Solution:** Ensure autoprefixer, postcss, postcss-cli are installed via npm

### Development Workflow
```bash
# Start development server
hugo server --buildDrafts --buildFuture

# Build for different environments
hugo --environment development
hugo --environment production
```

### Testing and Validation
```bash
# Validate links and basic site structure
hugo --baseURL="http://localhost:1313" --buildDrafts

# Check for broken internal links (manual verification required)
# Navigate to generated public/ directory and spot-check key pages
```

## Project Architecture and Layout

### Content Organization
```
content/en/                    # English documentation root
├── _index.html               # Homepage template with Hugo shortcodes
├── docs/                     # Main documentation
│   ├── hub/                  # Azure Stack Hub documentation
│   │   ├── PatchAndUpdate/   # Update procedures by hardware gen
│   │   └── ReleaseNotes/     # Organized by version (2411, 2504, etc.)
│   ├── hci/                  # Azure Local (HCI) documentation  
│   └── references/           # Reference materials
└── search.md                 # Search page configuration
```

### Configuration Structure
```
config/
├── _default/config.toml      # Base Hugo configuration
├── development/config.toml   # Local development overrides
└── production/config.toml    # Production settings with analytics
```

### Theme and Layout Customizations
```
layouts/
├── _partials/               # Custom partial templates
│   ├── head-css.html       # Custom CSS includes
│   ├── scripts.html        # Custom JavaScript
│   └── google_analytics.html
└── _shortcodes/            # Custom Hugo shortcodes
    ├── customtable.html    # Enhanced table formatting
    ├── image.html          # Image processing
    └── swaggerui.html      # API documentation
```

### Static Assets
```
static/                      # Served directly
├── css/                    # Custom stylesheets
├── icons/                  # Product icons (Azure Stack Hub/HCI)
├── js/                     # Custom JavaScript
└── favicons/               # Site favicons

assets/                     # Processed by Hugo Pipes
├── scss/                   # Sass stylesheets
└── icons/                  # SVG icons for processing
```

### CI/CD Pipeline (.github/workflows/deploy.yml)
**Triggers:** Push to main branch, manual workflow dispatch
**Process:**
1. Checkout with submodules (recursive)
2. Setup Hugo latest extended, Go 1.19.1, Node 18
3. Cache npm dependencies
4. Run `npm ci`
5. Install PostCSS dependencies
6. Build with Hugo using BASEURL variable
7. Deploy to GitHub Pages using peaceiris/actions-gh-pages

**Validation Steps:**
- Pull request template requires grammar/spell check, local testing, hyperlink validation
- Manual verification recommended for content changes

## Key Configuration Files
- `config/_default/config.toml` - Main Hugo configuration, theme settings, menu structure
- `package.json` - Node.js dependencies and project metadata  
- `go.mod` - Go module dependencies for Hugo
- `.gitmodules` - Submodule configuration for Docsy theme
- `.github/workflows/deploy.yml` - CI/CD pipeline

## Content Creation Guidelines
- Documentation uses Markdown with Hugo front matter
- Product documentation separated into `/docs/hub/` and `/docs/hci/`  
- Release notes organized by version number
- Custom shortcodes available for enhanced formatting (tables, images, videos)
- Images should be high-resolution and stored in appropriate static directories

## Dependencies Not Obvious from Structure
- **Docsy Theme Submodule:** Critical for site functionality, requires manual initialization
- **PostCSS Processing:** Required for CSS compilation, must install separately 
- **Hugo Extended:** Standard Hugo insufficient, extended version required for Sass processing
- **Base URL Configuration:** Must be set correctly for deployment environment

## Quick Reference Commands
```bash
# Complete setup from scratch
git submodule init && git submodule update && npm ci && npm install -D autoprefixer postcss postcss-cli

# Build site
hugo --baseURL="<target-url>"

# Development server  
hugo server

# Check versions
hugo version && node --version && go version
```

**Trust these instructions** - they are validated and tested. Only search for additional information if these instructions prove incomplete or incorrect for your specific task.