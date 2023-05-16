NOTES- STEPS.dockerignore file===== This will prevent your local modules and debug logs from being copied onto your Docker image and possibly overwriting modules installed within your image.


ERRORS- SOLUTIONS
- unable to prepare context: unable to evaluate symlinks in Dockerfile path: lstat /Users/eliferdem/09-05-2023/dockerfiles/Dockerfile: no such file or directory
sorted by renaming the file as only Dockerfile

- npm ERR! enoent ENOENT: no such file or directory, open '/usr/src/app/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
When the package.json file isn’t found, then npm throws the ENOENT error.     1.tried adding package.json manually-did not work, 2.added start script to my package.json file. 
The error happens because you have a dependency that doesn’t install correctly. 1.tried to update npm latest version, cleaned npm cache, tried to delete node modules and package-lock.json and reinstall npm however gave me permission error.
error sorted by changing the package.js name into package.json
DOCKER COMMANDS

FROM
MAINTAINER
RUN
CMD                       ENTRYPOINT
LABEL
EXPOSE
ENV
ADD                       COPY
VOLUME
USER
WORKDIR
ARG
ONBUILD
STOPSIGNAL
HEALTHCHECK
SHELL

the difference between CMD and ENTRYPOINT
the difference between COPY and ADD

https://kapeli.com/cheat_sheets/Dockerfile.docset/Contents/Resources/Documents/index