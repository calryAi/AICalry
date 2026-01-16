module.exports = {
  apps: [
    {
      name: 'calry-ai-web',
      script: 'npm',
      args: 'run start:prod',
      cwd: '/var/www/calry-ai/web',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_API_URL: 'https://api.aicalry.app',
        NEXT_PUBLIC_DOMAIN: 'aicalry.app'
      },
      error_file: '/var/log/pm2/calry-ai-web-error.log',
      out_file: '/var/log/pm2/calry-ai-web-out.log',
      log_file: '/var/log/pm2/calry-ai-web.log',
      time: true
    }
  ]
};
