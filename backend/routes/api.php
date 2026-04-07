<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\PublicationController;
use Illuminate\Support\Facades\Route;
use App\Models\Theme;

Route::get('/publications/latest', [PublicationController::class, 'latest']);

Route::get('publications', [PublicationController::class, 'all']);

Route::get('/gallery', function () {
    return Theme::with('items')->get();
});


Route::post('/contact', [ContactController::class, 'store']);

