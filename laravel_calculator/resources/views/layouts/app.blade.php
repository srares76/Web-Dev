<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link href="{{ asset('css/calculator.css') }}" rel="stylesheet">
</head>
<body>
    
    @yield('content')

    <script type="text/javascript" src="{{ asset('js/calculator.js') }}"></script>
</body>
</html>