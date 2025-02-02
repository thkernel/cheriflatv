user www - data;
worker_processes auto;
pid / run / nginx.pid;
include / etc / nginx / modules - enabled/*.conf;

events {
    worker_connections 768;
    # multi_accept on;
}

http {
    # Basic Settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    server_tokens off;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_session_timeout 1d;

    # Logging Settings
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Gzip Settings
    gzip on;

# Redirect all HTTP traffic to HTTPS
server {
  listen 80;
  listen [::]:80;
  server_name _;
  return 301 https://$host$request_uri;
}

# HTTPS server with SSL certificate
server {
  listen 443 ssl;
  listen [::]:443 ssl;
  server_name cherifla.com www.cherifla.com;

  ssl_certificate /etc/letsencrypt/live/cherifla.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/cherifla.com/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

  # Serve static content from /var/www/html
  location / {
    root /var/www/html;
    index index.html index.htm;
  }

  # Serve HLS stream from /var/www/hls/live
  location /live {
    types {
      application/vnd.apple.mpegurl m3u8;
      video/mp2t ts;
      video/mp4 mp4;
      video/mpeg mpeg mpg;
    }
    alias /var/www/hls/live;
    add_header Cache-Control no-cache;
  }

  # Disallow access to hidden files
  location ~ /\. {
    deny all;
    access_log off;
    log_not_found off;
  }

  # Disallow access to .htaccess files
  location ~ /\.ht {
    deny all;
    access_log off;
    log_not_found off;
  }

  # Disable directory indexes
  location ~ /$ {
    index index.html index.htm;
  }
}
}



