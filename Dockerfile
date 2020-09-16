FROM node:12.18-alpine3.12 as build
WORKDIR /app
COPY . ./
RUN npm install && npm run build && npm prune --production


FROM node:12.18-alpine3.12
WORKDIR /app

COPY --from=build ./app/dist ./dist
COPY --from=build ./app/proto ./proto
COPY --from=build ./app/node_modules ./node_modules

ENV GRPC_PORT=8080
ENV REST_PORT=8081
EXPOSE $GRPC_PORT $REST_PORT
CMD [ "node", "dist/main.js" ]  