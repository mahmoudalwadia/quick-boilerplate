## The content

- [Codebase](#codebase)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Running the app locally](#running-the-app-locally)

### Codebase

**Full-stack JavaScript**: We use Next to power our frontend app. Almost all of the code you'll touch in this codebase will be JavaScript (Typescript).

### Technologies

- **React**: A JavaScript library for building user interfaces
- **Next**: The React Framework for (SSR)
- **emtion**: For CSS-in-JS styling
- **storybook**: UI library documentation
- **Jest**: unit testing
- **Enzyme**: For rendering and snapshots
- **Typescript**: For static typing
- **reactintl**: For internationalize React apps
- **React spring**: For animation

### Folder structure

```sh
UI/
├── **\_tests** : contains general tests for the project
├── .storybook : contains storybook configuration
├── components: contain all the components of the porject which built using the UI library
├── config: contain the global theme, globalstyles and global layouts of the project
├── constants: contain the constants of the project
├── docs: contain the manual docs of the project
├── hooks: contain all the hooks of the project
├── styles: contain the styles utils, mixins, etc
├── localization: contain the setup, configuration and locales of the project
├── pages: contain all the pages of the project
├── public: contain the static files of the project
├── typescript: contains the types for all project
├── ui-library: the library containing the general components
```

### Running the app locally

#### Install packages

```
npm install
```

or

```
yarn
```

#### Runs the app in development mode.

```
npm run dev
```

or

```
yarn dev
```

#### to run the test

```
npm run test
```

or

```
yarn test
```

#### to run the storybook

```
npm run storybook
```

or

```
yarn storybook
```
