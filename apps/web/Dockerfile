FROM node:20-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /workspace

# Workspace manifests first for cacheable installs
COPY package.json package-lock.json* tsconfig.base.json ./
COPY packages ./packages
COPY apps/web/package.json ./apps/web/

RUN npm install --workspace=apps/web --include-workspace-root

# Copy source and build
COPY apps/web ./apps/web

ENV NODE_ENV=production
WORKDIR /workspace/apps/web
RUN npm run build

EXPOSE 3005
CMD ["npx", "tsx", "server.ts"]
