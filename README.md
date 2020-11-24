# haframjolk.com

This repository contains the code for my website, [haframjolk.com](https://haframjolk.com).

## Usage

### Setup

```sh
git clone git@github.com:haframjolk/haframjolk.com.git
cd haframjolk.com
npm install
```

### Developing

Watches and automatically rebuilds code when changed and keeps browsers in sync.

```sh
npm start
```

### Testing

Tests check for style and code errors in SCSS and JavaScript files, using ESLint and Stylelint.

```sh
npm test -s
```

### Building

Builds the website into the `dist` directory.

```sh
npm run build
```

### Deploying

The website is automatically deployed to GitHub Pages using GitHub Actions when code is pushed to the `main` branch.
