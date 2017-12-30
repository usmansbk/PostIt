babel server.js --out-file build/server.js
babel bin/www --out-file build/bin/www
babel controllers --out-dir build/controllers
babel middlewares --out-dir build/middlewares
babel helpers --out-dir build/helpers
babel routes --out-dir build/routes
