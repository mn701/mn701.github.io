<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Test Page</title>

<style>
div{width:auto; height:500px;}
a.button{font-size:12px;}
</style>
</head>
<body>
  <h3>アンカーへ移動てすと</h3>

  <div id="sec1">
  	<h2>section1</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec2">
  	<h2>section2</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec3">
  	<h2>section3</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec4">
  	<h2>section4</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec5">
  	<h2>section5</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec6">
  	<h2>section6</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec7">
  	<h2>section7</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec8">
  	<h2>section8</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <div id="sec9">
  	<h2>section9</h2>
  	<a class="button" href="#">▲ </a>
  </div>

  <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
  <script>
  $(function(){
    let anchor = <?php echo $_GET["sid"];?>;
    anchor = parseInt(anchor)
    move(anchor)
     function move(aid){
       // スクロールの速度
       var speed = 400; // ミリ秒
       const target = $('#sec' + aid)
       console.log(target)
       // 移動先を数値で取得
       var position = target.offset().top
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing')
       return false;
     }
  });
  </script>

</body>
</html>
