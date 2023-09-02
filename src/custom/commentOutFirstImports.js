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

  let i = fileContent.indexOf(`\n`);
  return `/*\n` + fileContent.slice(0, i) + `\n*/` + fileContent.slice(i);
}

module.exports = {
  commentOutFirstImports,
};
