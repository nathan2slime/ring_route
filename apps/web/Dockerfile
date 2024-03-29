FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN yarn global add turbo
RUN yarn global add dotenv-cli
COPY . .
RUN turbo prune @clp/web --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/.env.prod ./.env
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

COPY --from=builder /app/out/full/ .
RUN yarn dotenv -- yarn turbo build --filter=@clp/web...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

COPY --from=installer /app/apps/web/next.config.mjs .
COPY --from=installer /app/apps/web/package.json .

COPY --from=installer --chown=nodejs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nodejs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nodejs:nodejs /app/apps/web/public ./apps/web/public

CMD node apps/web/server.js