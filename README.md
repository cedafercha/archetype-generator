## Description

NodeJS application to generate basic projects using the template file as a repositories dictionary.

## Installation

```bash
$ npm install
```

## Configuring the app

Add the templates you need into the [templates.json](./templates.json) file:

```jsonc
{
  "template-name": "archetype-repository-uri"
}
```

## Running the app

```bash
# template-name: name of project-archetype in template.json file
# project-name: name of your project
# dir: folder dir where you want your project to be created | optional parameter
$ node generate.js <template-name> <project-name> <dir>?
```

## Execution example

```bash
$ node generate.js nest-mongo-graphql cities-microservice ../microservices/
```