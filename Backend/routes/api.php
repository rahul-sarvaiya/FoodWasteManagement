<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register',[userController::class,'register']);
Route::post('/login',[userController::class,'login']);
Route::post('/tokenStore',[userController::class,'tokenStore']);
Route::post('/emailver',[userController::class,'emailver']);
Route::post('/updatepass',[userController::class,'updatepass']);

Route::post('/register2',[userController::class,'register2']);
Route::post('/login2',[userController::class,'login2']);
Route::post('/tokenStore2',[userController::class,'tokenStore2']);
Route::post('/emailver2',[userController::class,'emailver2']);
Route::post('/updatepass2',[userController::class,'updatepass2']);

Route::post('/acceptfood',[userController::class,'acceptfood']);
Route::post('/acceptwaste',[userController::class,'acceptwaste']);

Route::get('/getrest',[userController::class,'getrest']);
Route::get('/getngo',[userController::class,'getngo']);
Route::get('/getfood',[userController::class,'getfood']);
Route::get('/getwaste',[userController::class,'getwaste']);

Route::post('/donatefood',[userController::class,'donatefood']);
Route::post('/donatewaste',[userController::class,'donatewaste']);
Route::get('/getfood2/{name}',[userController::class,'getfood2']);
Route::get('/getwaste2/{name}',[userController::class,'getwaste2']);
Route::get('/getfood3/{name}',[userController::class,'getfood3']);
Route::get('/getwaste3/{name}',[userController::class,'getwaste3']);