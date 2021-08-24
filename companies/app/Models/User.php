<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getUsersFromCompany($company) {
        $users = DB::table('users')->where('company', '=', $company)->get();
        return $users;
    }

    public function incrementUsers($company) {
        // Gets the current number of users the company has
        $number_of_users = DB::table('companies')->select('number_of_users')->where('name', $company)->get();
        $number_of_users = $number_of_users[0]->number_of_users;

        DB::table('companies')->where('name', $company)->update(['number_of_users' => $number_of_users + 1]);
    }

    public function deleteUser($user) {
        // Gets the company the user belongs to
        $company = DB::table('users')->select('company')->where('email', $user)->get();
        $company = $company[0]->company;

        // Gets the current number of users the company has
        $number_of_users = DB::table('companies')->select('number_of_users')->where('name', $company)->get();
        $number_of_users = $number_of_users[0]->number_of_users;
        
        // Deletes the user from the users table
        DB::table('users')->where('email', $user)->delete();

        // Decrements the number of users in the companies table
        DB::table('companies')->where('name', $company)->update(['number_of_users' => $number_of_users - 1]);
    }

    public function emailExists($email) {
        $result = DB::table('users')->where('email', $email)->get();
        return count($result);
    }
}
