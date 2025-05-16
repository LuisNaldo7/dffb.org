# Installation guide for dffb.org

## Setup

1. Install [Docker](https://www.docker.com/)

2. Create data directory

   ```bash
   mkdir ~/dffb.org
   ```

3. Create backup process

- Copy backup script to `~/dffb.org_backup.sh`.

- Make backup script executable

  ```bash
  chmod +x ~/dffb.org_backup.sh
  ```

- Add cronjob to execute the script.

  ```bash
  crontab -e
  ```

  Content: `0 2 1 \* \* /home/nils/dffb.org_backup.sh`

- Check cronjob.

  ```bash
      crontab -l
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
