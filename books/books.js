// 初心者向けの本表示リスト

  var begin_lists=[
  "<div class='book' id='kyoyopro'><div class='book-link pink'><a href='kyoyo.html'><img src='../image/kyoyo2.jpg'><p class='book-title'>教養としてのプログラミング講座</p><p class='book-title'>¥842</p></a></div></div>",
  "<div class='book' id='prohaji'><div class='book-link pink'><a href='aidelia.html'><img src='../image/aidelia2.jpg'><p class='book-title'>プログラミングをはじめよう</p><p class='book-title'>¥1,123〜</p></a></div></div>",
  "<div class='book' id='korekarahaji'><div class='book-link pink'><a href='korekara.html'><img src='../image/korekara2.jpg'><p class='book-title'>これからはじめる HTML & CSSの本</p><p class='book-title'>¥2,138〜</p></a></div></div>",
  "<div class='book' id='pythondoku'><div class='book-link pink'><a href='dokugakupro.html'><img src='../image/dokugakupro2.jpg'><p class='book-title'>Python言語の基本から仕事のやり方まで</p><p class='book-title'>¥2,200</p></a></div></div>",
  "<div class='book' id='3steruby'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>",
  "<div class='book' id='sukijava'><div class='book-link pink'><a href='sukkirijava.html'><img src='../image/sukkirijava2.jpg'><p class='book-title'>スッキリわかるJava入門</p><p class='book-title'>¥2,376〜</p></a></div></div>"
  ];

// 中級者向けの本表示リスト

  var expert_lists=[
  "<div class='book' id='nyugito'><div class='book-link pink'><a href='nyumongit.html'><img src='../image/nyumongit2.jpg'><p class='book-title'>入門Git</p><p class='book-title'>¥1〜</p></a></div></div>",
  "<div class='book' id='tetteimas'><div class='book-link pink'><a href='tetteijs.html'><img src='../image/tetteijs2.jpg'><p class='book-title'>徹底マスター JavaScriptの教科書</p><p class='book-title'>¥2,980〜</p></a></div></div>",
  "<div class='book' id='reactsta'><div class='book-link pink'><a href='reactstart.html'><img src='../image/reactstart2.jpg'><p class='book-title'>React Native+Expoではじめるスマホアプリ開発</p><p class='book-title'>¥3,880〜</p></a></div></div>",
  "<div class='book' id='kaiteiper'><div class='book-link pink'><a href='perfectruby.html'><img src='../image/perfectruby2.jpg'><p class='book-title'>改訂2版 パーフェクトRuby</p><p class='book-title'>¥3,521</p></a></div></div>",
  "<div class='book' id='bigdata'><div class='book-link pink'><a href='sqlbigdata.html'><img src='../image/sqlbigdata2.jpg'><p class='book-title'>ビッグデータ分析・活用のためのSQLレシピ</p><p class='book-title'>¥3,800〜</p></a></div></div>",
  "<div class='book' id='rubyappro'><div class='book-link pink'><a href='rails5app.html'><img src='../image/rails5app2.jpg'><p class='book-title'>Ruby on Rails 5 アプリケーションプログラミング</p><p class='book-title'>¥3,888〜</p></a></div></div>"
  ];


