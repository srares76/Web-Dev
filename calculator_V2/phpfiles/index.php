<?php
    function addDigit() {
        $current = $_GET["current"];
        $previous = $_GET["previous"];
        $digit = $_GET["number"];
        $len = strlen($current);
        $point = false;

        for ($letter = 0; $letter < $len; $letter++) {
            if ($current[$letter] === ".") {
                $point = true;
                break;
            }
        }

        if (($current === "0" && $digit === "0") ||
            ($point && $digit === ".")) {
            echo $current;
            return;
        }

        if ($current === "" && $digit === ".") {
            $current = $current . "0.";
        } else {
            $current = $current . $digit;
        }

        echo $current;
    }

    function doAction() {
        $current = $_GET["current"];
        $previous = $_GET["previous"];
        $operation = $_GET["operation"];
        $action = $_GET["action"];
        $data = [];
        
        if ($operation === " ") {
            $operation = "+";
        }

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
            $result = (float)$previous;
            $current = (float)$current;
            
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

    function doOperation() {
        $current = $_GET["current"];
        $previous = $_GET["previous"];
        $operation = $_GET["operation"];
        $data = [];
        
        if ($operation === " ") {
            $operation = "+";
        }

        $previous = $current . $operation;
        $current = "";
        $data = ["current" => $current, "previous" => $previous, "operation" => $operation];
        echo json_encode($data);
    }

    if (array_key_exists("number", $_GET)) {
        addDigit();
    } elseif (array_key_exists("action", $_GET)) {
        doAction();
    } else {
        doOperation();
    }
?>