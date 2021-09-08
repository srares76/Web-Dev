<x-app-layout>
    <div class="min-h-screen bg-gray-100">
        <x-slot name="header">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Change Data') }}
            </h2>
        </x-slot>

        <main class="mt-6 font-serif">
            <div class="admin-links max-w-7xl mx-auto sm:px-6 lg:px-8 mt-3">
                <div class="list-data p-6 bg-white border-b border-gray-200 mb-3 rounded-xl">
                    <div>
                        <p class="font-serif mb-3 text-lg">Make the changes you would like:</p>
                    </div>
        
                    @if (isset($error))
                        <p>{{$error}}</p>
                    @else
                        <div>
                            <form action="#" method="post">
                                <span class="mr-3">Choose Company</span>
                                <select name="company" id="company">
                                    <option selected="selected">Not Selected</option>
                                    @foreach($companies as $company)
                                        <option>{{$company['name']}}</option>
                                    @endforeach
                                </select>
            
                                <ul id="user-list" class="mt-3">
                                    
                                </ul>
                            </form>
                        </div>
                    @endif
                </div>
            </div>
        </main>
    </div>
    <script src="{{ asset('js/listUsersFromCompany.js') }}"></script>
</x-app-layout>