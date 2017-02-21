# AngularModuleRouting


# QUICK TEMAPLATE: for an App with Lazy loaded content

clone this project if you want a quick scaffold with routing and with lazy loaded modules

each section in the site will be lazy loaded 

you can clone and work using the usual Angular 2 cli techniques...from there.

it just takes too long to do all the bioler plate .. even after cli generation, 
so use this template if you want a quick scaffold of a working SPA.


# 1 . MAKING MODULES IN THIS PROJECT

TO MAKE A MODULE 

`ng g m [folderforyourmodules]\[modulename] --routing`

# 2 . ADDING THE ROUTES

Now edit the module you just made's routing file like below

`import { [Whatever]Component } from './[whatever].component';`


`const routes: Routes = [`


`{path: '', component: [Whatever]Component}`


`];`

# 3 . ADDING THE ROUTE YOUR MAIN BOOT ROUTER [usually app/app.routing.ts]


`const routes: Routes = [`


`{ path: '', loadChildren: './modules/[whatever]/[whatever].module#[Whatever]Module' },`


`];`

note the case of your files

# 4 . FINALLY put a 

`[routerLink]="['whatever']"` 

example `<a [routerLink]="['whatever']" >Link to my module</a>`


# Thats it.

# FEATURES 

will be adding firebase and and some other quick templates and will update this repo.
feel free to clone and ask for merging etc.



#INFO FROM THE DEFUALT CLI GENERATED README FILE BELOW

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
