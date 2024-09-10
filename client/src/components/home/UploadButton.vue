<script setup lang="ts">
import { generateUploadButton } from "@uploadthing/vue";

export const UploadButton = generateUploadButton({
 url: "http://localhost:5000/api/uploadthing",
});
</script>
