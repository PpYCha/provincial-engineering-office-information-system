<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Infrastructure extends Model
{
    use HasFactory;
    protected $table = 'infrastructures';
    protected $fillabe = ['
    name_of_project',
        'location',
        'date_of_public_bidding',
        'name_of_contractor',
        'contrators_authorized_representative',
        'position',
        'date_of_notice_of_award',

        'performance_security_posted',
        'issuing_entity',
        'policy_no',
        'amount_performance_posted',
        'date_of_effectivity',
        'expiration_date',

        'credit_line_from_bank',
        'amount_credit_line',
        'date_credit_line',

        'date_of_notiization_of_contract',
        'book_no',
        'doc_no',
        'series_of',

        'date_issuance_of_notice_to_proceed',
        'issued_by',
        'contract_amount',
        'revised_contract_amount',
        'contract_duration',
        'revised_contract_time',
        'time_suspension_extension',
        'peo_project_engineer',
        'contractors_project_engineer',
        'materials_engineer',

    ];
}
