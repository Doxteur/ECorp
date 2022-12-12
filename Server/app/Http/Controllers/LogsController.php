<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Logs;

class LogsController extends Controller
{
    //
    public function index()
    {
        $logs = Logs::all();
        return response()->json($logs);
    }
    
}
