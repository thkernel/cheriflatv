user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
        worker_connections 768;
        # multi_accept on;
}

rtmp {
    server {
         listen 1935;
         chunk_size 4096;
         notify_method get;
         application live/CheriflaTV {
              live on;
              interleave on;
              on_publish http://www.cherifla.com:80/auth;
              hls on;
              hls_path /var/www/hls/live/CheriflaTV/;
              hls_fragment 3s;
              record off;
              #mp4;
              #mp4_buffer_size 4M;
              #mp4_max_buffer_size 10M;
              #mp4_limit_rate on;
       }
    }
}

http {
    # Basic Settings

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    # server_tokens off;

    server_names_hash_bucket_size 64;
    # server_name_in_redirect off;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;


    # SSL Settings

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
    ssl_prefer_server_ciphers on;


    # Logging Settings

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;


    # Gzip Settings

    gzip on;

    # gzip_vary on;
    # gzip_proxied any;
    # gzip_comp_level 6;
    # gzip_buffers 16 8k;
    # gzip_http_version 1.1;
    # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;


    # Virtual Host Configs

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;

    server {
        # listen 80 ou 8080=HTTP, 443 ssl=HTTPS;
        listen 443 ssl;
        server_name cherifla.com;
        # server_name cherifla.com *.cherifla.com;

        # listen 443 ssl; # managed by Certbot
        ssl_certificate /etc/letsencrypt/live/www.cherifla.com/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/www.cherifla.com/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

        location / {
            root html;
            index index.html index.htm;
        }

        # the http end point our web based users connect to see the live stream
        location /live {
                types {
                    application/vnd.apple.mpegurl m3u8;
                    video/mp2t ts;
                    video/mp4 mp4;
                    video/mpeg mpeg mpg;
                }
            alias /var/www/hls/live;
            add_header Cache-Control no-cache;
            #mp4;
            # mp4_buffer_size 4M;
            #mp4_max_buffer_size 10M;
            # mp4_limit_rate on;
            # CORS setup
            add_header 'Access-Control-Allow-Origin' '*' always;
            add_header 'Access-Control-Expose-Headers' 'Content-Length';

            # allow CORS preflight requests
            if ($request_method = 'OPTIONS') {
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Max-Age' 1728000;
                add_header 'Content-Type' 'text/plain charset=UTF-8';
                add_header 'Content-Length' 0;
                return 204;
            }
        }
    }
}


#mail {
#       # See sample authentication script at:
#       # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
# 
#       # auth_http localhost/auth.php;
#       # pop3_capabilities "TOP" "USER";
#       # imap_capabilities "IMAP4rev1" "UIDPLUS";
# 
#       server {
#               listen     localhost:110;
#               protocol   pop3;
#               proxy      on;
#       }
# 
#       server {
#               listen     localhost:143;
#               protocol   imap;
#               proxy      on;
#       }
# }
