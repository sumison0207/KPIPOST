function postSlack() {
  var obj = SpreadsheetApp.openById('');//スプシURLの真ん中のところを入れる
  
              
              
  var sheet = obj.getSheetByName("シート1");

  //　シートのセルを指定した後、セルの内容を取得している
  var values = sheet.getRange(1,2).getValue();
  var values1 = sheet.getRange(2,2).getValue();
  
  //上記で取得したvalues変数（セルの内容）をSlackに綺麗に表示されるようにtext変数にする
  var text = ("残りチーム経由入会数:" + values + "\n"+ "残りエントリー数:" + values1 +"\n" +"詳細は以下URL"+"\n"+"URL貼れる");

  //データをJSON形式にする
  //名前（name）にtextを含む必要がある
  var payload = {
        "text": text,
        'icon_emoji': ':hedgehog:',  //ここでアイコンを指定
       　"username" : "これが現実",
    };
  
  //postオプションを指定
   var options = {
        "method": "POST",
        'contentType' : 'application/json',
  //JSONオブジェクトを文字列にする
        "payload": JSON.stringify(payload)
    };

  // UrlFetchAppを使って、POSTする
    var url = "";//webhookのURL
    UrlFetchApp.fetch(url, options);
};