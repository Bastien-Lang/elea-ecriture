<?php

namespace App\Models;

use App\Models\GalleryItem;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    protected $fillable = ['name', 'slug'];

    public function items() {
        return $this->hasMany(GalleryItem::class);
    }
}
