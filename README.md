# CaelumpicSete

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## API

This project depends of an API [CaelumPic Server](https://github.com/caelum/caelumpic-server)

## Analise de impacto no curso da versão 7 do Angular e CLI

### 1 
`ng -v` virou `ng version`

### 2
`ng new caelum`
A CLI faz perguntas agora:  
você quer adicionar um módulo de roteamento?  
`[y/N]`  
qual tipo de css vc quer usar?  
CSS/SCSS/SASS/LESS/Stylus  
`[enter]`  

### 3
Criou o **app-routing.module.ts**, importa em **AppModule**, e em **app.component.html** já vem o a tag `<router-outlet></router-outlet>`

### 4
O router módule pode ser feito depois com o generate  
```
ng generate module --routing=true --routingScope=Root
```
os defaults são `false`, e `Child`

### 5
Arrumar Schematics para sempre deixar templates inline, e depois se quiser mudar passar como argumento para a CLI:  
```
ng g c cadastro -t false
```
Vai gerar um arquivo .html para template
