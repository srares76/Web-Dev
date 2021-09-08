<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Company extends Model
{
    use HasFactory;

    public function exists($company) {
        $result = DB::table('companies')->where('name', $company)->get();
        return count($result);
    }

    public function getCompanyUsersNumber($company) {
        $number_of_users = DB::table('users')->where('company', $company)->get();
        return count($number_of_users);
    }

    public function deleteCompany($company) {
        DB::table('companies')->where('name', '=', $company)->delete();
    }

    public function changeUsersCompany($user, $newCompany) {
        // Gets the company the user belongs to
        $oldCompany = DB::table('users')->select('company')->where('email', $user)->get();
        $oldCompany = $oldCompany[0]->company;

        // Gets the current number of users the old company has
        $number_of_users = DB::table('companies')->select('number_of_users')->where('name', $oldCompany)->get();
        $number_of_users = $number_of_users[0]->number_of_users;

        // Changes the user's company to the new one
        DB::table('users')->where('email', $user)->update(['company' => $newCompany]);

        // Decrements the number of users in the old company's table
        DB::table('companies')->where('name', $oldCompany)->update(['number_of_users' => $number_of_users - 1]);

        // Gets the current number of users the new company has
        $number_of_users = DB::table('companies')->select('number_of_users')->where('name', $newCompany)->get();
        $number_of_users = $number_of_users[0]->number_of_users;

        // Increments the number of users the new company has
        DB::table('companies')->where('name', $newCompany)->update(['number_of_users' => $number_of_users + 1]);
    }
}
