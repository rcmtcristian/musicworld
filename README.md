<div id="top"></div>

<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- <p align="center">
  <a href="https://github.com/Drumpy/vrttv-boilerplate/stargazers">
    <img src="https://img.shields.io/github/stars/Drumpy/vrttv-boilerplate.svg?style=for-the-badge" />
  </a>
  <a href="https://github.com/Drumpy/vrttv-boilerplate/issues">
    <img src="https://img.shields.io/github/issues/Drumpy/vrttv-boilerplate.svg?style=for-the-badge" />
  </a>
</p> -->

<!-- PROJECT LOGO -->
<div align="center">
  <a href="#">
    <img src="https://i.imgur.com/iuMarwG.png" alt="MusicWorld">
  </a>

  <h2 align="center"> Welcome to Music World</h2>

</div>

<!-- ABOUT THE PROJECT -->

# 🤔 What’s this?

Music world aims to provide easy access to finding similar music to your favorite
songs. We have a large database of songs and artist that you can search through to
find similar music to your favorite songs. we also have a database of artist that
you can search through to find similar music to your favorite artist.

# 🔮 What’s inside?

### 📜 Stack

- 🌟 [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - 🔀 [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) - Declarative routing for React apps at any scale.
- 💜 [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript.
- ⚡ [Vite](https://vitejs.dev/) - Next generation frontend tooling.
- ⚙️ [Babel](https://babeljs.io/) with [preset-env](https://babeljs.io/docs/en/babel-preset-env) - The compiler for next generation JavaScript.
- 🎨 [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework.
- 🎨 [SCSS](https://sass-lang.com/documentation) - A popular CSS preprocessor.
- 🔺 [Vercel](https://vercel.com/) - Deploy your application on Vercel.
- ⚙️ [MongoDB](https://www.mongodb.com/) - Database

### 📜 Dependencies

- 🎞 [Barba.js](https://barba.js.org/) - A library for smooth transitions between pages in web applications.
- 🎞 [Gsap](https://greensock.com/gsap/) - A popular animation library for the web.
- 🦥 [Gitmoji](https://gitmoji.dev/) - A library for adding emojis to Git commit messages.
- 💅 [Prettier](https://prettier.io/) - Opinionated Code Formatter.
- 🔍 [ESLint](https://eslint.org/) - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
    - 📦 [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/) - Easy autofixable import sorting.
    - 📦 [Import Plugin](https://github.com/benmosher/eslint-plugin-import/) - Rules that help validate proper imports.
    - 📦 [Tailwind Plugin](https://github.com/francoismassart/eslint-plugin-tailwindcss/) - Plugin for Tailwind CSS usage. And a few other ES2015+ related rules.
- 🐶 [Husky](https://github.com/typicode/husky) - Git hooks made easy.
    - [Commit-msg](https://git-scm.com/docs/githooks#_commit_msg) - A git hook for validating commit messages.
    -  [Pre-commit](https://git-scm.com/docs/githooks#_pre_commit) - A git hook that runs before making a commit.
- 🚫 [Lint Staged](https://github.com/okonet/lint-staged) - Run linters on git staged files.
- ✍️ [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with 🎉 [Gitmoji](https://gitmoji.dev/) - A specification for adding human and machine readable meaning to commit messages.
- 🚦 [GitHub Actions](https://github.com/features/actions) - Automate your workflow on GitHub.
- 👽️ [Spline runtime](https://www.npmjs.com/package/@splinetool/runtime "Spline runtime") - runtime allows you to run Spline scenes in Javascript.
- 💄 [Radix](https://www.radix-ui.com/ "radix") , [ui.shadcn.com](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/docs/lucide-react) -  component library.
- 💄 [Clerk](https://clerk.com/ "clerk") -  User management


### 📜 API's

1.  [SoundCloud Developers](https://developers.soundcloud.com/docs/api/guide#authentication 'SoundCloud Developers') - SoundCloud's official documentation for developers, specifically the section on authentication.
2.  [Spotify Developers](https://developer.spotify.com/documentation/web-api/tutorials/getting-started) - Spotify's official documentation for developers, specifically the section on authentication.


# Optimizations
There is still a long way to go. I still have a lot of design choices ahead of me, such as the mobile responsiveness of the site among many other changes.

>  Validation and filtering: Verifying that the incoming data conforms to the expected format and meets certain criteria. This can involve checking data types, length limits, or specific patterns. For instance, ensuring that an email address follows a valid format or that a numeric value is within an acceptable range.

>  Sanitize the data: To sanitize incoming data means to clean and validate the data before processing or storing it in a system. The process of sanitizing data aims to prevent or mitigate potential security risks, such as injection attacks, cross-site scripting (XSS), or other forms of malicious activities that exploit vulnerabilities in the system.

> Exporting: Allow the user to automatically export the artist list into a spotify playlist in their account

> 3D assets: Migrate from spline to Three.js for the 3d scenes as they will reduce the blocking time by a large margin. Will most likely be using react 3 fiber for the most smooth transition

> DB: Migrate the current database to SQL 


# Lessons Learned:
I have deepened my understanding of authentication and Typescript most of all. I started out by fully typing out the routes for authentication manually without Clerk. This let me fully appreciate all that clerk does to ease the process of auth.

<p align="right">(<a href="#top">back to top</a>)</p>
