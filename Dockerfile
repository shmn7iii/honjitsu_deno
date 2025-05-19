# https://fresh.deno.dev/docs/concepts/deployment#-docker

FROM denoland/deno:2.3.3

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .

RUN deno cache main.ts \
 && deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
