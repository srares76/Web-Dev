<x-app-layout>
    <div class="min-h-screen bg-gray-100">

        <x-slot name="header">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('List Data') }}
            </h2>
        </x-slot>

        <main class="mt-6 font-serif">
            <div class="admin-links max-w-7xl mx-auto sm:px-6 lg:px-8 mt-3">
                <div class="list-data p-6 bg-white border-b border-gray-200 mb-3 rounded-xl">
                    <div>
                        <p class="font-serif mb-3 text-lg">What would you like to see?</p>
                    </div>

                    <form>
                        @csrf
                        <div class="flex">
                            <div class="pr-2 mr-4">
                                <label for="radio-company">
                                    <input type="radio" id="radio-company" name="company-user" value="Company" class="mr-2">Companies
                                </label>
                            </div>
                            <div class="pr-2 mr-4">
                                <label for="radio-user">
                                    <input type="radio" id="radio-user" name="company-user" value="User" class="mr-2">Users
                                </label>
                            </div>
                        </div>
                    </form>

                    <div class="company-list">
                        <ul id="data-list">
                            
                        </ul>
                    </div>

                </div>
            </div>
        </main>
    </div>

    <script defer src="{{ asset('js/listData.js') }}"></script>
</x-app-layout>