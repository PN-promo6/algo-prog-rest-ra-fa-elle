<?php
$albums = file_get_contents('http://localhost:3000/albums');
echo $albums;

$members = file_get_contents('http://localhost:3000/members');
echo $members;

$concertTours = file_get_contents('http://localhost:3000/concertours');
echo $concertTours;

$labels = file_get_contents('http://localhost:3000/labels');
echo $labels;
