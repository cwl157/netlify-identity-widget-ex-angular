# netlify-identity-widget-ex-angular
Example of the Netlify Identity Widget in Angular. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6. Run `npm install` to install it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Netlify Integration

There are 2 index files. `index.html` is actually the landing page of the site. This is needed to handle user confirmations and password resets from Netlify. Any other requests to the root of the site are automatically redirected to /app which is where the Angular application starts. The single index file for the actual Angular application is `index_app.html`. On ng build index_app.html gets copied into the dist folder. After it's built, manually copy `/src/index.html` into the dist folder to include it in the app. Copy `_redirects` into the dist folder after build to include it in the app. _redirects tells netlify to redirect /app/* to index_app.html for the Angular application.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
