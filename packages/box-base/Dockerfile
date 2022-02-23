FROM node:current-alpine
WORKDIR /the/workdir/path/
ADD * /the/workdir/path/
EXPOSE 8080
RUN [ "yarn" ]
ENTRYPOINT [ "node" ]
# CMD [ "./testExec.js" ]