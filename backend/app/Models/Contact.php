<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'message',
    ];

    /**
     * Optionnel : Si tu veux que Laravel traite 
     * les dates d'une certaine manière.
     */
    protected $casts = [
        'created_at' => 'datetime',
    ];
}