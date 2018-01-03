babel server/src/server.js --out-file server/build/server.js
babel server/src/bin/www --out-file server/build/bin/www
babel server/src/controllers --out-dir server/build/controllers
babel server/src/middlewares --out-dir server/build/middlewares
babel server/src/helpers --out-dir server/build/helpers
babel server/src/routes --out-dir server/build/routes
