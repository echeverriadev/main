/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    harryPotter : `harryPotter@${process.env.URL_APP_HARRY_POTTER}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
      })
    );
    return config;
  },
};

module.exports = nextConfig;