電車の遅延情報をSlackやChatworkに投稿するbotです。

遅延情報は、下記サイト様のものを利用させていただいています。
[鉄道遅延情報のjson](https://rti-giken.jp/fhc/api/train_tetsudo/)

GoogleAppsScriptで書かれているので、このスクリプトをコピーして、Googleドライブに新規作成したGoogleAppsScriptに貼り付けて利用してください。

### 利用方法
trainsの配列に自分が利用する路線名を追加してください。
  ```js
  var trains = [
    "自分が利用する路線名(例:総武線)"
  ];
  ```
chatworkを利用する場合は、chatworkのトークン情報と部屋IDを入れてください。
  ```js
  function chatwork(data){
  var token = "トークン";
  var roomId = "部屋ID";
  ```
slackを利用する場合は、slackのトークン情報とチャンネル名を入れてください。
  ```js
  function slack(data) {
  var token = "トークン";
  var channel = "チャンネル名";
  ```
