<script>
</script>

<div class="menu-image" role="illustration">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>


<style>

.menu-image {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
}

.circle {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    position: absolute;
    background: #702323;
    mix-blend-mode: plus-lighter;
}

.circle:nth-child(1) {
    left: 20px;
    top: -15px;
    z-index: 5;
}
.circle:nth-child(2) {
    left: 10px;
    top: -40px;
    z-index: 4;
}
.circle:nth-child(3) {
    left: 25px;
    top: -55px;
    z-index: 3;
}
.circle:nth-child(4) {
    left: 40px;
    top: -70px;
    z-index: 4;
}

.circle:nth-child(5) {
    width: 90px;
    height: 90px;
    background: #5445FF;
    z-index: 1;
    mix-blend-mode: initial;
}
</style>