<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function addDigit() {
        $current = request('current');
        $previous = request('previous');
        $digit = request('digit');

        // Acest if previne posibilitatea de a incepe un numar cu 00...0 sau de
        // avea mai mult de un punct in numarul curent (nu se poate 1.2222.3)
        if (($current === "0" && $digit === "0") ||
            (str_contains($current, ".") && $digit === ".")) {
            echo $current;
            return;
        }

        // Daca prima tasta apasata este . trebuie sa stie ca vreau 0.
        if ($current === "" && $digit === ".") {
            $current = "0.";
        } else {
            $current = $current . $digit;
        }

        echo $current;
    }

    public function doAction() {
        $current = (float)request('current');
        $previous = (float)request('previous');
        $operation = request('operation');
        $action = urldecode(request('action'));

        if ($action === "AC") {
            $operation = "undefined";
            $data = ["current" => "", "previous" => "", "operation" => $operation];
        } elseif ($action === "DEL") {
            if ($current === ""){
                $data = ["current" => "", "previous" => $previous, "operation" => $operation];
                echo json_encode($data);
                return;
            }
            $currentNumber = $current;
            $currentNumber = substr($currentNumber, 0, -1);
            $current = $currentNumber;
            $data = ["current" => $current, "previous" => $previous, "operation" => $operation];
        } elseif ($action === "=") {
            $result = $previous;
            $current = $current;
            
            if ($operation === "+") {
                $result = $result + $current;
            } else if ($operation === "-") {
                $result = $result - $current;
            } else if ($operation === "*") {
                $result = $result * $current;
            } else if ($operation === "/") {
                $result = $result / $current;
            } else {
                return;
            }
            
            $current = round($result, 6);
            $data = ["current" => $current, "previous" => $previous, "operation" => $operation];    
        }
        echo json_encode($data);
    }

    public function doOperation() {
        $current = request('current');
        $previous = request('previous');
        $operation = urldecode(request('operation'));

        $previous = $current . $operation;
        $current = "";
        $data = ["current" => $current, "previous" => $previous, "operation" => $operation];
        echo json_encode($data);
    }
}
