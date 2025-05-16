#!/bin/bash

WORK_DIR="/home/nils/"
FOLDER_TO_BACKUP="dffb.org"
BACKUP_DESTINATION_DIR="${WORK_DIR}${FOLDER_TO_BACKUP}_backups/"

# Create a timestamp
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Define the backup file name
BACKUP_FILE_NAME="${FOLDER_TO_BACKUP}_backup_${TIMESTAMP}.zip"

# Create the backup directory
mkdir "$BACKUP_DESTINATION_DIR"

# Zip the folder
zip -r "${BACKUP_DESTINATION_DIR}${BACKUP_FILE_NAME}" "${FOLDER_TO_BACKUP}"

# Print success message
echo "Backup created: $BACKUP_FILE"