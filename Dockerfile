FROM node:18.12-bullseye-slim

RUN mkdir /opt/node && chown node:node /opt/node
WORKDIR /opt/node

USER node
COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH

COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig.json ./tsconfig.json
RUN npm run build

CMD ["node", "./dist/index.js"]