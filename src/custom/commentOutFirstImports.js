const NEWLINE_CHAR = process.platform === `win32` ? `\r\n` : `\n` 

/**
 * Comments out, if the file content starts with import,
 * the data until two consecutive NewLine chars are found ('\n\n').
 *
 * + e.g.
 *
 * ---
 * `fileContent`
 *
 * ```
 *  import * as fs from "fs"
 *  more import data or else
 *
 *  import * as fs from "fs"
 *  more data...
 *```
 *
 * ---
 *
 * `commentOutFirstImports(fileContent)` ->
 *
 * ```
 * / *
 * import * as fs from "fs"
 * more import data or else
 * * /
 *
 * import * as fs from "fs"
 * more data...
 * ```
 * ---
 *
 * @param {string} fileContent
 */
function commentOutFirstImports(fileContent) {
  if (!fileContent.startsWith(`import`)) {
    return fileContent;
  }

  let i = fileContent.indexOf(NEWLINE_CHAR.repeat(2));
  return `/*${NEWLINE_CHAR}` + fileContent.slice(0, i) + `${NEWLINE_CHAR}*/` + fileContent.slice(i);
}


module.exports = {
  commentOutFirstImports,
};
