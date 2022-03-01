<template>
    <div class="login-page">
        <div class="login-page-left">
            <img class="background-image">   
            <div class="login-info">
                <h4 class="login-header">Login</h4>
                <h5 class="username">Username</h5>
                <h5 class="password">Password</h5>
                <button class="login-page-button">Login</button>
            </div>
        </div>  
        <div class="login-page-right">
            <div class="create-account">
                <h4 class="account-header">Create Your Account</h4>
                <h5 class="create-username">Username</h5>
                <h5 class="enter-email">Email</h5>
                <h5 class="create-password">Password</h5>
                <h5 class="confirm-password">Confirm Password</h5>
                <button class="confirm-button">Continue</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"Login",
methods: {}
}

</script>

<style>

.login-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.login-page-left {
    background-color:rgb(103, 27, 150, 0.6);
    background-image: url(../assets/login-page-background.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 20rem;
}

.login-page-right {
    background: rgb(29,28,94);
    background: linear-gradient(180deg, rgba(29,28,94,1) 14%, rgba(51,50,114,1) 41%, rgba(96,94,205,1) 100%);
}

</style>