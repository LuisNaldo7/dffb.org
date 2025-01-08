# Installation guide for dffb.org

## Prerequisites

1. Install Docker

2. Create data directory

```bash
mkdir ~/dffb.org
```

## Server Management

Create backup of docker volume. Make sure that `~/dffb.org_backup.sh` exists beforehand.

```bash
cd && sh dffb.org_backup.sh
```

Shutdown server

```bash
docker stop dffb.org-wordpress-prod && docker rm dffb.org-wordpress-prod
```

Run server

```bash
export WORDPRESS_DB_PASSWORD=123

docker run -d \
 -p 3001:80 \
 -e WORDPRESS_DB_HOST="192.168.1.8:3307" \
 -e WORDPRESS_DB_USER="dffb" \
 -e WORDPRESS_DB_PASSWORD="$WORDPRESS_DB_PASSWORD" \
 -e WORDPRESS_DB_NAME="dffb-wordpress-prod" \
 -v /home/nils/dffb.org:/var/www/html \
 --restart always \
 --name dffb.org-wordpress-prod \
 wordpress
```

Inspect logs

```bash
docker logs dffb.org-wordpress-prod -f --tail=100
```
