<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/hello', [PageController::class, 'hello'])->name('hello');
    Route::get('/about',  [PageController::class, 'about'])->name('about');

    Route::get('/form1', function () {
        $user = Auth::user();

        return Inertia::render('Form1', [
            'username' => $user->name
        ]);
    })->name('form1');

    Route::get('/form2', function () {
        $user = Auth::user();

        return Inertia::render('Form2', [
            'username' => $user->name
        ]);
    })->name('form2');

    Route::get('/form3', function () {
        $user = Auth::user();

        return Inertia::render('Form3', [
            'username' => $user->name
        ]);
    })->name('form3');

    Route::get('/button', function () {
        $user = Auth::user();

        return Inertia::render('Button');
    })->name('button');
    Route::post('/process-data', [PageController::class, 'postData'])->name('post-data');
});

require __DIR__ . '/auth.php';
