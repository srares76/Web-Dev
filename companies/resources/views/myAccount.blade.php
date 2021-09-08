<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Account information') }}
        </h2>
    </x-slot>

    <div class="py-8">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="p-6 bg-white border-b border-gray-200 mb-3 rounded-xl">
                <div>
                    Name: {{ Auth::user()->name }}
                </div>
                <div>
                    Email: {{ Auth::user()->email }}
                </div>
                <div>
                    Company: {{ Auth::user()->company }}
                </div>
                <div>
                    Created at: {{ Auth::user()->created_at }}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
