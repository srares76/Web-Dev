<!DOCTYPE html>
<html>
    <head>
        <title>Home</title>
    </head>
    <body>
        <div class="headers">
            <h1>Welcome to</h1>
            <h3>*insert cool name here*</h3>
        </div>
        
        <p>Please log in :)</p>

        <form action="/admin" method="POST">
            @csrf
            <div class="username-field">
                <span>Username: </span>
                <input type="text" id="username" name="username">
            </div>

            <div class="password-field">
                <span>Password: </span>
                <input type="password" id="password" name="password">
            </div>
            <button type="submit">Sign In</button>
        </form>
    </body>
</html>
