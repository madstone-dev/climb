<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class HomeController extends Controller
{
    public function index()
    {
        
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts' => Post::orderBy('id','desc')
            ->with('user')
            ->with('video')
            ->with('images')
            ->paginate(20)
        ]);
    }
}
