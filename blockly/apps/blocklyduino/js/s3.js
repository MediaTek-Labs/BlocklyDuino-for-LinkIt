var creds = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:97cdf1c6-6caa-45c1-a5fa-8d6402cbd491'
});
AWS.config.region = "us-east-1";
AWS.config.credentials = creds;
AWS.config.credentials.get(function(err) {
  if (err) {
    console.log("credentials.get: ".red + err, err.stack);
  }else{
    console.log("Cognito Identify Id: " + AWS.config.credentials.identityId);
  }
});

function uploadFile() {
  var s3BucketName = "blocklyduino";
  var now = new Date();
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var obj = {"date": Blockly.Xml.domToText(xml)};
  var s3 = new AWS.S3({params: {Bucket: s3BucketName}});
  var key = uuid()+".xml";
  var blob = new Blob([JSON.stringify(obj, null, 2)], {type:'text/plain'});
  s3.putObject({Key: key, ContentType: "text/plain", Body: blob, ACL: "public-read"},
  function(err, data){
    if(data !== null){
      alert("お問い合わせ完了致しました");
      var params = {Bucket: s3BucketName, Key: key};
      s3.getObject({
        Bucket: s3BucketName,
        Key: key
      }, function(err, data) {
        console.log(data.Body.toString());
      });
    }
    else{
      alert("Upload Failed" + err.message);
    }
  });
}

function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}
