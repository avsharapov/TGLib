function api_connector(botSecret, appLink) {
  UrlFetchApp.fetch("https://api.telegram.org/bot" + botSecret + "/setWebHook?url=" + appLink);
}


function sendMessage(msg, botSecret, chat_id) {
  let payload = {
    'method': 'sendMessage',
    'chat_id': String(chat_id),
    'text': msg,
    'parse_mode': 'HTML'
  }
  let data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + botSecret + '/', data);
}

