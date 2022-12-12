<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Str;
use Symfony\Component\VarDumper\VarDumper;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Retrieve a list of all users.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return User::all();
    }
    /**
     * Retrieve a user by their ID.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Attempt to log in a user with the provided credentials.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */

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
                    'api_token' => $user->api_token,
                    'id' => $user->id
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

    /**
     * Attempt to register a user with the provided credentials.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function register(Request $request)
    {
        //Conditions mdp et name

        //Gestion cas erreur si l'utilisateur existe déjà
        $check = User::where('name', $request->name)->first();


        if ($check) {
            return response()->json([
                'status' => 'error',
                'message' => 'Nom d\'utilisateur déjà utilisé'
            ]);
        }
        $request->validate([
            'name' => [
                'required',
                'string',
            ],
            'password' => [
                'required',
                'string',
                'min:6',
                'regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%*]).*$/',
            ]
        ]);


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
