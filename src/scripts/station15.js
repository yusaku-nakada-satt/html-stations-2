function displayList() {
  // "fruits"というIDを持つ要素を取得
  let fruitsDiv = document.getElementById('fruits');

  // "fruits"要素の中の全ての<p>要素を取得
  let pElements = fruitsDiv.getElementsByTagName('p');

  // 新しい<ul>要素を作成
  let ulElement = document.createElement('ul');

  // 各<p>要素に対して
  for (let i = 0; i < pElements.length; i++) {
    // 新しい<li>要素を作成
    let liElement = document.createElement('li');
    // <p>要素のテキストを<li>要素にコピー
    liElement.textContent = pElements[i].textContent;
    // <li>要素を<ul>要素に追加
    ulElement.appendChild(liElement);
  }

// "fruits"要素の内容を新しい<ul>要素で置き換え
fruitsDiv.innerHTML = '';
fruitsDiv.appendChild(ulElement);

}
