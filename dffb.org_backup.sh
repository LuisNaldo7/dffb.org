#!/bin/bash

# Define the folder to be backed up
FOLDER_TO_BACKUP="dffb.org"

# Create a timestamp
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Define the backup file name
BACKUP_FILE="${FOLDER_TO_BACKUP}_backup_${TIMESTAMP}.zip"

# Zip the folder
zip -r "$BACKUP_FILE" "$FOLDER_TO_BACKUP"

# Print success message
echo "Backup created: $BACKUP_FILE"