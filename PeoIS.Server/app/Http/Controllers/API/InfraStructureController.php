<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Infrastructure;
use Illuminate\Http\Request;

class InfraStructureController extends Controller
{
    public function index()
    {
        $infrastructures = Infrastructure::all();
        return response()->json([
            'status' => 200,
            'infrastructures' => $infrastructures,
        ]);

    }

    public function store(Request $request)
    {
        $infrastructures = new Infrastructure;
        $infrastructures->name_of_project = $request->name_of_project;
        $infrastructures->location = $request->location;
        $infrastructures->date_of_public_bidding = $request->date_of_public_bidding;
        $infrastructures->name_of_contractor = $request->name_of_contractor;
        $infrastructures->contrators_authorized_representative = $request->contrators_authorized_representative;
        $infrastructures->position = $request->position;
        $infrastructures->date_of_notice_of_award = $request->date_of_notice_of_award;
        $infrastructures->performance_security_posted = $request->performance_security_posted;
        $infrastructures->issuing_entity = $request->issuing_entity;
        $infrastructures->policy_no = $request->policy_no;

        $infrastructures->amount_performance_posted = $request->amount_performance_posted;
        $infrastructures->date_of_effectivity = $request->date_of_effectivity;
        $infrastructures->expiration_date = $request->expiration_date;
        $infrastructures->credit_line_from_bank = $request->credit_line_from_bank;
        $infrastructures->amount_credit_line = $request->amount_credit_line;
        $infrastructures->date_credit_line = $request->date_credit_line;
        $infrastructures->date_of_notiization_of_contract = $request->date_of_notiization_of_contract;
        $infrastructures->book_no = $request->book_no;
        $infrastructures->doc_no = $request->doc_no;
        $infrastructures->series_of = $request->series_of;
        $infrastructures->date_issuance_of_notice_to_proceed = $request->date_issuance_of_notice_to_proceed;
        $infrastructures->issued_by = $request->issued_by;
        $infrastructures->contract_amount = $request->contract_amount;
        $infrastructures->revised_contract_amount = $request->revised_contract_amount;
        $infrastructures->contract_duration = $request->contract_duration;
        $infrastructures->revised_contract_time = $request->revised_contract_time;
        $infrastructures->time_suspension_extension = $request->time_suspension_extension;
        $infrastructures->peo_project_engineer = $request->peo_project_engineer;
        $infrastructures->contractors_project_engineer = $request->contractors_project_engineer;
        $infrastructures->materials_engineer = $request->materials_engineer;

        $infrastructures->save();

        return response()->json([
            'status' => 200,
            'message' => 'Infrastructure Added Successfully',
            $infrastructures,
        ]);
    }

    public function update(Request $request, $id)
    {

        $infrastructure = Infrastructure::find($id);

        $infrastructure->name_of_project = $request->name_of_project;
        $infrastructure->location = $request->location;
        $infrastructure->date_of_public_bidding = $request->date_of_public_bidding;
        $infrastructure->name_of_contractor = $request->name_of_contractor;
        $infrastructure->contrators_authorized_representative = $request->contrators_authorized_representative;
        $infrastructure->position = $request->position;
        $infrastructure->date_of_notice_of_award = $request->date_of_notice_of_award;
        $infrastructure->performance_security_posted = $request->performance_security_posted;
        $infrastructure->issuing_entity = $request->issuing_entity;
        $infrastructure->policy_no = $request->policy_no;
        $infrastructure->amount_performance_posted = $request->amount_performance_posted;
        $infrastructure->date_of_effectivity = $request->date_of_effectivity;
        $infrastructure->expiration_date = $request->expiration_date;
        $infrastructure->credit_line_from_bank = $request->credit_line_from_bank;
        $infrastructure->amount_credit_line = $request->amount_credit_line;
        $infrastructure->date_credit_line = $request->date_credit_line;
        $infrastructure->date_of_notiization_of_contract = $request->date_of_notiization_of_contract;
        $infrastructure->book_no = $request->book_no;
        $infrastructure->doc_no = $request->doc_no;
        $infrastructure->series_of = $request->series_of;
        $infrastructure->date_issuance_of_notice_to_proceed = $request->date_issuance_of_notice_to_proceed;
        $infrastructure->issued_by = $request->issued_by;
        $infrastructure->contract_amount = $request->contract_amount;
        $infrastructure->revised_contract_amount = $request->revised_contract_amount;
        $infrastructure->contract_duration = $request->contract_duration;
        $infrastructure->revised_contract_time = $request->revised_contract_time;
        $infrastructure->time_suspension_extension = $request->time_suspension_extension;
        $infrastructure->peo_project_engineer = $request->peo_project_engineer;
        $infrastructure->contractors_project_engineer = $request->contractors_project_engineer;
        $infrastructure->materials_engineer = $request->materials_engineer;
        $infrastructure->update();

        return response()->json([
            'status' => 200,
            'message' => 'Project Updated Successfully',
        ]);

    }

    public function destroy($id)
    {
        $infrastructure = Infrastructure::find($id);
        $infrastructure->delete();

        return response()->json([
            'status' => 200,
            'message' => 'project Deleted Successfully',
        ]);
    }
}
