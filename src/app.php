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
  //     $app->abort(404, "Page does not exist.");
  // }
  return $app['twig']->render('index.html.twig');
});

$app->get('/about', function () use ($app) {
  return $app['twig']->render('about.html.twig');
});

$app->get('/rates', function () use ($app) {
  return $app['twig']->render('rates.html.twig');
});

$app->get('/forms', function () use ($app) {
  return $app['twig']->render('forms.html.twig');
});

$app->get('/testimonials', function () use ($app) {
  return $app['twig']->render('testimonials.html.twig');
});

$app->get('/deeptissue', function () use ($app) {
  return $app['twig']->render('deeptissue.html.twig');
});

$app->get('/swedish', function () use ($app) {
  return $app['twig']->render('swedish.html.twig');
});

$app->get('/sports', function () use ($app) {
  return $app['twig']->render('sports.html.twig');
});

$app->get('/shiatsu', function () use ($app) {
  return $app['twig']->render('shiatsu.html.twig');
});

$app->get('/contact', function () use ($app) {
  return $app['twig']->render('contact.html.twig');
});
// Write things above here

return $app;