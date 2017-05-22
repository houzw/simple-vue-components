<template>
    <div class="bg-wrapper">
        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'bg-bubble'
}
</script>

<style scoped lang="scss">
@media all {
    .bg-wrapper {
        background: #50a3a2;
        background: linear-gradient(to bottom right, rgba(70, 76, 91, 0.43) 0%, #0c6 100%);
        opacity: 0.8;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
    }
}

.bg-wrapper.form-success .container h1 {
    transform: translateY(85px);
}

.bg-bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    li {
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.15);
        bottom: -160px;
        animation: square 15s infinite;
        transition-timing-function: linear;
        &:nth-child(1) {
            left: 5%;
        }
        &:nth-child(2) {
            left: 15%;
            width: 80px;
            height: 80px;
            border-radius: 40px;
            animation-delay: 2s;
            animation-duration: 17s;
        }
        &:nth-child(3) {
            left: 25%;
            animation-delay: 4s;
        }
        &:nth-child(4) {
            left: 40%;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            animation-duration: 22s;
            background-color: rgba(255, 255, 255, 0.25);
        }
        &:nth-child(5) {
            left: 70%;
        }
        &:nth-child(6) {
            left: 80%;
            width: 120px;
            height: 120px;
            border-radius: 60px;
            animation-delay: 3s;
            background-color: rgba(255, 255, 255, 0.2);
        }
        &:nth-child(7) {
            left: 32%;
            width: 160px;
            height: 160px;
            border-radius: 80px;
            animation-delay: 7s;
        }
        &:nth-child(8) {
            left: 55%;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            animation-delay: 15s;
            animation-duration: 40s;
        }
        &:nth-child(9) {
            left: 25%;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            animation-delay: 2s;
            animation-duration: 30s;
            background-color: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(10) {
            left: 90%;
            width: 160px;
            height: 160px;
            border-radius: 80px;
            animation-delay: 11s;
        }
    }
}

@-webkit-keyframes square {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-700px) rotate(600deg);
    }
}

@keyframes square {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-700px) rotate(600deg);
    }
}
</style>
