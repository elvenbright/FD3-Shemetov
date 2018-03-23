const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = { 
    entry: "./index.html", // основной файл приложения
    output:{ 
        path: __dirname, // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    }, 
}