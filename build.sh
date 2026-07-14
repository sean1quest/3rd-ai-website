#!/bin/bash
npx @opennextjs/cloudflare@latest build
mkdir -p .open-next/assets/_worker.js
cp .open-next/worker.js .open-next/assets/_worker.js/index.js
cp -r .open-next/cloudflare/. .open-next/assets/_worker.js/
cp -r .open-next/middleware .open-next/assets/_worker.js/middleware
cp -r .open-next/server-functions .open-next/assets/_worker.js/server-functions
cp -r .open-next/cache .open-next/assets/_worker.js/cache