// 上級者向けの本表示リスト

  var senior_lists=[
  "<div class='book' id='modanc'><div class='book-link pink'><a href='modernc.html'><img src='../image/modernc2.jpg'><p class='book-title'>モダンC言語プログラミング</p><p class='book-title'>¥2,177〜</p></a></div></div>",
  "<div class='book' id='tetteccie'><div class='book-link pink'><a href='cciemondai.html'><img src='../image/cciemondai2.jpg'><p class='book-title'>徹底攻略 Cisco CCIE Routing & Switching 筆記試験対策問題</p><p class='book-title'>¥5,995〜</p></a></div></div>",
  "<div class='book' id='kaiteiswi'><div class='book-link pink'><a href='swiftpocket.html'><img src='../image/swiftpocket2.jpg'><p class='book-title'>[改訂新版]Swiftポケットリファレンス</p><p class='book-title'>¥2,880〜</p></a></div></div>",
  "<div class='book' id='javaheko'><div class='book-link pink'><a href='javaheikou.html'><img src='../image/javaheikou2.jpg'><p class='book-title'>Java並行処理プログラミング</p><p class='book-title'>¥3,000</p></a></div></div>",
  "<div class='book' id='goproji'><div class='book-link pink'><a href='gonyumon.html'><img src='../image/gonyumon2.jpg'><p class='book-title'>Go言語プログラミング実践入門</p><p class='book-title'>¥3,400〜</p></a></div></div>",
  "<div class='book' id='syokaiob'><div class='book-link pink'><a href='objectivecsyokai.html'><img src='../image/objectivecsyokai2.jpg'><p class='book-title'>詳解 Objective-C 2.0 第3版</p><p class='book-title'>¥3,672〜</p></a></div></div>"
  ];

  // HTML&CSSの本表示リスト

  var html_lists=[
  "<div class='book'><div class='book-link pink'><a href='korekara.html'><img src='../image/korekara2.jpg'><p class='book-title'>これからはじめる HTML & CSSの本</p><p class='book-title'>¥2,138〜</p></a></div></div>"
    ];

  // JavaScriptの本表示リスト

  var javascript_lists=[
      "<div class='book'><div class='book-link pink'><a href='reactstart.html'><img src='../image/reactstart2.jpg'><p class='book-title'>React Native+Expoではじめるスマホアプリ開発</p><p class='book-title'>¥3,880〜</p></a></div></div>",
      "<div class='book'><div class='book-link pink'><a href='tetteijs.html'><img src='../image/tetteijs2.jpg'><p class='book-title'>徹底マスター JavaScriptの教科書</p><p class='book-title'>¥2,980〜</p></a></div></div>"
    ];

  // Reactの本表示リスト

  var react_lists=[
        "<div class='book'><div class='book-link pink'><a href='reactstart.html'><img src='../image/reactstart2.jpg'><p class='book-title'>React Native+Expoではじめるスマホアプリ開発</p><p class='book-title'>¥3,880〜</p></a></div></div>"
    ];

  // Ruby/Railsの本表示リスト

  var ruby_lists=[
      "<div class='book' id='3steruby'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>",
      "<div class='book' id='kaiteiper'><div class='book-link pink'><a href='perfectruby.html'><img src='../image/perfectruby2.jpg'><p class='book-title'>改訂2版 パーフェクトRuby</p><p class='book-title'>¥3,521</p></a></div></div>",
      "<div class='book' id='rubyappro'><div class='book-link pink'><a href='rails5app.html'><img src='../image/rails5app2.jpg'><p class='book-title'>Ruby on Rails 5 アプリケーションプログラミング</p><p class='book-title'>¥3,888〜</p></a></div></div>"
    ];

    // Pythonの本表示リスト

    var python_lists=[
      "<div class='book' id='pythondoku'><div class='book-link pink'><a href='dokugakupro.html'><img src='../image/dokugakupro2.jpg'><p class='book-title'>Python言語の基本から仕事のやり方まで</p><p class='book-title'>¥2,200</p></a></div></div>"
      ];

    // Swiftの本表示リスト

    var swift_lists=[
      "<div class='book' id='kaiteiswi'><div class='book-link pink'><a href='swiftpocket.html'><img src='../image/swiftpocket2.jpg'><p class='book-title'>[改訂新版]Swiftポケットリファレンス</p><p class='book-title'>¥2,880〜</p></a></div></div>"
      ];

    // Objective-Cの本表示リスト

    var objectivec_lists=[
      "<div class='book' id='syokaiob'><div class='book-link pink'><a href='objectivecsyokai.html'><img src='../image/objectivecsyokai2.jpg'><p class='book-title'>詳解 Objective-C 2.0 第3版</p><p class='book-title'>¥3,672〜</p></a></div></div>"
      ];

    // Gitの本表示リスト

    var git_lists=[
      "<div class='book' id='nyugito'><div class='book-link pink'><a href='nyumongit.html'><img src='../image/nyumongit2.jpg'><p class='book-title'>入門Git</p><p class='book-title'>¥1〜</p></a></div></div>"
      ];

    // SQLの本表示リスト

    var sql_lists=[
      "<div class='book' id='bigdata'><div class='book-link pink'><a href='sqlbigdata.html'><img src='../image/sqlbigdata2.jpg'><p class='book-title'>ビッグデータ分析・活用のためのSQLレシピ</p><p class='book-title'>¥3,800〜</p></a></div></div>"
      ];

    // Javaの本表示リスト

    var java_lists=[
      "<div class='book' id='javaheko'><div class='book-link pink'><a href='javaheikou.html'><img src='../image/javaheikou2.jpg'><p class='book-title'>Java並行処理プログラミング</p><p class='book-title'>¥3,000</p></a></div></div>",
      "<div class='book' id='sukijava'><div class='book-link pink'><a href='sukkirijava.html'><img src='../image/sukkirijava2.jpg'><p class='book-title'>スッキリわかるJava入門</p><p class='book-title'>¥2,376〜</p></a></div></div>"
      ];

    // Cの本表示リスト

    var c_lists=[
        "<div class='book' id='modanc'><div class='book-link pink'><a href='modernc.html'><img src='../image/modernc2.jpg'><p class='book-title'>モダンC言語プログラミング</p><p class='book-title'>¥2,177〜</p></a></div></div>"
      ];

    // Goの本表示リスト

    var go_lists=[
      "<div class='book' id='goproji'><div class='book-link pink'><a href='gonyumon.html'><img src='../image/gonyumon2.jpg'><p class='book-title'>Go言語プログラミング実践入門</p><p class='book-title'>¥3,400〜</p></a></div></div>"
      ];

    // 哲学の本表示リスト

    var tetsugaku_lists=[
      "<div class='book' id='kyoyopro'><div class='book-link pink'><a href='kyoyo.html'><img src='../image/kyoyo2.jpg'><p class='book-title'>教養としてのプログラミング講座</p><p class='book-title'>¥842</p></a></div></div>",
      "<div class='book' id='prohaji'><div class='book-link pink'><a href='aidelia.html'><img src='../image/aidelia2.jpg'><p class='book-title'>プログラミングをはじめよう</p><p class='book-title'>¥1,123〜</p></a></div></div>"
      ];

    // Ciscoの本表示リスト

    var cisco_lists=[
        "<div class='book' id='tetteccie'><div class='book-link pink'><a href='cciemondai.html'><img src='../image/cciemondai2.jpg'><p class='book-title'>徹底攻略 Cisco CCIE Routing & Switching 筆記試験対策問題</p><p class='book-title'>¥5,995〜</p></a></div></div>"
      ];

