<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CalculatorModel extends Model
{
    public $response;

    public function addDigit($digit, $current) {
        // Acest if previne posibilitatea de a incepe un numar cu 00...0 sau de
        // avea mai mult de un punct in numarul curent (nu se poate 1.2222.3)
        if (($current === "0" && $digit === "0") ||
            (str_contains($current, ".") && $digit === ".")) {
            $this->response = $current;
            return;
        }

        // Daca prima tasta apasata este . trebuie sa stie ca vreau 0.
        if ($current === "" && $digit === ".") {
            $current = "0.";
        } else {
            $current = $current . $digit;
        }

        $this->response = $current;
    }

    public function doAction($current, $previous, $operation, $action) {
        if ($action === "AC") {
            $operation = "undefined";
            $data = ["current" => "", "previous" => "", "operation" => $operation];
        } elseif ($action === "DEL") {
            if ($current === "") {
                $data = ["current" => "", "previous" => $previous, "operation" => $operation];
                $this->response = json_encode($data);
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
        $this->response = json_encode($data);
    }

    public function doOperation($current, $previous, $operation) {
        $previous = $current . $operation;
        $current = "";
        $data = ["current" => $current, "previous" => $previous, "operation" => $operation];

        $this->response = json_encode($data);
    }
}
