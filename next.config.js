const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
    unoptimized: true, // Adicionado para compatibilidade com exportação estática
  },
  output: 'export', // Configurado para exportação estática
  basePath: '/portfoliorianstudio', // Substitua pelo nome do repositório
  assetPrefix: '/portfoliorianstudio', // Substitua pelo nome do repositório
};
