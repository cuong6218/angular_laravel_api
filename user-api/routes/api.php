<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([
   'middleware' => 'api',
    'prefix' => 'auth'
], function ($router)
{
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

//Route::apiResource('users', '\App\Http\Controllers\Api\UserController::class');
Route::prefix('users')->group(function ()
{
    Route::get('', [App\Http\Controllers\Api\UserController::class, 'index']);
    Route::post('store', [App\Http\Controllers\Api\UserController::class, 'store']);
    Route::delete('{id}/delete', [App\Http\Controllers\Api\UserController::class, 'destroy']);
    Route::get('{id}/show', [App\Http\Controllers\Api\UserController::class, 'show']);
    Route::put('{id}/update', [App\Http\Controllers\Api\UserController::class, 'update']);
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
