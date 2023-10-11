import "./styles.css";

const onClickAdd = () =>{
  // テキストボックスの値を取得し、テキストボックスを初期化
  // ①テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // ②テキストボックスを初期化
  document.getElementById("add-text").value = "";
  // 取得したテキストのタスクを未完了リストに追加
  createIncompleteList(inputText);
}

/**
 * 未完了リストから指定の要素を削除
 * @param {*} target 削除する要素
 */
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

/**
 * 未完了リストにタスクを追加する関数
 * @param {*} text タスク名
 */
const createIncompleteList = (text) =>{
  // 追加する要素を生成
  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  // クラス名を設定
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  // クラス名を設定
  p.className = "taskname";
  // テキストボックスの値を格納
  p.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.className = "taskcomp";
  // ボタンの中の文字を追加
  completeButton.innerText = "完了";
  // イベントの付与
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncompleteList(div.parentElement);

    // 完了リストに追加する要素
    const addTarget = div.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    // div以下を初期化
    addTarget.firstElementChild.textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    // クラス名を設定
    p.className = "taskname";
    // 引数で受け取った文字列を格納
    p.innerText = text;
    
    // button(戻す)を生成
    const backButton = document.createElement("button");
    // ボタンの中の文字を追加
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () =>{
      // 押された戻すボタンのliタグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.firstElementChild.appendChild(p);
    addTarget.firstElementChild.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

    // // 自作
    // // 完了リストに追加
    //  onClickComplete(p.innerText);
    // // 未完了リストから削除
    //  deleteFromIncompleteList(div.parentElement);
  });

  // button(完了)生成
  const deleteButton = document.createElement("button");
  // ボタンの中の文字を追加
  deleteButton.innerText = "削除";
  // イベントの付与
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのliタグを未完了リストから削除
    // liタグはdivタグの親なのでdiv.parentElementで取得
    deleteFromIncompleteList(div.parentElement);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素にdivタグを設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
}

/**
 * 自作
 * @param {*} inputText 
 */
// const onClickComplete = (inputText) => {

//   // liタグを生成
//   const li = document.createElement("li");
  
//   // divタグを生成
//   const div = document.createElement("div");
//   // クラス名を設定
//   div.className = "list-row";

//   // pタグを生成
//   const p = document.createElement("p");
//   // クラス名を設定
//   p.className = "taskname";
//   // 引数で受け取った文字列を格納
//   p.innerText = inputText;

//   // button(戻す)を生成
//   const backButton = document.createElement("button");
//   // ボタンの中の文字を追加
//   backButton.innerText = "戻す";
//   backButton.addEventListener("click", () => {
//     alert("戻す");
//   })

//   // divタグの子要素に各要素を設定
//   div.appendChild(p);
//   div.appendChild(backButton);

//   // liタグの子要素にdivタグを設定
//   li.appendChild(div);

//   // 完了リストに追加
//   document.getElementById("complete-list").appendChild(li);
// }

document.getElementById("add-button").addEventListener("click", () => onClickAdd());