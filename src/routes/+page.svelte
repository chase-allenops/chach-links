<script>
    import LinkButton from "$lib/components/link-button.svelte";
</script>

<div class="flex items-center font-mono flex-col ">
    <!-- Header -->
    <div class="flex flex-col md:flex md:flex-row items-center gap-4 pt-4">
        <div>
            <img src="https://public-images-webdev.s3.amazonaws.com/chase-avatar.png" alt="Chase Allen avatar" class="w-48 md:w-96">
        </div>
        <div class="flex flex-col text-center">
            <h1 class="text-4xl md:text-7xl font-semibold">Chase Allen</h1>
            <h2 class="text-2xl md:text-3xl">Data Engineer, Founder</h2>
            <h2 class="text-2xl md:text-3xl">Indianapolis, Indiana</h2>
            <div class="flex justify-center gap-10 pt-8 place-content-end">
                <a href="https://www.linkedin.com/in/chaseballen/" target="_blank" class="self-center hover:opacity-75 duration-150">
                    <img src="https://public-images-webdev.s3.amazonaws.com/LinkedIn_logo.svg" alt="Chase Allen LinkedIn" class="w-28 md:w-32">
                </a>
                <a href="https://github.com/chase-allenops" target="_blank" class="self-center hover:opacity-75 duration-150">
                    <img src="https://public-images-webdev.s3.amazonaws.com/github.png" alt="Chase Allen GitHub" class="w-28 md:w-32">
                </a>
            </div>
        </div>
    </div>
    <!-- Link Menu -->
    <div class="flex flex-col items-center pt-2">
        <LinkButton text="Data Consulting" target="https://pipelinx.io/" />

        <LinkButton text="ETL as a Service" target="https://pipelinx.io/" />

        <LinkButton text="My Calendar" target="https://calendar.app.google/aAMDkomGrhHuzWvg8" />

        <LinkButton text="Hoosier Flies" target="https://hoosierflies.com/" />
    </div>
</div>
