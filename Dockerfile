# Build stage
FROM node:22.12.0 AS build

## Create app directory
WORKDIR /app

## Bundle app source
COPY . .

## Install app dependencies
RUN yarn

## Build app
RUN yarn build



# Run stage
FROM node:22.12.0

## Switch to less privileged user
USER node

## Create app directory
WORKDIR /app

## Copy app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
# COPY --from=build /app/next.config.mjs ./next.config.mjs

## Expose port
EXPOSE 3001

## Execute app
CMD ["npm", "start"]
