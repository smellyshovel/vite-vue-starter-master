# Vite Vue Starter **Master** template

[**A word on terminology.**](<https://en.wikipedia.org/wiki/Master/slave_(technology)>)

## Features

- A slave-library built-in support
- Pre-configured environment (vite, typescript, <s>husky</s> WIP, eslint, prettier)
- Included Vue Router, Pinia, Vue I18n and Tailwind CSS

## What is and for?

A part of the master-[slave](https://github.com/smellyshovel/vite-vue-starter-slave) blueprint-setup for a quick Vue application kickstart.

Useful in cases where a Vue application depends on a shared library developed by the same team as the application itself.

This is the **master** part of the setup.

## Rationale

Imagine you have an application called Todo App. The application has a dependency - a shared component and general-purpose (util) library that's also developed by you (or your team) and is also intended to be used not only in the Todo App, but in some other applications as well. Let's call the library Todo UI.

In such a case it makes the most sense to develop the library as a standalone application and share it using NPM (either globally, or even within a private registry).

Thus, you can later include the library in any other project where it makes sense to use it.

The only issue with such an approach is that you still need some place to test the library. And testing the Todo UI solely inside the Todo App is generally considered a bad practice. Therefore, you'd need to set a testing environment up on the level of the library.

This template does exactly that. It provides you with a ready-to use lib-demo-docs solution, so it **can also be used without the [master](<(https://github.com/smellyshovel/vite-vue-starter-master)>) application**, i.e. as a standalone self-contained library.

_Paradoxically, in this master-slave setup, the completely independent and optionally-standalone part is **slave**, rather than master. In other words, you don't necessarily need the master part for this slave part to work, but you absolutely do need a slave-lib for the master template to work._

There are 4 different patterns which are supported out of the box by design:

### One to one

![One to one use-case](https://raw.githubusercontent.com/smellyshovel/vite-vue-starter-master/main/.github/images/one-to-one.png)

Doesn't make much sense, but is still relevant in cases when you just want to separate a (potentially) re-usable part of your application.

### One to many

![One to many use-case](https://raw.githubusercontent.com/smellyshovel/vite-vue-starter-master/main/.github/images/one-to-many.png)

Probably the most widespread case. A single application consists of many small libraries, each of which is generic enough to be (potentially) shared with other applications.

### Many to one

![Many to one use-case](https://raw.githubusercontent.com/smellyshovel/vite-vue-starter-master/main/.github/images/many-to-one.png)

Common enough pattern, when many independent applications partially share the same codebase.

### Many to many

![Many to many use-case](https://raw.githubusercontent.com/smellyshovel/vite-vue-starter-master/main/.github/images/many-to-many.png)

Basically, the last two patterns combined.

### Sub-slaving

![Sub-slaving use-case](https://raw.githubusercontent.com/smellyshovel/vite-vue-starter-master/main/.github/images/sub-slaving.png)

When there's an application that depends on library 1, that also depends on a library 2. But The library 2 is independent enough to be used a separate "building-block" for another application.

An example of such a scenario might be an application that uses a map-component (lib 1), that for some of its inner purposes relies on Lodash (lib 2). The lib 2 - Lodash - can still be used separately by any other application.

Here also go all the possible variations in relationships between the libraries and master apps.

## Usage

Start with the [slave-library](https://github.com/smellyshovel/vite-vue-starter-slave)'s README. Getting all the slaves up and running is the number zero step. In case where there takes place sub-slaving, start with the deepest dependency there is.

1. Clone the repo and navigate to the folder
2. `rm -rf .git && git init` to re-initialize the `.git` folder to detach the library from _this_ repository
3. List all the _direct_ slaves in the `package.json`'s `dependencies`
4. List all the slaves' names in the `vite.config.ts`'s `optimizeDeps.exclude` array
5. Run `npm install`
6. Link all the slaves: `npm link slave_1 slave_2 link slave_3`
7. Keep developing the application with all the slave-libs being available

## Recommended IDE setup

WebStorm 2022.2 with enabled auto-linting and Prettier-based auto-formatting.
