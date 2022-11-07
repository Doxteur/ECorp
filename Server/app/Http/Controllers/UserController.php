<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Str;




class UserController extends Controller
{
    //
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->name = "test2";
        $user->email = "test2";
        $user->password = "test2";
        $user->api_token = Str::random(80);
        $user->save();
        return $user;
    }
}
