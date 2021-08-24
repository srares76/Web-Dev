<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller {
    public function getAllUsers() {
        $model = new user();
        $users = $model->orderBy('company')->get();

        return json_encode($users);
    }

    public function index() {
        if (isset($_GET['company'])) {
            $company = $_GET['company'];
        }

        $model = new User();
        $users = $model->getusersFromCompany($company);

        echo json_encode($users);
    }

    public function addUser() {
        $userModel = new User();

        $name = request('user-name');
        $email = request('user-email');
        $password = request('user-password');
        $company = request('user-company');

        if (is_null($company)) {
            $company = "None";
        } else {
            $company = request('user-company');
        }

        $userModel->email = $email;
        if ($userModel->emailExists($email)) {
            return view('/addData', ['error' => 'Email is already taken']);
            return;
        }


        $userModel->name = $name;
        $userModel->password = $password;
        $userModel->company = $company;
        $userModel->save();

        if ($company !== "None") {
            $userModel->incrementUsers($company);
        }

        return view('/adminMainPage');
    }

    public function deleteUser() {
        if (isset($_GET['user'])) {
            $user = $_GET['user'];
        }

        $model = new User();
        $model->deleteUser($user);
    }

}
