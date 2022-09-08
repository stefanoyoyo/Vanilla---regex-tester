// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

formatOutputLabel();

function formatOutputLabel() {
  const word = '@ciao@ @come@ @va?@';
  test1();
  const tokens = extractTokensInWord(word);
  console.log(tokens)
}


// #region find tokens in String

/**Funziona. */
/**Function looking for all the tokens matching a specified pattern. */
function extractTokensInWord(word) {
  const tokens = [];
  word.replace(/\@(.*?)@/g, function(a, b) {
    tokens.push(b);
  });
  return tokens;
}

// #endregion 

// #region test stackoverflow 

/**Funziona. Returns :
 * [
 *   "token1",
 *   "token2"
 * ]
*/
function test1() {
  var sql = 'SELECT * FROM {token1} WHERE {token2}';
  var tokens = [];
  sql.replace(/\{(.*?)}/g, function(a, b) {
    tokens.push(b);
  });
  console.log(tokens);
}

// #endregion 