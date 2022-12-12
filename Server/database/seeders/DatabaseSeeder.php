<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Logs;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
            'name' => 'admin',
            'password' => Hash::make('mp') //password admin hash
        ]);

        \App\Models\User::factory(5)->create();

        \App\Models\Post::factory(300)->create();

        \App\Models\Likes::factory(300)->create();

    }
}
