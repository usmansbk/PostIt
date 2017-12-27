babel server.js --out-file build/server.js
babel bin/www --out-file build/bin/www
babel controllers --out-dir build/controllers
babel middlewares --out-dir build/middlewares
babel helpers --out-dir build/helpers
babel tests --out-dir build/tests
babel routes --out-dir build/routes

babel db/models --out-dir build/db/models
babel db/migrations --out-dir build/db/migrations
babel db/seeders --out-dir build/db/seeders
babel db/config/config.js --out-file build/db/config/config.js

