<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompaniesController extends Controller {
    public function getAllCompanies() {
        $model = new Company();
        $companies = $model->orderBy('name')->get();

        return response()->json($companies);
    }

    public function addCompany(Request $request) {
        $companyModel = new Company();

        // Gets the name of the new company
        if (isset($_POST['company-name'])) {
            $name = $_POST['company-name'];
        } else {
            throw new Exception("Company name could not be retrieved");
        }

        // Checks if the company already exists
        if ($companyModel->exists($name)) {
            return view('/dashboard');
        }
        $companyModel->name = $name;
        
        // Gets the number of users who currently belong to said new company
        $companyModel->number_of_users = $companyModel->getCompanyUsersNumber($companyModel->name);
        $companyModel->save();

        return view('/dashboard');
    }

    public function changeCompany() {
        $model = new Company();

        if (!isset($_GET['user']) || !isset($_GET['newcompany'])) {
            throw new Exception("Data could not be retrieved");
        }
        $user = $_GET['user'];
        $newcompany = $_GET['newcompany'];

        $model->changeUsersCompany($user, $newcompany);
    }

    public function provideCompanies() {
        $model = new Company();

        $companies = $model->orderBy('name')->get();
        if (!count($companies)) {
            $error = "No companies in the database";
            return view('/changeCompany', ['error' => $error]);
        }

        return view('/changeCompany', ['companies' => $companies]);
    }

    public function deleteCompany() {
        if (isset($_GET['company'])) {
            $company = $_GET['company'];
        }

        $model = new Company();
        $model->deleteCompany($company);

        return view('/listData');
    }
}
