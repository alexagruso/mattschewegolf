<script lang="ts">
    import { createLessonRate } from "@lib/rates/rates";

    const create = async () => {
        const response = await createLessonRate({ packageTitle: "testpackage", adultPrice: 200, youthPrice: 150 });
        console.log(response);
    };
</script>

<h1>rates api test</h1>
<button on:click={create}>Create</button>
