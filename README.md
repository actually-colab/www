# www

[![Netlify Status](https://api.netlify.com/api/v1/badges/079c78be-b496-487e-9488-514132ae71f9/deploy-status)](https://app.netlify.com/sites/actuallycolab/deploys) [![Validation](https://github.com/actually-colab/www/actions/workflows/validation.yml/badge.svg)](https://github.com/actually-colab/www/actions/workflows/validation.yml) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/actually-colab/www.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/actually-colab/www/context:javascript) [![Lines of Code](https://tokei.rs/b1/github/actually-colab/www)](https://github.com/actually-colab/www)

Website landing page and authentication redirect for [@actually-colab](https://github.com/actually-colab)

## Dev Setup

1. Create a file `.env.development.local` and set the variables in `.env` to the development values

## Prod Setup

1. Create a file `.env.production.local` and set the variables in `.env` to the production values

## Scripts

- `yarn install` to install the dependencies
- `yarn start` to start the development server
- `yarn deploy` to deploy to production
- `yarn format` to format the code with Prettier
- `yarn eslint` to lint with eslint
- `yarn validate` to verify TypeScript with TSC

## License

`@actually-colab/www` is [GPLv2 licensed](./LICENSE)
