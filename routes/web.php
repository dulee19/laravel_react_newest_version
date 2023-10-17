<?php

use Illuminate\Support\Facades\Route;
use App\Models\Product;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/stranice', function() {
    $stranice = DB::table('web_b2c_seo')->where(array('header_menu'=>1))->orderBy('rb_strane','asc')->get();
    return $stranice;
});

Route::get('/adresa', function () {
    $adresa = DB::table('preduzece')->pluck('adresa');
    return $adresa;
});

// Get all products
Route::get("/artikli/{grupa_pr_id?}/{tip_artikla_id?}", [ProductsController::class, 'artikli']);

// Get single product
Route::get("/artikal/{article}/{slika_id?}", [ProductController::class, 'article']);


Route::get('/brendovi', function () {
	$brendovi = DB::table('proizvodjac')->where('proizvodjac_id','!=',-1)->where(array('brend_prikazi'=>1))->orderBy('rbr','asc')->orderBy('naziv','asc')->get();
    return $brendovi;
});

Route::get('/slajderi', function () {
    $slajderi = DB::table('slajder_stavka')->where('slajder_stavka_id', '!=', -1)->get();
    return $slajderi;
});

// View where ispod Route::get ide
Route::view('/{path?}', 'welcome')
    ->where('path', '.*');