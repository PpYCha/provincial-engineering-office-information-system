<?php

namespace App\Http\Controllers;

use App\Models\ProjectR;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectRController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return response()->json([
            'status' => 200,
            'projects' => $projects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ntpStatus' => 'nullable',
            'ntpDate' => 'nullable',
            'ntp' => 'nullable',
            'ntpProjectEngineer' => 'nullable',
            'ntpContractor' => 'nullable',
            'ntpContractAmount' => 'nullable',
            'ntpContractDuration' => 'nullable',
            'ntpRevisedContactAmount' => 'nullable',
            'ntpRevisedContractDuration' => 'nullable',
            'ntpRemarks' => 'nullable',
            'ntpState' => 'nullable',
            'document_id' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Unable to create ntp.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $request->only([
            'ntpStatus',
            'ntpDate',
            'ntp',
            'ntpProjectEngineer',
            'ntpContractor',
            'ntpContractAmount',
            'ntpContractDuration',
            'ntpRevisedContactAmount',
            'ntpRevisedContractDuration',
            'ntpRemarks',
            'ntpState',
            'document_id',
        ]);

        $ntp = Ntp::create($data);

        return response()->json([
            'message' => 'Ntp created successfully.',
            'fb' => $ntp,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectR  $projectR
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectR $projectR)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectR  $projectR
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectR $projectR)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectR  $projectR
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProjectR $projectR)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectR  $projectR
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectR $projectR)
    {
        //
    }
}