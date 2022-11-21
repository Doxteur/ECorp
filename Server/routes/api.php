<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;


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

Route::get('/user/{id}', [UserController::class, 'show']);

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

//Test 
Route::middleware('auth:api')->get('/test', function(){
    return "hello world";
});


//Post
Route::middleware('auth:api')->get('/post', [PostController::class, 'index']);
Route::middleware('auth:api')->post('/post', [PostController::class, 'store']);
Route::middleware('auth:api')->delete('/post/{id}', [PostController::class, 'destroy']);

Route::group(['middleware' => ['auth:api']], function() {
    
    Route::get('/user', [UserController::class, 'index']);
  });



