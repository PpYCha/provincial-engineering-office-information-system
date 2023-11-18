<?php

use App\Http\Controllers\API\InfraStructureController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\RoadController;
use App\Http\Controllers\API\UserController;
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

Route::get('projects', [ProjectController::class, 'index']);
Route::post('/add-project', [ProjectController::class, 'store']);
Route::get('/edit-project/{id}', [ProjectController::class, 'edit']);
Route::put('/update-project/{id}', [ProjectController::class, 'update']);
Route::delete('/delete-project/{id}', [ProjectController::class, 'destroy']);

Route::get('/infrastructures', [InfraStructureController::class, 'index']);
Route::post('/add-infrastructure', [InfraStructureController::class, 'store']);
Route::put('/update-infrastructure/{id}', [InfraStructureController::class, 'update']);
Route::delete('/delete-infrastructure/{id}', [InfraStructureController::class, 'destroy']);

Route::get('/roads', [RoadController::class, 'index']);
Route::post('/add-road', [RoadController::class, 'store']);
Route::put('/update-road/{id}', [RoadController::class, 'update']);
Route::delete('/delete-road/{id}', [RoadController::class, 'destroy']);

Route::post("/user-signup", [UserController::class, 'userSignUp']);
Route::post("/user-signin", [UserController::class, 'userLogin']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/edit-user/{id}', [UserController::class, 'edit']);
Route::put('/update-user/{id}', [UserController::class, 'update']);
Route::delete('/delete-user/{id}', [UserController::class, 'destroy']);

Route::post("/user-login", [UserController::class, 'userLogin']);
// Route::post("/user-signin", "UserController@userLogin");

Route::get("/user/{email}", "UserController@userDetail");

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
