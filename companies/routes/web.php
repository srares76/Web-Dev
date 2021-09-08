<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';


/* My routes */

Route::get('/adminpage', function () {
    return view('adminMainPage');
})->middleware(['auth'])->name('adminpage');

// The 3 admin links
Route::get('/listdata', function () {
    return view('listData');
})->middleware(['auth'])->name('listdata');

Route::get('/adddata', function () {
    return view('addData');
})->middleware(['auth'])->name('adddata');

Route::get('/changedata', [CompaniesController::class, 'provideCompanies'])
    ->middleware(['auth'])
    ->name('changedata');

// AJAX routes
Route::get('/fetchcompanies', [CompaniesController::class, 'getAllCompanies'])
    ->middleware(['auth'])
    ->name('fetchdata');

Route::get('/fetchusers', [UsersController::class, 'getAllUsers'])
    ->middleware(['auth'])
    ->name('fetchdata');

Route::get('/deletecompany', [CompaniesController::class, 'deleteCompany'])
    ->middleware(['auth'])
    ->name('deletecompany');

Route::get('/deleteuser', [UsersController::class, 'deleteUser'])
    ->middleware(['auth'])
    ->name('deleteuser');

Route::post('/addcompany', [CompaniesController::class, 'addCompany'])
    ->middleware(['auth'])
    ->name('addcompany');

Route::post('/adduser', [UsersController::class, 'addUserAuth'])
    ->middleware(['auth'])
    ->name('adduser');

Route::get('/provideusers', [UsersController::class, 'getUsersFromCompany'])
    ->middleware(['auth'])
    ->name('provideusers');

Route::get('/changecompany', [CompaniesController::class, 'changecompany'])
    ->middleware(['auth'])
    ->name('changecompany');

// User's account
Route::get('/myaccount', function () {
    return view('myAccount');
})->middleware(['auth'])->name('myaccount');