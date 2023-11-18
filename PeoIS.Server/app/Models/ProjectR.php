<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectR extends Model
{
    use HasFactory;
    protected $table = 'projectsR';
    protected $fillabe = [
        'aip_reference_code',
        'project_status',
        'project_name',
        'location',
        'barangay',
        'municipality',
        'implementing_office',
        'starting_date',
        'completion_date',
        'expected_output',
        'funding_source',
        'personal_services',
        'mooe',
        'capital_outlay',
        'total',
        'cca',
        'ccm',
        'cc_typology_code',
    ];
}