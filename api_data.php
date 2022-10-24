<?php
$api_url = 'https://api.newvisionapp.com/v1/Articles/GetTrending?limit=10';
$latest_news = file_get_contents($api_url);
$latest_news = json_decode($latest_news);
$news_feed = array_slice($latest_news, 0, 10);

$api_url2 = 'https://api.newvisionapp.com/v1/Articles/Category?categoryId=22&limit=10&publication=newvision';
$world_news = file_get_contents($api_url2);
$world_news = json_decode($world_news);
$world_news_feed = array_slice($world_news, 0, 9);

$api_url3 = 'https://api.newvisionapp.com/v1/Articles/Category?categoryId=1&limit=10&publication=newvision';
$sports_news = file_get_contents($api_url3);
$sports_news = json_decode($sports_news);
$sports_news_feed = array_slice($sports_news, 0, 9);

$api_url4 = 'https://api.newvisionapp.com/v1/Articles/Category?categoryId=3&limit=10&publication=newvision';
$biz_news = file_get_contents($api_url4);
$biz_news = json_decode($biz_news);
$biz_news_feed = array_slice($biz_news, 0, 9);

$api_url5 = 'https://api.newvisionapp.com/v1/Articles/Category?categoryId=6&limit=10&publication=newvision';
$sci_news = file_get_contents($api_url5);
$sci_news = json_decode($sci_news);
$sci_news_feed = array_slice($sci_news, 0, 9);

$api_url6 = 'https://api.newvisionapp.com/v2/SupplementaryArticles?limit=6';
$supplements = file_get_contents($api_url6);
$supplements = json_decode($supplements);
$supplements_feed = array_slice($supplements, 0, 9);
?>