<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;

class UsersController extends Controller {
    public function getAllUsers() {
        $model = new user();
        $users = $model->orderBy('company')->get();

        return response()->json($users);
    }

    public function getUsersFromCompany() {
        if (isset($_GET['company'])) {
            $company = $_GET['company'];
        }

        $model = new User();
        $users = $model->getusersFromCompany($company);

        return response()->json($users);
    }

    public function addUser() {
        $userModel = new User();

        $name = request('user-name');
        $email = request('user-email');
        // $password = request('user-password');
        $password = Hash::make(request('password'));
        $company = request('user-company');

        if (is_null($company)) {
            $company = "None";
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

    public function addUserAuth() {
        $userModel = new User();
        $company = request('user-company');

        $user = User::create([
            'name' => request('user-name'),
            'email' => request('user-email'),
            'company' => request('user-company'),
            'password' => Hash::make(request('password')),
        ]);

        event(new Registered($user));

        if ($company !== "None") {
            $userModel->incrementUsers($company);
        }

        return redirect(RouteServiceProvider::HOME);
    }

    public function deleteUser() {
        if (isset($_GET['user'])) {
            $user = $_GET['user'];
        }

        $model = new User();
        $model->deleteUser($user);
    }
}
