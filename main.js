function main() {
  var trains = [
    "自分が利用する路線名(例:総武線)"
  ];
  var trainData = fetchTrainData();
  
  for each(var obj in trainData){
    for(var i = 0; i < trains.length; i++){
      if(trains[i] === obj.name){
        slack(obj.company + obj.name + "が遅延しています。");
        chatwork("[info][title]遅延情報[/title]" + obj.company + obj.name + "が遅延しています[/info]");
        //twitterも後で実装
      }
    }
  }
}

//鉄道情報の取得
//JSONの形式は[{name, company, lastupdate_gmt, source}]
function fetchTrainData(){
  var param = {
    method : "GET"
  };
  var url = "https://rti-giken.jp/fhc/api/train_tetsudo/delay.json";
  return JSON.parse(UrlFetchApp.fetch(url, param).getContentText());
}

//chatworkで通知
function chatwork(data){
  var token = "トークン";
  var roomId = "部屋ID";
  var param = {
    headers : {"X-ChatWorkToken" : token}, 
    method : "post",
    payload : {
      body : data,
    }
  };
 
  var url = "https://api.chatwork.com/v1/rooms/" + roomId + "/messages";
  UrlFetchApp.fetch(url, param);
}

//slackで通知
function slack(data) {
  var token = "トークン";
  var channel = "チャンネル名";
  var username = "遅延情報Bot";
  UrlFetchApp.fetch("https://slack.com/api/chat.postMessage?token=" + token + 
                    "&channel=%23" + channel + "&username=" + username + "&text=" + data);
}
