<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\UsersController;

class GeneralController extends Controller
{
    public function decideType() {
        $type = request('type');
        
        if ($type === 'company') {
            $companyController = new CompaniesController();
            return $companyController->getAllCompanies();
        } else {
            $userController = new UsersController();
            return $userController->getAllUsers();
        }
    }
}
