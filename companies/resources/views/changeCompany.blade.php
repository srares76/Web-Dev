<!DOCTYPE html>
<html>
    <head>
        <title>Changes</title>
    </head>
    <body>
        <p>Make the changes you would like:</p>

        @if (isset($error))
            <p>{{$error}}</p>
        @else
            <form action="#" method="post">
                <span>Choose Company</span>
                <select name="company" id="company">
                    <option selected="selected">Not Selected</option>
                    @foreach($companies as $company)
                        <option>{{$company['name']}}</option>
                    @endforeach
                </select>

                <ul id="user-list">
                    
                </ul>
            </form>
        @endif
    </body>
    <script src="{{ asset('js/listUsersFromCompany.js') }}"></script>
</html>
