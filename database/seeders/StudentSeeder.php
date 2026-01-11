<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        foreach (range(1, 100) as $i) {
            Student::create([
                'name'   => $faker->name,
                'email'  => $faker->unique()->safeEmail,
                'gender' => $faker->randomElement(['Male', 'Female', 'Other']),
                'score'  => $faker->numberBetween(0, 100),
            ]);
        }
    }
}
