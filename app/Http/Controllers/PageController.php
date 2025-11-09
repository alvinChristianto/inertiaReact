<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function hello()
    {
        return Inertia::render('Hello', [
            'name' => 'World'
        ]);
    }

    public function about()
    {
        $user = Auth::user();

        return Inertia::render('About', [
            'username' => $user->name
        ]);
    }
}
