// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

formatOutputLabel();

function formatOutputLabel() {
  const word = '@ciao@ @come@ @va?@';
  // Test 1 
  // test1();
  // Test 2 
  // const tokens = extractTokensInWord(word);
  // console.log(tokens)
  // Test 3 
  const tokens2 = extractTokensInWord_V2(
    word, 
    { separator: true}
  );
  console.log(tokens2)
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

/**Better version of the extractTokensInWord function. */
function extractTokensInWord_V2(word, config) {
  const results = []; 
  const availableRegex = {
    re_no_sep : /@(.*?)@/g,
    re_with_sep : /(@.*?@)/g
  };
  const re = config.separator ? availableRegex.re_with_sep : availableRegex.re_no_sep;
  let text;

  while ((text = re.exec(word))) {
    results.push(text[1]);
  }

  return results;
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