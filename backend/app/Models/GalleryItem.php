<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Theme;

class GalleryItem extends Model
{
    protected $fillable = ['theme_id', 'title', 'image_path', 'type'];

    public function theme() {
        return $this->belongsTo(Theme::class);
    }

    // Comme pour les publications, on crée l'URL propre pour le front
    public function getImageUrlAttribute() {
        return asset('storage/' . $this->image_path);
    }

    protected $appends = ['image_url'];
}
