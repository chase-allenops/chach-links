<script>
    export let text = "Next Page"
    export let target = "/"
</script>

<a href="{target}" target="_blank" class="flex justify-center mt-4 md:w-[800px] w-[300px]">
    <div class="flex w-full bg-gray-300 justify-center py-2 text-2xl md:text-3xl rounded-md hover:bg-gray-200 duration-150">
        <h2 class="">{text}</h2>
    </div>
</a>