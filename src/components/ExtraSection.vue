<template>
    <div class="extra-section">
        <div class="or-section">
            <hr>
            <p class="or-text">or</p>
            <hr>
        </div>
        <div class="rectangle-button-section">
            <button class="rectangle-button-style google">Sign in with Google+</button>
            <button class="rectangle-button-style facebook">Login with Facebook</button>
        </div>

    </div>
</template>
<style scoped>
.or-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.or-text {
    display: inline;
    padding: 20px;
}

hr {
    width: 50%;
}
.extra-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.rectangle-button-section {
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
}

.rectangle-button-style:hover {
    transform: scale(1.1);
}

.rectangle-button-style {
    font-size: 1.1rem;
    height: 40px;
    color: white;
    border: 0px;
    transition: .3s;
    cursor: pointer;
}

.google {
    background-color: #f30202;
    margin: 5px;
}

.facebook {
    background-color: rgb(0, 149, 229);
    margin: 5px;
}
</style>

<script>
export default {

}
</script>
