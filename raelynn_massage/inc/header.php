
<!DOCTYPE HTML>
<html lang="eng">
<head>
  <title><?php echo $title; ?></title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>

  <div class="header">
    <div class="container">
      <div class="row">
        <?php echo $header; ?>
        <div class="col-md-2"><img src="/img/raelynn.jpg" alt="Raelynn Keron" class="portrait"></div>
      </div>
      <div class="external_links">
      <ul>
        <?php foreach (glob(__DIR__. "/../img/glob/*.png") as $social_icon) {
          echo "<a href='#'><img src='/img/glob/" . basename($social_icon) . "'></a>";
        }; ?>
      </ul>
    </div>
    </div>
  </div>

  <div class="navbar">
    <div class="col-md-12 navbar-head">
      <a href="index.php"><img src="/img/koru.jpg" alt=""></a>
    </div>
    <div class="nav">
        <div class="button"><a href="#">About</a></div>
        <div class="button"><a href="#">Rates & Services</a></div>
        <div class="button"><a href="#">Testimonials</a></div>
        <div class="button"><a href="#">Client Forms</a></div>
        <div class="button"><a href="#">Contact</a></div>
    </div>
    <div class="new-client-discount">
      <h3><a href="#">New Client Discount : $45 per hour!<a/></h3>
    </div>
  </div>



<div class="container main-body">

