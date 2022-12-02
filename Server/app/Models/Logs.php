<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
    use HasFactory;
    
    protected $table = 'Logs';
    protected $fillable = ['id', 'id_user', 'action', 'date'];
}
