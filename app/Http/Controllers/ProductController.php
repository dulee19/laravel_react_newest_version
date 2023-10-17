<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public static function article(Request $request) {
        $roba_id = 0;
        $article = $request->segment(2);
        $artikli = DB::table('roba')->select('roba_id', 'naziv_web')->where(array('flag_prikazi_u_cenovniku'=>1,'flag_aktivan'=>1))->get();
		foreach($artikli as $row){
			if(Product::slugify($row->naziv_web)==$article){
				$roba_id=$row->roba_id;
				break;
			}
		}
		if(!isset($roba_id)){
			$roba_id = 0;
		}
        
        $data = DB::table('roba')->where('roba_id', $roba_id)->get();

        foreach ($data as &$product) {
            $slike = DB::table('web_slika')->where('roba_id', $product->roba_id)->select('putanja')->get();
            $glavna_slika = $slike[0];

            $mpcena = Product::cena($product->mpcena);
            $web_cena = Product::cena($product->web_cena);

            $product->naziv_slugged = Product::slugify($product->naziv);
            $product->glavna_slika = $glavna_slika;
            $product->slike = $slike;
            $product->mpcena = $mpcena;
            $product->web_cena = $web_cena;
        }
        return $data;
    }
}
