<!DOCTYPE html>
<html>
    <head>
        <title>Company List</title>
    </head>
    <body>
        <p>What would you like to see?</p>

        <form action="">
            @csrf
            <label for="radio-company">
                <input type="radio" id="radio-company" name="company-user" value="Company">Companies
            </label>
            <label for="radio-user">
                <input type="radio" id="radio-user" name="company-user" value="User">Users
            </label>
        </form>

        <div class="company-list">
            <ul id="data-list">
                
            </ul>
        </div>
    </body>
    <script defer src="{{ asset('js/listData.js') }}"></script>
</html>