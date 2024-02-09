FROM docker.io/node:20

# Clone and install dependencies
RUN git clone https://github.com/mchan016/cupcake_store.git
WORKDIR /cupcake_store
RUN npm install

EXPOSE 8000
USER 1000
CMD ["node", "server.js"]