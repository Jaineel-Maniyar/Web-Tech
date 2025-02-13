<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".like-btn").forEach(button => {
            button.addEventListener("click", function() {
                if (!this.classList.contains("liked")) {
                    this.innerHTML = "❤️ Liked";
                    this.classList.add("liked");
                } else {
                    this.innerHTML = "👍 Like";
                    this.classList.remove("liked");
                }
            });
        });
    });
</script>
