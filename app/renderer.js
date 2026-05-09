"use strict";

const Sentry = require("@sentry/electron");
const Gettings = require("./helpers/settings.js");
const { version: appVersion, vars: pkgVars } = require("../package.json");

let featToggle = {};

if (!process.env.DEBUG_MODE && pkgVars.urlToggles) {
	fetch(pkgVars.urlToggles)
		.then((resp) => resp.json())
		.then((json) => {
			featToggle = json;
			Sentry.init({ dsn: featToggle.enableSentry ? process.env.SENTRY_DSN : "" });
			console.log(featToggle.enableSentry ? "Sentry is enabled" : "Sentry is disabled");
		})
		.catch(() => {});
}

const localeMeta = require("./locale/meta.json");
let localeJson;

function translate(text) {
	const language = Gettings.language;

	if (language == "English") {
		return text;
	} else {
		try {
			if (!localeJson) {
				localeJson = require(`./locale/${localeMeta[language]}`);
			}

			return localeJson[text] || text;
		} catch (e) {
			console.error(e);
			return text;
		}
	}
}

function translateWrite(text) {
	document.write(translate(text));
}

function urlDonate() {
	return pkgVars.urlDonate;
}
