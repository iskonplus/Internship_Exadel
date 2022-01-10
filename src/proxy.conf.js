const PROXY_CONFIG = [
  {
    context: [
      "/account",
      "/admin",
      "/api",
      "/directory"
    ],
    target: "https://exadel3team.myapptechka.by/",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
]

module.exports = PROXY_CONFIG;
