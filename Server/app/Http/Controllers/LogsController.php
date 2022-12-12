<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Logs;

class LogsController extends Controller
{
    //
    public function index()
    {
        if (auth()->user()->id == 1) {
            $logs = Logs::orderBy('id', 'desc')->get();
            return response()->json($logs);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    
}
