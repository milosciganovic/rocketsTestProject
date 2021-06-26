<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://fatcatcoders.com/static/fatcat-coders-logo-3fd25e8f16f1e62998a26ee55efa368b.svg" alt="Logo" width="280" height="80">

  <h3 align="center">Test app for fat cat coders</h3>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Libraries Used](#libraries-used)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Running](#running)
* [Source Code Overview](#source-code-overview)

<!-- ABOUT THE PROJECT -->
## About The Project

This is a multi platform mobile application for both iOS and Android.

### Built With

* [React Native](https://reactnative.dev/)
    * Several RN modules have been used in order to speed up the development.
    * Check package.json for details
* [TypeScript](https://www.typescriptlang.org/)
    * TypeScript was used as a programming language
* [NPM](https://nodejs.org/en/)
    * NPM (Node Package Manager) was used to install third party packages and to run various scripts necessary during development.

### Libraries Used

Many third party libraries and services were used. These are the most important, the full list can be seen by examining package.json (in the root of the project)

* React Navigation for navigation screens
* Axios - HTTP client
* FastImage - for image performance optimizations
* Redux - for global state menagment 
* React-native-async-storage 
* react-native-bootsplash -for generate and menage bootsplash screen
* react-native-size-matters
* styled-components


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Follow [these instructions](https://reactnative.dev/docs/environment-setup) in order to prepare machine for development, specifically “React Native CLI Quickstart”.


### Installation

1. Clone the repo
```sh
git clone https://github.com/milosciganovic/rocketsTestProject.git
```
2. Install NPM packages (DONT USE yarn!)
```sh
npm install
```
3. Only on Mac, go to "ios" folder, and run
```sh
pod install
```

<!-- RUNNING -->
## Running

After you install the application you can run it with one of the several npm run scripts.

```
npm run android
npm run android-release
npm run ios
npm run ios-iphone-se
npm run ios-release
```

There are several other NPM scripts that can be useful during development. Check package.json for details.


<!-- SOURCE CODE OVERVIEW -->
## Source Code Overview

- Configuration
    - Most of the configuration can be done from “src/app/appConfig.ts”
- Functions 
	- All important functions can be find in "src/functions/core" 
- Redux
	- All global state menagment can be find here "src/redux"
- Custom UI components
    - There are many custom UI components defined here: “src/components”
- Navigation screens
    - All navigation screens are here “src/screens”
- API data handler and endpoints
    - src/api/
- Entities
    - src/entities
        - Data from backend
    - src/entities/CrewMemberEntity.ts
    - src/entities/RocketEntity.ts
        - App
    - src/entities/ThemeEntity.ts


