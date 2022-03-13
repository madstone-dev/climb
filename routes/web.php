<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Post\PostController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class,'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function() {
    Route::resources([
        'posts' => PostController::class,
    ]);

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


Route::get('/local-gathering', function () {
    return Inertia::render('LocalGathering');
})->name('local-gathering');

Route::get('/trade', function () {
    return Inertia::render('Trade');
})->name('trade');


require __DIR__.'/auth.php';
