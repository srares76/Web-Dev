<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CalculatorModel;

class CalculatorController extends Controller
{
    public $calculator;
    public function __construct() {
        $this->calculator = new CalculatorModel();
    }
    
    public function addDigit() {
        $current = request('current');
        $previous = request('previous');
        $digit = request('digit');

        $this->calculator->addDigit($digit, $current);
        echo $this->calculator->response;
    }

    public function doAction() {
        $current = (float)request('current');
        $previous = (float)request('previous');
        $operation = request('operation');
        $action = urldecode(request('action'));

        $this->calculator->doAction($current, $previous, $operation, $action);
        echo $this->calculator->response;
    }

    public function doOperation() {
        $current = request('current');
        $previous = request('previous');
        $operation = urldecode(request('operation'));

        $this->calculator->doOperation($current, $previous, $operation);
        echo $this->calculator->response;
    }
}
