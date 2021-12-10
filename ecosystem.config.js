module.exports = {
    apps: [{
        name: "21toolate.go",
        script: "npm start",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
