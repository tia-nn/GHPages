git submodule update --init

# PDF-Writer
cd PDF-Writer
npm install
cd src/lsp-worker/antlr/
docker-compose run antlr4-builder
cd -
npm run build
cd ..
cp -r PDF-Writer/dist/pdf-writer/ public/

# cpu-showcase
cd cpu-showcase
npm install
npm run build
cd ..
cp -r cpu-showcase/public public/cpu-showcase
