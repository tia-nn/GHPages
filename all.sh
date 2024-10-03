git submodule update --init

cp index.html dist

# PDF-Writer
cd PDF-Writer
npm install
cd src/lsp-worker/antlr/
docker-compose run antlr4-builder
cd -
npm run build
cd ..
cp -r PDF-Writer/dist/pdf-writer/ dist/

# cpu-showcase
cd cpu-showcase
npm install
npm run build
cd ..
cp -r cpu-showcase/public dist/cpu-showcase
