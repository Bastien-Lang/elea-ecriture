<?php

use App\Http\Controllers\Api\PublicationController;
use Illuminate\Support\Facades\Route;

Route::get('/publications/latest', [PublicationController::class, 'latest']);