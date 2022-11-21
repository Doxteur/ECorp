<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Str;
use Symfony\Component\VarDumper\VarDumper;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //Retourn la liste des utilisateurs
    public function index()
    {
        return User::all();
    }

    //Récupérer un utilisateur par son id
    //Non utilisé dans l'application
    public function show($id)
    {
        return User::find($id);
    }

    //Authentification
    public function login(Request $request)
    {
        //Verification du mot de passe
        //A ajouter hashage de mot de passe
        $user = User::where('name', $request->name)->first();
        if ($user) {
            //Check password hash
            if (Hash::check($request->password, $user->password)) {
                $user->api_token = Str::random(80);
                $user->save();
                return response()->json([
                    'status' => 'success',
                    'api_token' => $user->api_token
                ]);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Mauvais mot de passe',
                    
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
        //Gestion cas erreur si l'utilisateur existe déjà
        $userCheck = User::where('name',$request->name)->first();
        if($userCheck){
            return response()->json([
                'status' => 'error',
                'message' => 'Nom d\'utilisateur déjà utilisé'
            ]);
        }           

        //Création de l'utilisateur
        $user = new User();
        $user->name = $request->name;
        $user->password = Hash::make($request->password);
        $user->api_token = Str::random(80);
        $user->save();
        return response()->json([
            'status' => 'success',
            'api_token' => $user->api_token
        ]);
    }
}

