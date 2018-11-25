// 初心者向けの本表示リスト

  var begin_lists=[
  "<div class='book'><div class='book-link pink'><a href='kyoyo.html'><img src='../image/kyoyo2.jpg'><p class='book-title'>教養としてのプログラミング講座</p><p class='book-title'>¥842</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='aidelia.html'><img src='../image/aidelia2.jpg'><p class='book-title'>プログラミングをはじめよう</p><p class='book-title'>¥1.123〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='korekara.html'><img src='../image/korekara2.jpg'><p class='book-title'>これからはじめる HTML & CSSの本</p><p class='book-title'>¥2,138〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='dokugakupro.html'><img src='../image/dokugakupro2.jpg'><p class='book-title'>Python言語の基本から仕事のやり方まで</p><p class='book-title'>¥2,200</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='sukkirijava.html'><img src='../image/sukkirijava2.jpg'><p class='book-title'>スッキリわかるJava入門</p><p class='book-title'>¥2,376〜</p></a></div></div>"
  ];

// 中級者向けの本表示リスト

  var expert_lists=[
  "<div class='book'><div class='book-link pink'><a href='kyoyo.html'><img src='../image/kyoyo2.jpg'><p class='book-title'>教養としてのプログラミング講座</p><p class='book-title'>¥842</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='aidelia.html'><img src='../image/aidelia2.jpg'><p class='book-title'>プログラミングをはじめよう</p><p class='book-title'>¥1.123〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='korekara.html'><img src='../image/korekara2.jpg'><p class='book-title'>これからはじめる HTML & CSSの本</p><p class='book-title'>¥2,138〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='dokugakupro.html'><img src='../image/dokugakupro2.jpg'><p class='book-title'>Python言語の基本から仕事のやり方まで</p><p class='book-title'>¥2,200</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>"
  ];


// 上級者向けの本表示リスト

  var senior_lists=[
  "<div class='book'><div class='book-link pink'><a href='kyoyo.html'><img src='../image/kyoyo2.jpg'><p class='book-title'>教養としてのプログラミング講座</p><p class='book-title'>¥842</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='aidelia.html'><img src='../image/aidelia2.jpg'><p class='book-title'>プログラミングをはじめよう</p><p class='book-title'>¥1.123〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='korekara.html'><img src='../image/korekara2.jpg'><p class='book-title'>これからはじめる HTML & CSSの本</p><p class='book-title'>¥2,138〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='dokugakupro.html'><img src='../image/dokugakupro2.jpg'><p class='book-title'>Python言語の基本から仕事のやり方まで</p><p class='book-title'>¥2,200</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>",
  "<div class='book'><div class='book-link pink'><a href='3stepruby.html'><img src='../image/3stepruby2.jpg'><p class='book-title'>３ステップでしっかり学ぶRuby入門</p><p class='book-title'>¥2,570〜</p></a></div></div>"
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
