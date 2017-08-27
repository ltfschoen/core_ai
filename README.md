## Core AI Client

* Run Core API server

* Run in development
  * Install dependencies `npm install`
  * Run `http-server --cors='Access-Control-Allow-Origin'`
  * Open in browser `http://127.0.0.1:8080`

* Deploy to production
  ```
  heroku login
  heroku local web
  heroku apps:create coreai
  heroku config:add ROOT_URL=https://coreai.herokuapp.com
  git remote -v
  git commit --allow-empty -m "Rebuild, heroku"
  git push heroku master
  heroku logs --tail --app coreai
  heroku run bash --app coreai
  ```
