// 初心者向けの本表示リスト

  var begin_lists=[
  "<div class='book'><div class='book-link pink'><a href='kyoyo.html'><img src='../image/kyoyo2.jpg'><p class='book-title'>教養としてのプログラミング講座</p><p class='book-title'>¥842</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='aidelia.html'><img src='../image/aidelia2.jpg'><p class='book-title'>プログラミングをはじめよう</p><p class='book-title'>¥1,123〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='korekara.html'><img src='../image/korekara2.jpg'><p class='book-title'>これからはじめる HTML & CSSの本</p><p class='book-title'>¥2,138〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='dokugakupro.html'><img src='../image/dokugakupro2.jpg'><p class='book-title'>Python言語の基本から仕事のやり方まで</p><p class='book-title'>¥2,200</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='sukkirijava.html'><img src='../image/sukkirijava2.jpg'><p class='book-title'>スッキリわかるJava入門</p><p class='book-title'>¥2,376〜</p></a></div></div>"
  ];

// 中級者向けの本表示リスト

  var expert_lists=[
  "<div class='book'><div class='book-link pink'><a href='nyumongit.html'><img src='../image/nyumongit2.jpg'><p class='book-title'>入門Git</p><p class='book-title'>¥1〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='tetteijs.html'><img src='../image/tetteijs2.jpg'><p class='book-title'>徹底マスター JavaScriptの教科書</p><p class='book-title'>¥2,980〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='reactstart.html'><img src='../image/reactstart2.jpg'><p class='book-title'>React Native+Expoではじめるスマホアプリ開発</p><p class='book-title'>¥3,880〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='perfectruby.html'><img src='../image/perfectruby2.jpg'><p class='book-title'>改訂2版 パーフェクトRuby</p><p class='book-title'>¥3,521</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='sqlbigdata.html'><img src='../image/sqlbigdata2.jpg'><p class='book-title'>ビッグデータ分析・活用のためのSQLレシピ</p><p class='book-title'>¥3,800〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='rails5app.html'><img src='../image/rails5app2.jpg'><p class='book-title'>Ruby on Rails 5 アプリケーションプログラミング</p><p class='book-title'>¥3,888〜</p></a></div></div>"
  ];


// 上級者向けの本表示リスト

  var senior_lists=[
  "<div class='book'><div class='book-link pink'><a href='modernc.html'><img src='../image/modernc2.jpg'><p class='book-title'>モダンC言語プログラミング</p><p class='book-title'>¥2,177〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='cciemondai.html'><img src='../image/cciemondai2.jpg'><p class='book-title'>徹底攻略 Cisco CCIE Routing & Switching 筆記試験対策問題</p><p class='book-title'>¥5,995〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='swiftpocket.html'><img src='../image/swiftpocket2.jpg'><p class='book-title'>[改訂新版]Swiftポケットリファレンス</p><p class='book-title'>¥2,880〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='javaheikou.html'><img src='../image/javaheikou2.jpg'><p class='book-title'>Java並行処理プログラミング</p><p class='book-title'>¥3,000</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='gonyumon.html'><img src='../image/gonyumon2.jpg'><p class='book-title'>Go言語プログラミング実践入門</p><p class='book-title'>¥3,400〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='objectivecsyokai.html'><img src='../image/objectivecsyokai2.jpg'><p class='book-title'>詳解 Objective-C 2.0 第3版</p><p class='book-title'>¥3,672〜</p></a></div></div>"
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
