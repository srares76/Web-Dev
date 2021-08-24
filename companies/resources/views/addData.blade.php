<!DOCTYPE html>
<html>
    <head>
        <title>Add Company</title>
    </head>
    <body>
        <div class="text">
            <p>Add a new company:</p>
        </div>

        <form action="/admin">
            @csrf
            <label for="radio-company">
                <input type="radio" id="radio-company" name="company-user" value="Company">Company
            </label>
            <label for="radio-user">
                <input type="radio" id="radio-user" name="company-user" value="User">User
            </label>
        </form>

        @if(!empty($error))
            <p id="email-taken-error">{{$error}}</p>
        @endif
        
    </body>
    <script src="{{ asset('js/addData.js') }}"></script>
</html>