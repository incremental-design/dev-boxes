
# before you begin, you need to tell docker what image to start from. See: https://youtu.be/gAkwW2tuIqE?t=186

FROM node:latest

# Create an '/app' directory in your container, and copy your source code into it. See: https://youtu.be/gAkwW2tuIqE?t=227

COPY * /app

# create '/app/node_modules' and install dependencies. See: https://youtu.be/gAkwW2tuIqE?t=278

RUN ["yarn"]

# pass whatever process.env variables your app needs to run with 'ENV'. See: https://youtu.be/gAkwW2tuIqE?t=322
# ENV PORT=8080

# Tell docker to forward the port from the container to the host, with EXPOSE See: https://youtu.be/gAkwW2tuIqE?t=335
# EXPOSE 8080

# tell docker what executable to run when the container starts
ENTRYPOINT ["node" , "yourAwesomeScript.js"]

# note that RUN spawns a shell, while CMD doesn't. See: https://youtu.be/gAkwW2tuIqE?t=350
