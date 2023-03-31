# build environment
FROM node:16.10.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci --silent
COPY . /app
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL $NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_APPLY_DOMAIN
ENV NEXT_PUBLIC_APPLY_DOMAIN $NEXT_PUBLIC_APPLY_DOMAIN
RUN npm run export

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/out /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]