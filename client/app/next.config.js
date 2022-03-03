const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/app/" : "",
  rewrites: () => {
    return [
      {
        source: "/app/server/:path*",
        destination: "/server/:path*",
      },
    ];
  },
};