var filepath = { media: '../../media/', msg_en: "../../msg/js/en.js", msg_zh:"../../msg/js/zh-hant.js"};

(function(){
  var html = "";
  html += '<meta charset="utf-8">';
  html += '<link rel="stylesheet" type="text/css" href="css/style.css">';
  html += '<title>BlocklyDuino</title>';

  html += '<script type="text/javascript" src="js/aws-sdk-2.2.4.min.js"></script>';
  html += '<script type="text/javascript" src="js/s3.js"></script>';

  html += '<script type="text/javascript" src="../../blockly_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../blocks_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../arduino_compressed.js"></script>';
  html += '<script type="text/javascript" src="../../msg/js/en.js"></script>';
  html += '<script type="text/javascript" src="js/Blob.js"></script>';
  html += '<script type="text/javascript" src="js/spin.js"></script>';
  html += '<script type="text/javascript" src="js/FileSaver.min.js"></script>';
  html += '<script type="text/javascript" src="js/blockly_helper.js"></script>';
  html += '<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>';
  html += '<script type="text/javascript" src="js/materialize.min.js"></script>';
  html += '<script type="text/javascript" src="js/jquery.xdomainajax.js"></script>';
  html += '<script type="text/javascript" src="js/jquery.cookie.js"></script>';
  html += '<script type="text/javascript" src="js/setCategoryCharacter.js"></script>';
  html += '<script type="text/javascript" src="js/init.js"></script>';
  html += '<script type="text/javascript" src="js/my_materialize.js"></script>';
  html += '<script type="text/javascript" src="js/ZeroClipboard.js"></script>';
  document.write(html);
})();
