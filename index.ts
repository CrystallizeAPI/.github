#!/usr/bin/env node
import meow from "meow";
import { run } from "./src/cli.js";

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = parseInt(semver[0]);
const minVersion = 16;

if (major < minVersion) {
    console.log(`You are running Node.js v${currentNodeVersion}. OSS Releaser requires Node ${minVersion} or higher.`);
    process.exit(1);
}
const cli = meow(`Usage
$ @crystallizeapi/github-profile-generator`, { importMeta: import.meta });


run(cli.input, cli.flags).then((code) => {
    process.exitCode = code;
});



