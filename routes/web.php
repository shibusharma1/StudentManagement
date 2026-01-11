<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


// Route::inertia('/students','Students/Index');

// Route::inertia('/students','Students/Index',[
//     'Name' => 'Shibu Sharma',
//     'Position' => 'Full Stack Developer'
// ]);

// Route::get('/students/{name?}/{position?}',function($name="Shibu",$position="developer"){
//     return Inertia::render('Students/Index',[
//         'Name' => $name,
//         'Position' => $position,
//     ]);
// });

Route::controller(StudentController::class)->group(function(){
    // Route::get('students','index')->name('students.index');
    Route::get('/students/{name?}/{position?}','withDataParameter')->name('students.withData');
});

Route::controller(TeacherController::class)->group(function(){
    // Route::get('students','index')->name('students.index');
    Route::get('/teachers/{name?}/{position?}','withDataParameter')->name('teachers.withData');
});

Route::fallback(function(){
 return Inertia::render('Errors/NotFound');
});