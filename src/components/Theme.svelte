<style>
    .toggle__dot {
        top: -0.25rem;
        left: -0.25rem;
        transition: all 0.2s ease-in-out;
    }

    input:checked ~ .toggle__dot {
        transform: translateX(100%);
        background-color: #3182ce;
    }
</style>

<label for="toogle" class="flex items-center cursor-pointer">
    <div class="relative">
        <input id="toogle" type="checkbox" class="hidden" />
        <div
            class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
        <div
            class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow
            inset-y-0 left-0" />
    </div>
</label>
