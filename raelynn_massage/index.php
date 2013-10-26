<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views'
));

// $title = "Keron Therapeutic Massage";
// $header = "<div class='col-md-9 title'><h1>Keron Therapeutic Massage</h1> <p>Phone: 360-485-5384</p></div>";

$app->before(function () use ($app) {
    $app['twig']->addGlobal('layout', $app['twig']->loadTemplate('layout.twig'));
});

$app->get('/', function () use ($app) {
    // if (!isset($home)) {
    //     $app->abort(404, "Post $id does not exist.");
    // }
  return $app['twig']->render('index.html.twig');
});

$app->get('/about', function () use ($app) {
  return $app['twig']->render('about.html.twig');
});

$app->run();





















