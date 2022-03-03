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
    color: white;
    height: 60rem;
    width: 90rem;
    margin: auto;
}

.login-page-left {
    background-image:
    linear-gradient( rgba(103, 27, 150, 0.5), 
    rgba(103, 27, 150, 0.5)), 
    url(../assets/login-page-background.jpg) ; 
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 20rem;
}

.login-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.login-page-right {
    background: linear-gradient(180deg, rgba(29,28,94,1) 14%, rgba(51,50,114,1) 41%, rgba(96,94,205,1) 100%);
    padding: 5rem;
}


.account-header, .login-header {
    margin: 4rem 0rem;
}

.confirm-button, .login-page-button {
    padding: .4rem 4rem;
    font-size: 15px;
    border-radius: 15px;
    background-color: transparent;
    color: white;
    border-style: solid;
    border-color: white;
    margin-top: 6rem;
}

</style>