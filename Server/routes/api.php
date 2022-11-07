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

Route::middleware('auth:api')->get('/user', [UserController::class, 'index']);
Route::middleware('auth:api')->post('/user', [UserController::class, 'store']);
Route::post('/login', [UserController::class, 'login']);

//Post
Route::middleware('auth:api')->get('/post', [PostController::class, 'index']);




