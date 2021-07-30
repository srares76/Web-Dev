<?php
    function addDigit() {
        if (isset($_GET["current"])) {
            $current = (string)$_GET["current"];
        }
        if (isset($_GET["previous"])) {
            $previous = (string)$_GET["previous"];
        }
        if (isset($_GET["number"])) {
            $digit = (string)$_GET["number"];
        }


        // Acest if previne posibilitatea de a incepe un numar cu 00...0 sau de
        // avea mai mult de un punct in numarul curent (nu se poate 1.2222.3)
        if (($current === "0" && $digit === "0") ||
            (str_contains($current, ".") && $digit === ".")) {
            echo $current;
            return;
        }

        // Daca prima tasta apasata este . trebuie sa stie ca vreau 0.
        if ($current === "" && $digit === ".") {
            $current = $current . "0.";
        } else {
            $current = $current . $digit;
        }

        echo $current;
    }

    function doAction() {
        if (isset($_GET["current"])) {
            $current = (float)$_GET["current"];
        }
        if (isset($_GET["previous"])) {
            $previous = (float)$_GET["previous"];
        }
        if (isset($_GET["operation"])) {
            $operation = (string)$_GET["operation"];
        }
        if (isset($_GET["action"])) {
            $action = (string)$_GET["action"];
        }
        
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

    function doOperation() {
        if (isset($_GET["current"])) {
            $current = (float)$_GET["current"];
        }
        if (isset($_GET["previous"])) {
            $previous = (float)$_GET["previous"];
        }
        if (isset($_GET["operation"])) {
            $operation = (string)$_GET["operation"];
        }
        
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