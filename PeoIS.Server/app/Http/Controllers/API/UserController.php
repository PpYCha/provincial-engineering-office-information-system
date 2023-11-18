<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    private $status_code = 200;

    public function index()
    {
        $users = User::all();
        return response()->json([
            'status' => 200,
            'users' => $users,
        ]);

    }

    public function userSignUp(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required|email",
            "password" => "required",
            "phone" => "required",
            "username" => "required",
            "address" => "required",
            "gender" => "required",
            "office" => "required",

        ]);

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }
        // , "errors" => $validator->errors()

        $userDataArray = array(

            "name" => $request->name,
            "email" => $request->email,
            "password" => md5($request->password),
            "phone" => $request->phone,
            "username" => $request->username,
            "gender" => $request->gender,
            "address" => $request->address,
            "office" => $request->office,
            "is_active" => $request->is_active,
            "role" => $request->role,
        );

        $user_status = User::where("email", $request->email)->first();

        if (!is_null($user_status)) {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }

        $user = User::create($userDataArray);

        if (!is_null($user)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $user]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }

    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request)
    {

        $validator = Validator::make($request->all(),
            [
                "email" => "required|email",
                "password" => "required",

            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }

        // check if entered email exists in db
        $email_status = User::where("email", $request->email)->first();

        // if email exists then we will check password for the same email

        if (!is_null($email_status)) {
            $password_status = User::where("email", $request->email)->where("password", md5($request->password))->first();
            $isActive_status = User::where("email", $request->email)->where("status", "Active")->first();
            error_log("active:");
            // if password is correct
            if (!is_null($password_status)) {
                $user = $this->userDetail($request->email);
                if (!is_null($isActive_status)) {
                    error_log("active true:");
                    return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully.", "data" => $user]);
                } else {
                    error_log("active else:");
                    return response()->json(["status" => "failed", "success" => false, "message" => "Account is Banned. Please contact the administrator"]);

                }
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ User Detail ] ---------------------
    public function userDetail($email)
    {
        $user = array();
        if ($email != "") {
            $user = User::where("email", $email)->first();
            return $user;
        }
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json([
            'status' => 200,
            'message' => 'project Deleted Successfully',
        ]);
    }

    public function edit($id)
    {
        $user = User::find($id);

        return response()->json([
            'status' => 200,
            'user' => $user,
        ]);

    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = md5($request->password);
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->gender = $request->gender;
        $user->office = $request->office;
        $user->is_active = $request->is_active;
        $user->role = $request->role;

        $user->update();
        return response()->json([
            'status' => 200,
            'message' => 'user Updated Successfully',
        ]);
    }

}