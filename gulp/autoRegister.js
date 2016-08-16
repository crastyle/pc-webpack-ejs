/**
 * Created by wj on 2016/5/26.
 */
'use strict';

const fs = require('fs')

export default function (name, filePath) {
    let page = fs.readFileSync(filePath).toString();
    
    fs.writeFileSync(filePath, page)
}