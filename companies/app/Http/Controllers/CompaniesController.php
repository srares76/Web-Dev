<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompaniesController extends Controller {
    private $corrctUsername;
    private $corrctPassword;

    public function __construct() {
        $this->correctUsername = "rares";
        $this->correctPassword = "123";
    }

    public function getAllCompanies() {
        $model = new Company();
        $companies = $model->orderBy('name')->get();

        return json_encode($companies);
    }

    public function checkLoginCredentials() {
        if (!isset($_POST['username']) || !isset($_POST['password'])) {
            return;
        }
        $username = (string)$_POST['username'];
        $password = (string)$_POST['password'];

        if ($username !== $this->correctUsername || $password !== $this->correctPassword) {
            return view('/wrongCredentials');
        } else {
            return view('/adminMainPage');
        }
    }

    public function showId($id) {
        $model = new Company();

        // If the requested id doesn't exits, show error message
        $maxId = $model->orderBy('id', 'desc')->value('id'); // finds the maximum id
        if ($id > 0 && $id <= $maxId) {
            $company = $model->find($id);
        } else {
            $company['name'] = "The requested company id does not exit";
        }

        return view('/listCompanies', ['company' => $company['name']]);
    }

    public function addCompany() {
        $companyModel = new Company();

        // Gets the name of the new company
        if (isset($_POST['company-name'])) {
            $name = $_POST['company-name'];
        } else {
            return;
        }

        // Checks if the company already exists
        if ($companyModel->exists($name)) {
            return view('/adminMainPage');
        }
        $companyModel->name = $name;
        
        // Gets the number of users who currently belong to said new company
        $companyModel->number_of_users = $companyModel->getCompanyUsersNumber($companyModel->name);
        $companyModel->save();

        return view('/adminMainPage');
    }

    public function changeCompany() {
        $model = new Company();

        if (!isset($_GET['user']) || !isset($_GET['newcompany'])) {
            echo "nimic";
            return;
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
    }
}
