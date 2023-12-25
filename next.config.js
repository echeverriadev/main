/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { i18n } = require('./next-i18next.config')

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    harryPotter : `harryPotter@${process.env.URL_APP_HARRY_POTTER}/_next/static/${location}/remoteEntry.js`,
    rickAndMorty : `rickAndMorty@${process.env.URL_APP_RICK_AND_MORTY}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io","rickandmortyapi.com"],
  },
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