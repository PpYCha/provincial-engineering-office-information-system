<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Road;
use Illuminate\Http\Request;

class RoadController extends Controller
{
    //
    public function index()
    {
        $roads = Road::all();
        return response()->json([
            'status' => 200,
            'roads' => $roads,
        ]);

    }

    public function store(Request $request)
    {

        $road = new Road;

        $road->provincialRoadId = $request->provincialRoadId;
        $road->provincialRoad = $request->provincialRoad;
        $road->roadlocation = $request->roadlocation;
        $road->roadLength = $request->roadLength;
        $road->remarks = $request->remarks;

        $road->save();

        return response()->json([
            'status' => 200,
            'message' => 'road Added Successfully',
            $road,
        ]);

    }

    public function update(Request $request, $id)
    {

        $road = Road::find($id);

        $road->provincialRoadId = $request->provincialRoadId;
        $road->provincialRoad = $request->provincialRoad;
        $road->roadlocation = $request->roadlocation;
        $road->roadLength = $request->roadLength;
        $road->remarks = $request->remarks;
        $road->update();

        return response()->json([
            'status' => 200,
            'message' => 'road Updated Successfully',
        ]);

    }

    public function destroy($id)
    {
        $road = Road::find($id);
        $road->delete();

        return response()->json([
            'status' => 200,
            'message' => 'road Deleted Successfully',
        ]);
    }
}