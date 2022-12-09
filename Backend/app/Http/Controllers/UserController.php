<?php

namespace App\Http\Controllers;
use App\Models\rest;
use App\Models\ngo;
use App\Models\wastetransaction;
use App\Models\transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mail;

class UserController extends Controller
{
    function register(Request $req)
    {
        $user=new rest;
        $user->Name=$req->input('name');
        $user->Password=$req->input('pass');
        $user->Address=$req->input('add');
        $user->state=$req->input('state');
        $user->city=$req->input('city');
        $user->pincode=$req->input('pin');
        $user->phone=$req->input('contact');
        $user->email=$req->input('email');
        $user->image=$req->input('img2');
        $user->lat=$req->input('lat');
        $user->long=$req->input('lon');
        $user->save();
        return ["Result"=>"successful"];
    }
    function tokenStore(Request $req)
    {
        $token = $req->token;
        $email = $req->email;
        $query = DB::update("UPDATE rests SET token = ? WHERE email=?", [$token,$email]);
        $data = DB::select('select * from rests where email = ?', [$email]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
                return $data;
        }
    }
    function login(Request $req)
    {
        $email = $req->email;
        $pass = $req->pass;
        $query = DB::select("SELECT * FROM sociology.rests where email=? AND Password=?", [$email,$pass]);
        if(!$query)
        {
            return ["Result"=>"Please Enter Correct Email and Password"];
        }
        else
        {
            return $query;
        }
    }
    function emailver(Request $req)
    {
        $userr['to']=$req->email;
        $email = $req->email;
        $query = DB::select("SELECT * FROM sociology.rests where email=?", [$email]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            // $data=['token'=>$query];
            Mail::send('mail', ['token'=>$query], function($message) use ($userr) {
            $message->from('rahulsarvaiya-inft@atharvacoe.ac.in', 'Sociology');
                $message->sender('rahulsarvaiya-inft@atharvacoe.ac.in', 'Sociology');
                $message->to($userr['to']);
                $message->subject('Sociology Password Assistance');
            });
            return $query;
        }
    }
    function updatepass(Request $req)
    {
        $token = $req->token;
        $pass = $req->pass;
        $query = DB::update("UPDATE rests SET Password = ? WHERE token=?", [$pass,$token]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return $query;
        }
    }



    function register2(Request $req)
    {
        $user=new ngo;
        $user->Name=$req->input('name');
        $user->Password=$req->input('pass');
        $user->Address=$req->input('add');
        $user->state=$req->input('state');
        $user->city=$req->input('city');
        $user->pincode=$req->input('pin');
        $user->phone=$req->input('contact');
        $user->email=$req->input('email');
        $user->image=$req->input('img2');
        $user->lat=$req->input('lat');
        $user->long=$req->input('lon');
        $user->save();
        return ["Result"=>"successful"];
    }
    function tokenStore2(Request $req)
    {
        $token = $req->token;
        $email = $req->email;
        $query = DB::update("UPDATE ngos SET token = ? WHERE email=?", [$token,$email]);
        $data = DB::select('select * from ngos where email = ?', [$email]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
                return $data;
        }
    }
    function login2(Request $req)
    {
        $email = $req->email;
        $pass = $req->pass;
        $query = DB::select("SELECT * FROM sociology.ngos where email=? AND Password=?", [$email,$pass]);
        if(!$query)
        {
            return ["Result"=>"Please Enter Correct Email and Password"];
        }
        else
        {
            return $query;
        }
    }
    function emailver2(Request $req)
    {
        $userr['to']=$req->email;
        $email = $req->email;
        $query = DB::select("SELECT * FROM sociology.ngos where email=?", [$email]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            // $data=['token'=>$query];
            Mail::send('mail', ['token'=>$query], function($message) use ($userr) {
            $message->from('rahulsarvaiya-inft@atharvacoe.ac.in', 'Sociology');
                $message->sender('rahulsarvaiya-inft@atharvacoe.ac.in', 'Sociology');
                $message->to($userr['to']);
                $message->subject('Sociology Password Assistance');
            });
            return $query;
        }
    }
    function updatepass2(Request $req)
    {
        $token = $req->token;
        $pass = $req->pass;
        $query = DB::update("UPDATE ngos SET Password = ? WHERE token=?", [$pass,$token]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return $query;
        }
    }
    function getrest()
    {
        return rest::all();
    }
    function getngo()
    {
        return ngo::all();
    }
    function donatefood(Request $req)
    {
        $user=new transaction;
        $user->t_id=$req->input('id');
        $user->t_fooditem1=$req->input('fooditem1');
        $user->t_fooditem2=$req->input('fooditem2');
        $user->t_fooditem3=$req->input('fooditem3');
        $user->t_fooditem4=$req->input('fooditem4');
        $user->t_date=$req->input('t_date');
        $user->sender=$req->input('sender');
        $user->s_email=$req->input('s_email');
        $user->s_phone=$req->input('s_phone');
        $user->s_address=$req->input('s_address');
        $user->action=$req->input('action');
        $user->paid=$req->input('amount');
        $user->s_img=$req->input('s_img');
        $user->save();
        return $user;
    }
    function donatewaste(Request $req)
    {
        $user=new wastetransaction;
        $user->t_id=$req->input('id');
        $user->t_waste=$req->input('wasteitem');
        $user->t_date=$req->input('t_date');
        $user->sender=$req->input('sender');
        $user->s_email=$req->input('s_email');
        $user->s_phone=$req->input('s_phone');
        $user->s_address=$req->input('s_address');
        $user->action=$req->input('action');
        $user->s_img=$req->input('s_img');
        $user->save();
        return $user;
    }
    function getfood()
    {
        return transaction::all();
    }
    function getwaste()
    {
        return wastetransaction::all();
    }
    function getfood2($name=null)
    {
        $query = DB::select("SELECT * FROM sociology.transactions where sender=?", [$name]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return $query;
        }
    }
    function getfood3($name=null)
    {
        $query = DB::select("SELECT * FROM sociology.transactions where receiver=?", [$name]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return $query;
        }
    }
    function getwaste2($name=null)
    {
        $query = DB::select("SELECT * FROM sociology.wastetransactions where sender=?", [$name]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return $query;
        }
    }
    function getwaste3($name=null)
    {
        $query = DB::select("SELECT * FROM sociology.wastetransactions where receiver=?", [$name]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return $query;
        }
    }
    function acceptfood(Request $req)
    {
        $id=$req->id;
        $name=$req->name;
        $email=$req->email;
        $phone=$req->phone;
        $action=$req->action;
        $img=$req->img;
        $query = DB::update(" UPDATE transactions SET receiver = ?, r_email = ?, r_phone = ?, action = ?,r_img=? WHERE t_id = ?", [$name,$email,$phone,$action,$img,$id]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return ["Result"=>"updated"];
        }
    }
    function acceptwaste(Request $req)
    {
        $id=$req->id;
        $name=$req->name;
        $email=$req->email;
        $phone=$req->phone;
        $action=$req->action;
        $img=$req->img;
        $query = DB::update(" UPDATE wastetransactions SET receiver = ?, r_email = ?, r_phone = ?,action = ?,r_img=?  WHERE t_id = ?", [$name,$email,$phone,$action,$img,$id]);
        if(!$query)
        {
            return ["Result"=>"Something went wrong"];
        }
        else
        {
            return ["Result"=>"updated"];
        }
    }

}
