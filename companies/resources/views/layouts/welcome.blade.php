<!DOCTYPE html>
<html>
    <head>
        <title>Welcome!</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body class="bg-gray-100">
        <main>
            <div class="text-center my-10">
                <div class="bg-white w-1/3 mx-auto py-2 rounded-xl">
                    <h1 class="text-3xl">Welcome!</h1>
                </div>
            </div>

            <div class="">
                <div class="bg-white w-1/4 mx-auto text-center flex justify-center rounded-xl">
                    <div class="px-4 py-2">
                        <a href={{ route('login') }}>Log in</a>
                    </div>
                    <div class="px-4 py-2">
                        <a href={{ route('register') }}>Sign up</a>
                    </div>
                </div>
            </div>

        </main>
    </body>
</html>