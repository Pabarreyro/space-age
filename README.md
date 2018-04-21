# **Super Galactic**

### _by_ Pablo Barreyro

## Description

An app that determines a user’s age and life expectancy throughout the solar system, reporting it in Earth, Mars, Venus and Jupiter years.


#### Specifications

Behavior | Input | Output
--- | --- | ---
Convert one year into seconds | 1 yr | 3.154e+7
Calculate Earth years (Age<sub>_E_</sub>) from birthday  | [_date: 4/20/2018_]<br>Born: 4/20/2000 | 18
Convert Age<sub>_E_</sub> into:<br><ul><li>Mercury years  (Age<sub>_Me_</sub> = Age<sub>_E_</sub> \ 0.24)<br><li>Venus years (Age<sub>_V_</sub> = Age<sub>_E_</sub> \ 0.62)<br><li>Mars years  (Age<sub>_Ma_</sub> = Age<sub>_E_</sub> \ 1.88)<br><li>Jupiter years (Age<sub>_J_</sub> = Age<sub>_E_</sub> \ 11.86)  | [_date: 4/20/2018_]<br>Born: 4/20/2000 | Age<sub>_E_</sub>: 18<br>Age<sub>_Me_</sub>: 75<br>Age<sub>_V_</sub>: 29<br>Age<sub>_Ma_</sub>: 10<br>Age<sub>_J_</sub>: 2<br>
Estimate remaining years of life from birthday & life expectancy on all planets | [_date: 4/20/2018_]<br>Born: 4/20/2000<br>Expect: 70yr | Age<sub>_E_</sub>: 57<br>Age<sub>_Me_</sub>: 237<br>Age<sub>_V_</sub>: 92<br>Age<sub>_Ma_</sub>: 30<br>Age<sub>_J_</sub>: 5<br>


## Setup/Installation Requirements

* [View/clone directory](https://github.com/pabarreyro/super-galactic);
* Download/install technologies locally if needed (_see below_);
* In command line: run "npm install" in cloned repo root directory.
* For more information on working

## Known Bugs

## Technologies Used

* HTML, CSS, JavaScript
* [Bootstrap 4.1](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [jQuery 3.2.1](https://jquery.com/upgrade-guide/3.0/)
* [Node.js](https://nodejs.org/en/download/package-manager/#macos) & [Node Package Manager](https://www.npmjs.com/get-npm)
* [Webpack](https://webpack.js.org/concepts/)
* [ESLint](https://eslint.org/docs/user-guide/configuring)
* [Jasmine](https://jasmine.github.io/pages/docs_home.html)
* [Karma](https://karma-runner.github.io/2.0/index.html)
* [Babel](https://babeljs.io/docs/setup/)

## License

* MIT

Pablo Barreyro © 2018