// ランダム表示のプログラム

function begin_random(){
  var rNo = Math.floor(Math.random() * begin_lists.length);
  document.write(begin_lists[rNo]);
  begin_lists.splice(rNo,1);
}

function expert_random(){
  var rNo = Math.floor(Math.random() * expert_lists.length);
  document.write(expert_lists[rNo]);
  expert_lists.splice(rNo,1);
}

function senior_random(){
  var rNo = Math.floor(Math.random() * senior_lists.length);
  document.write(senior_lists[rNo]);
  senior_lists.splice(rNo,1);
}

function html_random(){
  var rNo = Math.floor(Math.random() * html_lists.length);
  document.write(html_lists[rNo]);
  html_lists.splice(rNo,1);
}

function javascript_random(){
  var rNo = Math.floor(Math.random() * javascript_lists.length);
  document.write(javascript_lists[rNo]);
  javascript_lists.splice(rNo,1);
}

function react_random(){
  var rNo = Math.floor(Math.random() * react_lists.length);
  document.write(react_lists[rNo]);
  react_lists.splice(rNo,1);
}

function ruby_random(){
  var rNo = Math.floor(Math.random() * ruby_lists.length);
  document.write(ruby_lists[rNo]);
  ruby_lists.splice(rNo,1);
}

function python_random(){
  var rNo = Math.floor(Math.random() * python_lists.length);
  document.write(python_lists[rNo]);
  python_lists.splice(rNo,1);
}

