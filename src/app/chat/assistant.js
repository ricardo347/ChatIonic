const AssistantV2 = require('ibm-watson/assistant/v2');
var res = 20;

const service = new AssistantV2({
  iam_apikey: 'FnNkUk_YRYZIZ3d-bWRqGtC6XAlE0zGpZD9NTSVOcUi_',
  version: '2019-02-28',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

service.createSession({
    assistant_id: '315959f5-1d0d-4875-9fef-2fc41ed83c5c'
  })
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
      console.log(err);
    });

service.message({
  assistant_id: '315959f5-1d0d-4875-9fef-2fc41ed83c5c',
  session_id: res,
  input: {
    'message_type': 'text',
    'text': 'Ola robotinik'
    }
  })
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.log(err);
  });