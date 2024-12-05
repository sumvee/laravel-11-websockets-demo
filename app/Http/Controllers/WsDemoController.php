<?php

namespace App\Http\Controllers;

use App\Events\DemoEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class WsDemoController extends Controller
{
    function __invoke(Request $request)
    {
        Log::info('Broadcasting WSEvent for user: ' . Auth::user()->id);
        broadcast(new DemoEvent(Auth::user()));
    }
}
