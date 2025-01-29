const fs = require('fs');
const path = require('path');

function csvToJson(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        headers.forEach((header, j) => {
            let value = currentLine[j].trim();

            if (!isNaN(value) && value !== '') {
                value = Number(value);
            }

            if (typeof value === 'string') {
                value = value.replace(/^['"]+|['"]+$/g, '');
            }

            obj[header.trim()] = value;
        });

        result.push(obj);
    }

    return result;
}

// Lista de arquivos CSV e arquivos de leitura
const arquivos = [
    { entrada: './vendors/csv/massaPositivoP.csv', saida: './csvToJson/convMassaPosP.js' },
    { entrada: './vendors/csv/massaPositivoM.csv', saida: './csvToJson/convMassaPosM.js' },
    { entrada: './vendors/csv/massaPositivoG.csv', saida: './csvToJson/convMassaPosG.js' }
];

arquivos.forEach(({ entrada, saida }) => {
    fs.readFile(entrada, 'utf8', (err, data) => {
        if (err) {
            console.error(`Erro ao ler ${entrada}:`, err);
            return;
        }

        const jsonData = csvToJson(data);

        
        const conteudo = `module.exports.array = ${JSON.stringify(jsonData, null, 2)};`;

        fs.writeFile(saida, conteudo, (err) => {
            if (err) {
                console.error(`Erro ao salvar ${saida}:`, err);
                return;
            }
            console.log(`Arquivo JSON salvo com sucesso: ${saida}`);
        });
    });
});
