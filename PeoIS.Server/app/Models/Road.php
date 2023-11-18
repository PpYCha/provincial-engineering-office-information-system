<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Road extends Model
{
    use HasFactory;
    protected $table = 'roads';
    protected $fillabe = [
        'provincialRoadId',
        'provincialRoad',
        'roadlocation',
        'roadLength',
        'remarks',
    ];
}
