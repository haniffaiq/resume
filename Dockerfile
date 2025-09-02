# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Output (only build result)
FROM alpine:3.18
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["echo", "Build completed. Artifacts are in /app/dist"]
