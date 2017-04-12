FROM node:4-onbuild
COPY dm.js    /js/dm.js
COPY serve.js /serve.js
COPY node_modules /node_modules
EXPOSE 80
CMD ["node", "/serve.js"]
