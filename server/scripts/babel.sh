babel src/server.js --out-file build/server.js
babel src/bin/www --out-file build/bin/www
babel src/controllers --out-dir build/controllers
babel src/middlewares --out-dir build/middlewares
babel src/helpers --out-dir build/helpers
babel src/routes --out-dir build/routes
