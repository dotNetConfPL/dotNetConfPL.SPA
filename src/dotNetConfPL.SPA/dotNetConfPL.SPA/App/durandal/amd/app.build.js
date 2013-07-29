{
  "name": "durandal/amd/almond-custom",
  "inlineText": true,
  "stubModules": [
    "durandal/amd/text"
  ],
  "paths": {
    "text": "durandal/amd/text"
  },
  "baseUrl": "C:\\Dropbox\\dotNetConfPL\\dotNetConfPL.SPA\\src\\dotNetConfPL.SPA\\dotNetConfPL.SPA\\App",
  "mainConfigFile": "C:\\Dropbox\\dotNetConfPL\\dotNetConfPL.SPA\\src\\dotNetConfPL.SPA\\dotNetConfPL.SPA\\App\\main.js",
  "include": [
    "main-built",
    "main",
    "durandal/app",
    "durandal/composition",
    "durandal/events",
    "durandal/http",
    "text!durandal/messageBox.html",
    "durandal/messageBox",
    "durandal/modalDialog",
    "durandal/system",
    "durandal/viewEngine",
    "durandal/viewLocator",
    "durandal/viewModel",
    "durandal/viewModelBinder",
    "durandal/widget",
    "durandal/plugins/router",
    "durandal/transitions/entrance",
    "services/logger",
    "viewmodels/contact",
    "viewmodels/details",
    "viewmodels/home",
    "viewmodels/sessions",
    "viewmodels/shell",
    "viewmodels/speakers",
    "text!views/contact.html",
    "text!views/footer.html",
    "text!views/home.html",
    "text!views/nav.html",
    "text!views/sessions.html",
    "text!views/shell.html",
    "text!views/speakers.html"
  ],
  "exclude": [],
  "keepBuildDir": true,
  "optimize": "uglify2",
  "out": "C:\\Dropbox\\dotNetConfPL\\dotNetConfPL.SPA\\src\\dotNetConfPL.SPA\\dotNetConfPL.SPA\\App\\main-built.js",
  "pragmas": {
    "build": true
  },
  "wrap": true,
  "insertRequire": [
    "main"
  ]
}