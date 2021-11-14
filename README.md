
<h1 align="center">Job-Search-App</h1>


<div align="center">
  <h3>
    <a href="https://github.com/oguzhancvdr/rnJobSearch">
      Project Source
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

<img width=300 src="https://user-images.githubusercontent.com/67654732/123466565-63980180-d5e7-11eb-8213-bb6dd3794494.png" />

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React Native](https://reactnative.dev/)

## Features

- The application comprises use of :
  * Axios 
  * Async storage
  * React stack navigation 
  * React-native modal
  * React-native vector-icons
  * HTML View

- Introduction is the landing page of the application. In this page user can select a programming language among the toucheable opacity items in the horizontal flatlist.
- Once the user selects a programming language, the page is diverted to the Jobs Page. Here the filtered jobs in accordance with the selected language are listed as cards.
- Once the user selects a job, a modal pops up showing the details of the job in HTML view. 
- The user can add the job item to the Saved Jobs list by clicking a button on the card. The list is stored in the async storage.
- By clicking the 'Saved Jobs' button the user is diverted to the Saved Jobs page. Here, the user can see the list of saved jobs, and can delete job items by clicking on the trash icon.

## How To Use

To use this application, the packages for Navigation, Moment, Modal, Vector Icons and Firebase should be installed/identified with prior to running the app. From your command line:

```
//-----AXIOS-------------------

//https://www.npmjs.com/package/react-native-axios

$ npm install axios

//-----ASYNC STORAGE-----------

//https://github.com/react-native-async-storage/async-storage

//https://react-native-async-storage.github.io/async-storage/docs/install/

$yarn add @react-native-async-storage/async-storage

$npx pod-install

//-----REACT NAVIGATION--------

//https://reactnavigation.org/docs/getting-started

$yarn add @react-navigation/native

$yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

$npx pod-install ios

//Add the following line to the top of the index.js file

@import 'react-native-gesture-handler';

$yarn add @react-navigation/stack

//-----MODAL-------------------

//https://github.com/react-native-modal/react-native-modal

$yarn add react-native-modal


//-----VECTOR ICONS------------

//https://github.com/oblador/react-native-vector-icons

$ npm install --save react-native-vector-icons

//Detailed directions are stated in the package document. In this project only "FontAwesome" was uploaded and used among other alternatives.

//https://oblador.github.io/react-native-vector-icons/

//-----HTML VIEW---------------

//https://github.com/jsdf/react-native-htmlview

$npm install react-native-htmlview --save

```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->
- [Axios](https://www.npmjs.com/package/react-native-axios)
- [APIs](https://jobs.github.com/positions)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Navigation](https://reactnavigation.org/docs/getting-started)
- [Modal](https://github.com/react-native-modal/react-native-modal)
- [Vector Icons - Usage](https://github.com/oblador/react-native-vector-icons)
- [Vector Icons - List](https://oblador.github.io/react-native-vector-icons/)
- [HTML View](https://github.com/jsdf/react-native-htmlview)


## Contact

<ul>
  <li>LinkedIn: <a href="https://www.linkedin.com/in/oguzhan-cavdar/" rel="nofollow">@Oguzhan Cavdar</a></li>
  <li>oguzhancavdar06@gmail.com</li>
</ul>
