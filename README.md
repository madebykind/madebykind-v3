# Modern, flexible, rapid! 🚀

> Hugo, Webpack, PostCss, Tailwindcss & Netlify!

[![Netlify Status](https://api.netlify.com/api/v1/badges/fcec7f92-d66c-4674-9efc-3f74c97f6f05/deploy-status)](https://app.netlify.com/sites/madebykind/deploys)

## Features

- Clean, simple design.
- Typography focussed on readability.
- Accessible by default.
- Markdown for content.
- Dark / Light theme.
- CSS variables.
- Tailwindcss for further development
- Purgecss to remove unused styles
- 100, 100, 100, 100 score on Google Lighthouse.
- Netflify CMS ready.
- 1-click deployment [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/madebykind/madebykind-v3)

## Local development

Assumes that you are on Mac OS and have Homebrew installed…

1. Install Hugo, the static site generator `brew install hugo`
1. Clone the code base `git clone https://github.com/madebykind/madebykind-v3`
1. Install all the dependencies `yarn`
1. Build all the things, in memory, and watch all the things `yarn dev`
1. If things ever go pear-shaped `yarn clean` will remove `/node_modules` reinstall everything from scratch and remove the build output directory `/dist/` to leave you with a box-fresh and squeaky clean dev environment.

That's it. Netlify build's everything on Git push. If you need to deploy somewhere else `yarn build` the dist directory is the complete built site.
