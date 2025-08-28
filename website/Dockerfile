# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/root/.pnpm-store \
    --mount=type=cache,target=/root/.cache/yarn \
    if [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    else npm ci; fi

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx --yes next build

FROM caddy:2.8-alpine AS runtime
WORKDIR /srv
RUN addgroup -S web && adduser -S -G web -H -s /sbin/nologin web
COPY --from=build /app/out /srv
COPY <<'EOF' /etc/caddy/Caddyfile
:8080 {
    root * /srv
    encode zstd gzip
    file_server
    header {
        Content-Security-Policy "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self' data:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'"
        Referrer-Policy "strict-origin-when-cross-origin"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        Permissions-Policy "geolocation=(), camera=(), microphone=(), fullscreen=(self)"
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        Cache-Control "public, max-age=3600"
    }
    handle_path /__health {
        respond 200
    }
}
EOF
RUN chown -R web:web /srv /etc/caddy
RUN apk add --no-cache curl
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD curl -fsS http://127.0.0.1:8080/__health || exit 1
USER web
