# Multi-stage production Dockerfile for GE-trading-plc (Vite + React SPA)
# Compatible with EthioDeploy, Render, Railway, Fly.io, and Docker hosts

# Stage 1: Build the frontend bundle
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package definitions first for optimal layer caching
COPY package.json ./
COPY client/package*.json ./client/
COPY client/client/package*.json ./client/client/

# Install build dependencies
RUN npm --prefix client/client install

# Copy application source files
COPY client/client ./client/client

# Build the production distribution
RUN npm --prefix client/client run build

# Stage 2: Minimal production runner
FROM node:22-alpine AS runner

WORKDIR /app

# Explicitly set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Install 'serve' globally using modern npm --omit=dev (avoids deprecated production flags)
RUN npm install -g serve --omit=dev

# Copy compiled static assets from builder stage
COPY --from=builder /app/client/client/dist ./dist

# Expose default port (dynamically overridden by cloud host via $PORT)
EXPOSE 3000

# Serve static files with single-page app (SPA) fallback (-s) on all network interfaces
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-3000}"]
