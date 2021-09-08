<x-app-layout>
    <div class="min-h-screen bg-gray-100">

        <x-slot name="header">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Add Data') }}
            </h2>
        </x-slot>

        <main class="mt-6 font-serif">
            <div class="admin-links max-w-md mx-auto sm:px-6 lg:px-8 mt-3 text-center">
                <div class="form-container list-data p-6 bg-white border-b border-gray-200 mb-3 rounded-xl">
                    <div>
                        <p class="header-p font-serif mb-3 text-lg">Add a new company:</p>
                    </div>
            
                    <div class="flex justify-center">
                        <form action="/admin" class="">
                            @csrf
                            <div class="flex">
                                <div class="pr-2 mr-4">
                                    <label for="radio-company">
                                        <input type="radio" id="radio-company" name="company-user" value="Company" class="mr-2">Company
                                    </label>    
                                </div>

                                <div class="pr-2 mr-4">
                                    <label for="radio-user">
                                        <input type="radio" id="radio-user" name="company-user" value="User" class="mr-2">User
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
            
                    @if(!empty($error))
                        <p id="email-taken-error">{{$error}}</p>
                    @endif
                </div>
            </div>
        </main>
    </div>
    <script src="{{ asset('js/addData.js') }}" defer></script>
</x-app-layout>