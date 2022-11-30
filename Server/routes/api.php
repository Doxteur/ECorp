<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikesController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// a delete
//Route::middleware('auth:api')->get('/user', [UserController::class, 'index']);


// Authentification
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

// test pagination on post
Route::group(['middleware' => ['auth:api']], function () {
    
    // Get all posts and by id
    Route::get('/post', [PostController::class, 'index']);
    Route::get('/post/{id}', [PostController::class, 'show']);
    
    // Add post
    Route::post('/post', [PostController::class, 'store']);
    
    //Modify post
    Route::post('/post/modify/{id}', [PostController::class, 'update']);
    
    //Delete post
    Route::delete('/post/{id}', [PostController::class, 'destroy']);

    // Inutile pour le moment
    Route::get('/user/{id}', [UserController::class, 'show']);
    Route::get('/user', [UserController::class, 'index']);
    
    // Like routes
    Route::post('/like', [LikesController::class, 'likePost']);
    Route::post('/unlike', [LikesController::class, 'unlikePost']);
    Route::get('/likes/{iduser}', [LikesController::class, 'getLikes']);

});

//Test à enlever pour la prod
if (env('APP_ENV') === "local") {
    Route::middleware('auth:api')->get('/test', function () {
        return "hello world";
    });
}
