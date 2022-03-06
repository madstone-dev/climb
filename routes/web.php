<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Post\PostController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

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
