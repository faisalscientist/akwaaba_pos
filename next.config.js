/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/admin/auth/set-password",
        destination: "/admin/auth/forgot-password",
        permanent: true,
      },
    ]
  },
}
