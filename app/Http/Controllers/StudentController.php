<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;

use function Laravel\Prompts\search;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        return inertia('Students/Index', [
            'students' => $students
        ]);
    }

    public function withDataParameter(Request $request)
    {
        sleep(2);
        // return Inertia::render('Students/Index',[
        //         'Name' => $name,
        //         'Position' => $position
        // ]);
        $search = $request->input('search');
        $sortField = $request->input('sort','id');
        $sortDirection = $request->input('direction','desc');
        $students = Student::when($search,function($query,$search){
            $query->where('name','like',"%{$search}%")
            ->orWhere('email','like',"%{$search}%");
            
        })
        ->orderBy($sortField,$sortDirection)
        ->paginate(10)
        ->withQueryString();
        return inertia('Students/Index', [
            'students' => $students,
            'search' => $search,
            'sort' => $sortField,
            'direction' =>$sortDirection
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
