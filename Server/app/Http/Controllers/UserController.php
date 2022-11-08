<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Str;
use Symfony\Component\VarDumper\VarDumper;

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
        $user->save();
        return dd($request->all());
    }
    public function login(Request $request)
    {
        $user = User::where('name', $request->name)->first();
        if ($user) {
            if ($user->password == $request->password) {
                $user->api_token = Str::random(80);
                $user->save();
                return response()->json([
                    'status' => 'success',
                    'api_token' => $user->api_token
                ]);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Mauvais mot de passe'
                ]);
            }
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Nom d\'utilisateur inconnu'
            ]);
        }
    }
    public function register(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->password = $request->password;
        $user->api_token = Str::random(80);
        $user->save();
        return response()->json([
            'status' => 'success',
            'api_token' => $user->api_token
        ]);
    }
}

