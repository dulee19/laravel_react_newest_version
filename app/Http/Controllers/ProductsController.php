<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public static function artikli($grupa_pr_id, $tip_artikla_id) {
        $latest =  DB::table('roba')->where('grupa_pr_id', $grupa_pr_id)->where('tip_cene', $tip_artikla_id)->limit(6)->get();
        foreach ($latest as &$product) {
            $slike = DB::table('web_slika')->where('roba_id', $product->roba_id)->select('putanja')->get();
            $glavna_slika = $slike[0];
            $mpcena = Product::cena($product->mpcena);
            $web_cena = Product::cena($product->web_cena);

            $product->naziv_slugged = Product::slugify($product->naziv);
            $product->glavna_slika = $glavna_slika;
            $product->mpcena = $mpcena;
            $product->web_cena = $web_cena;
        }
        return $latest;
    }
}
