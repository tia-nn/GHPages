git submodule update --init

cp index.html dist

# PDF-Writer
cd PDF-Writer
npm install
cd src/components/writer/language/parser/antlr/
antlr4 -Dlanguage=TypeScript -visitor -o dist PDFLexer.g4 PDFParser.g4
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
