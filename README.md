# nextjs

npm init
npm install --save next react react-dom

update package.json

"scripts": {
"dev": "next",
"build": "next build",
"start": "next start"
},

cd pages

touch index.js

export default () => (<div>Hello</div>)
npm install --save @zeit/next-css

touch next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()

npm run dev
