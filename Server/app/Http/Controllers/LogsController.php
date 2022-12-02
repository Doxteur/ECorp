<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogsController extends Controller
{
    //

    public function index()
    {
        $logs = Logs::all();
        return response()->json($logs);
    }
    
}
