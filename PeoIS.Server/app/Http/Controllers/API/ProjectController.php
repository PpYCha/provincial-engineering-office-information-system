<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function index()
    {
        $projects = Project::all();
        return response()->json([
            'status' => 200,
            'projects' => $projects,
        ]);

    }

    public function store(Request $request)
    {

        $project = new Project;

        $project->project_status = $request->project_status;
        $project->aip_reference_code = $request->aip_reference_code;
        $project->project_name = $request->project_name;
        $project->location = $request->location;
        $project->barangay = $request->barangay;
        $project->municipality = $request->municipality;
        $project->implementing_office = $request->implementing_office;
        $project->starting_date = $request->starting_date;
        $project->completion_date = $request->completion_date;
        $project->expected_output = $request->expected_output;
        $project->funding_source = $request->funding_source;
        $project->personal_services = $request->personal_services;
        $project->mooe = $request->mooe;
        $project->capital_outlay = $request->capital_outlay;
        $project->total = $request->total;
        $project->cca = $request->cca;
        $project->ccm = $request->ccm;
        $project->cc_typology_code = $request->cc_typology_code;

        $project->save();

        return response()->json([
            'status' => 200,
            'message' => 'Project Added Successfully',
            $project,
        ]);

    }

    public function edit($id)
    {
        $project = Project::find($id);

        return response()->json([
            'status' => 200,
            'project' => $project,
        ]);

    }

    public function update(Request $request, $id)
    {

        $project = Project::find($id);
        $project->project_status = $request->project_status;
        $project->aip_reference_code = $request->aip_reference_code;
        $project->project_name = $request->project_name;
        $project->location = $request->location;
        $project->barangay = $request->barangay;
        $project->municipality = $request->municipality;
        $project->implementing_office = $request->implementing_office;
        $project->starting_date = $request->starting_date;
        $project->completion_date = $request->completion_date;
        $project->expected_output = $request->expected_output;
        $project->funding_source = $request->funding_source;
        $project->personal_services = $request->personal_services;
        $project->mooe = $request->mooe;
        $project->capital_outlay = $request->capital_outlay;
        $project->total = $request->total;
        $project->cca = $request->cca;
        $project->ccm = $request->ccm;
        $project->cc_typology_code = $request->cc_typology_code;
        $project->update();

        return response()->json([
            'status' => 200,
            'message' => 'Project Updated Successfully',
        ]);

    }

    public function destroy($id)
    {
        $project = Project::find($id);
        $project->delete();

        return response()->json([
            'status' => 200,
            'message' => 'project Deleted Successfully',
        ]);
    }

}
