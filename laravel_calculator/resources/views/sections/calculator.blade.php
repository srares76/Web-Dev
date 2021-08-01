@extends('layouts.app')


@section('content')
    <div class="calculator">
        <div class="output">
            <div class="previous" id ="previous"></div>
            <div class="current" id="current"></div>
        </div>
        <button class="two" id="AC">AC</button>
        <button id="DEL">DEL</button>
        <button id="divide">/</button>
        <button id="1">1</button>
        <button id="2">2</button>
        <button id="3">3</button>
        <button id="multiply">*</button>
        <button id="4">4</button>
        <button id="5">5</button>
        <button id="6">6</button>
        <button id="add">+</button>
        <button id="7">7</button>
        <button id="8">8</button>
        <button id="9">9</button>
        <button id="subtract">-</button>
        <button id="point">.</button>
        <button id="0">0</button>
        <button class="two" id="equals">=</button>
    </div>
@endsection


@section('javascript')
    <script src=""></script>
@endsection
