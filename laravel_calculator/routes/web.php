<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalculatorController;

Route::get('/', function () {
    return view('sections.calculator');
});

// Route pentru cifre
Route::get('/number', [CalculatorController::class, 'addDigit']);

// Route pentru actiuni
Route::get('/action', [CalculatorController::class, 'doAction']);

// Route pentru operatii
Route::get('/operation', [CalculatorController::class, 'doOperation']);