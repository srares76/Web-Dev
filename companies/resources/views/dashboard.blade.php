<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    @if (Auth::user()->name === "Admin")
        <x-slot name="header">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Dashboard') }}
            </h2>
        </x-slot>

        <div class="admin-links max-w-7xl mx-auto sm:px-6 lg:px-8 mt-3">
            <div class="list-data p-6 bg-white border-b border-gray-200 mb-3 rounded-xl">
                <a href="{{ route('listdata') }}" class="list-data-link">
                    List Data
                </a>
            </div>

            <div class="add-data p-6 bg-white border-b border-gray-200 mb-3 rounded-xl">
                <a href="{{ route('adddata') }}" class="add-data-link">
                    Add Data
                </a>
            </div>

            <div class="change-data p-6 bg-white border-b border-gray-200 mb-3 rounded-xl">
                <a href="{{ route('changedata') }}" class="change-data-link">
                    Change Data 
                </a>
            </div> 
        </div>
    @else
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        Hello, {{ Auth::user()->name }}
                    </div>
                </div>
            </div>
        </div>
    @endif
</x-app-layout>
