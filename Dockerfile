FROM --platform=linux/x86-64 node:20.13.1-alpine3.19 as build

ARG CONFIGURATION

ENV CONFIGURATION=${CONFIGURATION:-development}

WORKDIR /app/src

RUN apk add bash git helm openssh yq github-cli

COPY package.json nx.json tsconfig.base.json ./

RUN npm i --force

COPY . ./

RUN npx nx server adapt-viewer --configuration=$CONFIGURATION

FROM --platform=linux/x86-64 node:20.13.1-alpine3.19

WORKDIR /usr/app

COPY --from=build /app/src/ ./

CMD PORT=8080 node dist/apps/adapt-viewer/server/main.js

EXPOSE 8080