function swift_random(){
  var rNo = Math.floor(Math.random() * swift_lists.length);
  document.write(swift_lists[rNo]);
  swift_lists.splice(rNo,1);
}

function objectivec_random(){
  var rNo = Math.floor(Math.random() * objectivec_lists.length);
  document.write(objectivec_lists[rNo]);
  objectivec_lists.splice(rNo,1);
}

function git_random(){
  var rNo = Math.floor(Math.random() * git_lists.length);
  document.write(git_lists[rNo]);
  git_lists.splice(rNo,1);
}

function sql_random(){
  var rNo = Math.floor(Math.random() * sql_lists.length);
  document.write(sql_lists[rNo]);
  sql_lists.splice(rNo,1);
}

function java_random(){
  var rNo = Math.floor(Math.random() * java_lists.length);
  document.write(java_lists[rNo]);
  java_lists.splice(rNo,1);
}

function c_random(){
  var rNo = Math.floor(Math.random() * c_lists.length);
  document.write(c_lists[rNo]);
  c_lists.splice(rNo,1);
}

function go_random(){
  var rNo = Math.floor(Math.random() * go_lists.length);
  document.write(go_lists[rNo]);
  go_lists.splice(rNo,1);
}

function tetsugaku_random(){
  var rNo = Math.floor(Math.random() * tetsugaku_lists.length);
  document.write(tetsugaku_lists[rNo]);
  tetsugaku_lists.splice(rNo,1);
}

function cisco_random(){
  var rNo = Math.floor(Math.random() * cisco_lists.length);
  document.write(cisco_lists[rNo]);
  cisco_lists.splice(rNo,1);
}

// 表示用関数

function begin_display(){
  var count = 1;
  // ここで表示する数を変える
  while(count <= 6){
    begin_random();
    count++
  }
}

function expert_display(){
  var count = 1;
  while(count <= 6){
    expert_random();
    count++
  }
}

function senior_display(){
  var count = 1;
  while(count <= 6){
    senior_random();
    count++;
  }
}

function html_display(){
  var count = 1;
  while(count <= 1){
    html_random();
    count++;
  }
}

function js_display(){
  var count = 1;
  while(count <= 2){
    javascript_random();
    count++;
  }
}

function react_display(){
  var count = 1;
  while(count <= 1){
    react_random();
    count++;
  }
}

function ruby_display(){
  var count = 1;
  while(count <= 3){
    ruby_random();
    count++;
  }
}

function python_display(){
  var count = 1;
  while(count <= 1){
    python_random();
    count++;
  }
}

function swift_display(){
  var count = 1;
  while(count <= 1){
    swift_random();
    count++;
  }
}

function objectivec_display(){
  var count = 1;
  while(count <= 1){
    objectivec_random();
    count++;
  }
}

function git_display(){
  var count = 1;
  while(count <= 1){
    git_random();
    count++;
  }
}

function sql_display(){
  var count = 1;
  while(count <= 1){
    sql_random();
    count++;
  }
}

function java_display(){
  var count = 1;
  while(count <= 2){
    java_random();
    count++;
  }
}

function c_display(){
  var count = 1;
  while(count <= 1){
    c_random();
    count++;
  }
}

function go_display(){
  var count = 1;
  while(count <= 1){
    go_random();
    count++;
  }
}

function tetsugaku_display(){
  var count = 1;
  while(count <= 2){
    tetsugaku_random();
    count++;
  }
}

function cisco_display(){
  var count = 1;
  while(count <= 1){
    cisco_random();
    count++;
  }
}
