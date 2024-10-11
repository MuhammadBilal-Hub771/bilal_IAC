module.exports = {
  apps: [
    {
      name: "mern-app",
      script: "/home/ubuntu/MERN_app/mern-tutorial/backend/server.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};

