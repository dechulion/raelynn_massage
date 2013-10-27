<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), array(
  'twig.path' => __DIR__.'/views'
));

$app->before(function () use ($app) {
  $app['twig']->addGlobal('layout', $app['twig']->loadTemplate('layout.twig'));
});

// Write things under here

$app->get('/', function () use ($app) {
  // if (!isset($home)) {
  //     $app->abort(404, "Post $id does not exist.");
  // }
  return $app['twig']->render('index.html.twig');
});

$app->get('/about', function () use ($app) {
  return $app['twig']->render('about.html.twig');
});

$app->get('/rates', function () use ($app) {
  return $app['twig']->render('rates.html.twig');
});

// Write things above here

return $app;