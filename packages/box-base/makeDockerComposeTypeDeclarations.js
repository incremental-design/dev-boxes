#! /usr/bin/env node

const { fetch } = require('undici')
const { compile } = require('json-schema-to-typescript')
const { writeFileSync } = require('fs')
const { resolve } = require('path')

let ComposeSchema = '';

let url = 'https://raw.githubusercontent.com/compose-spec/compose-spec/master/schema/compose-spec.json'

fetch(url).then(async (response) => {
  for await (const chunk of response.body) {
    ComposeSchema += Buffer.from(chunk).toString();
  }
}).then(() => {
  return JSON.parse(ComposeSchema)
}).then((parsed) => {
  return compile(parsed)
}).then((compiled) => {
  writeFileSync(resolve(__dirname, 'src', 'utils', 'DockerComposeTypes.ts'), compiled)
})