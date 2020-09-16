<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'firstName' => 'Dương Mạnh',
            'lastName' => 'Cường',
            'email' => 'cuong12@gmail.com',
            'password' => '12'
        ]);
        DB::table('users')->insert([
            'firstName' => 'Bùi Xuân',
            'lastName' => 'Dưỡng',
            'email' => 'duong13@gmail.com',
            'password' => '13'
        ]);
        DB::table('users')->insert([
            'firstName' => 'Trần Thanh',
            'lastName' => 'Tùng',
            'email' => 'tung14@gmail.com',
            'password' => '14'
        ]);
    }
}
