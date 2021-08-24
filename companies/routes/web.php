<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\GeneralController;

Route::get('/', function () {
    return view('home');
});

Route::post('/admin', [CompaniesController::class, 'checkLoginCredentials']);

Route::get('/list', function() {
    return view('/listData');
});

Route::get('/listdata', [GeneralController::class, 'decideType']);

Route::get('/add', function() {
    return view('/addData');
});

Route::get('/change', [CompaniesController::class, 'provideCompanies']);
Route::post('/addcompany', [CompaniesController::class, 'addCompany']);
Route::post('/adduser', [UsersController::class, 'addUser']);
Route::get('/changecompany', [CompaniesController::class, 'changeCompany']);

Route::get('/users', [UsersController::class, 'index']);
Route::get('/deleteuser', [UsersController::class, 'deleteUser']);
Route::get('/deletecompany', [CompaniesController::class, 'deleteCompany']);