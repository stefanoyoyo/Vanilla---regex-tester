// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

formatOutputLabel();

function formatOutputLabel() {
  const word = '@ciao@ @come@ @va?@';
  const regB = new RegExp('@[a-zA-Z1-9?]*@', 'g');
  const regBa = new RegExp('@[\w]*@', 'gm');
  
  // Mostra uno solo dei 3 gruppi. Capire perchè.
  const resBB = regB.exec(word);
  console.log(resBB)

  test1();
  findTokensInWord(word);

}

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

// #region find tokens in String

/**Funziona. */
/**Function looking for all the tokens matching a specified pattern. */
function findTokensInWord(word) {
  var tokens = [];
  word.replace(/\@(.*?)@/g, function(a, b) {
    tokens.push(b);
  });
  console.log(tokens);
}

// #ensregion 