<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Publication;
use Illuminate\Http\JsonResponse;

class PublicationController extends Controller
{
    public function latest(): JsonResponse
    {
        $publication = Publication::latest('published_at')->first();

        if (!$publication) {
            return response()->json(['message' => 'Aucune parution trouvée'], 404);
        }

        return response()->json([
            'title' => $publication->title,
            'description' => $publication->description,
            // Pour le test, on renvoie une image bidon ou le chemin
            'image_url' => asset('storage/' . $publication->image_path), 
        ]);
    }

    public function all() : JsonResponse
    {

        $publications = Publication::orderBy('published_at', 'desc')->get();

        if ($publications->isEmpty()) {
            return response()->json([], 200); 
        }

        $publications->transform(function ($item) {
            $item->image_url = $item->image_path 
                ? asset('storage/' . $item->image_path) 
                : null;
            return $item;
        });

         return response()->json($publications);
    }
}