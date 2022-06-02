<template>
    <div class="login-page">
        <div class="login-page-right">
            <h3 class="login-title">Create Account</h3>
            <div class="create-account">
                    <div class="create-account-container">
                        <label class="create-email-label"
                        for="create-email"><b>First Name</b></label>
                        <input class="create-email" type="text" placeholder="Enter First Name" name="create-username" v-model="firstName" required>
                        <label class="create-email-label"
                        for="create-email"><b>Last Name</b></label>
                        <input class="create-email" type="text" placeholder="Enter Last Name" name="create-username" v-model="lastName" required>
                        <label class="email-label" for="email"><b>Email</b></label>
                        <input class="email" type="email" placeholder="Enter Email" name="email" v-model="email" required>
                        <label class="create-password-label" for="create-password"><b>Password</b></label>
                        <input class="create-password" type="password" placeholder="Enter Password" name="create-password" v-model="password1" required> 
                        <label class="confirm-password-label" for="confirm-password"><b>Confirm Password</b></label>
                        <input class="confirm-password" type="password" placeholder="Enter Password" name="create-password" v-model="password2" required>
                        <button class="submit-button" @click="register()">Confirm</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {HTTP} from '../axiosConfig'

export default {
name: "Register",
    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            password1: null,
            password2: null
        }
    },
    methods: {
        register: async function() {
            if(this.password1 != this.password2) {
                console.log('passwords do not match')
                return
            }
            try {
                await HTTP.post('/register', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password1
            })
            } catch (error) {
                console.log(error)
            }
    },
    }
}
</script>

<style>

.login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100vw;
    height: 100%;
    padding-bottom: 8rem;
}

.login-title {
    font-size: 4rem;
    margin-bottom: 2rem;
}

.login-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}


.login-page-right {
    background-image:
    linear-gradient( rgba(103, 15, 139, 0.1), 
    rgba(103, 27, 150, 0.5)), 
    url(../assets/background-compress.jpg) ; 
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}


.account-header, .login-header {
    margin: 1rem 0rem;
}

.create-account {
    display: flex;
    align-content: center;
    justify-content: center;
}

.submit-button {
    padding: .4rem 1rem;
    width: 80%;
    font-size: 1.8rem;
    background-color: var(--topnav);
    color: white;
    border: 0.1rem solid white;
    margin-top: 3rem;
    border-radius: 0.2rem;
}

.submit-button:hover {
    transition: 0.3s;
    background-color: var(--loginhover)
}

.login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
    margin: 5px 0rem;
    font-size: 2rem;
    border-style: solid;
    border-radius: 0.5rem;
    border-color: white;
}

.login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
    margin: 5px 0rem;
    font-size: 2.5rem;
}




/* Add padding to containers */
.login-content-container, .create-account-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}


@media (min-width:320px)  {
    .login-page {
        flex-direction: column;
    }

    .login-page-right {
        height: 90%;
        width: 80%;
    }

    .login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
        font-size: 8rem;
        margin: 0;
    }

    .login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
        font-size: 2rem;
        margin: 0;
        padding: 0.1rem 3rem;
        padding-left: 0.1rem;
    }

    .login-title {
        margin: 0;
    }

    .create-account-container {
        padding: 0;
    }

    .submit-button {
        margin-top: 6rem;
    }
}
@media (min-width:481px)  { 
            .login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
        font-size: 4rem;
    }

        .login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
        font-size: 1.8rem;
        padding: 0.5rem 0rem;
        padding-left: 1rem;
        margin-bottom: 1rem;
    }

        .login-title {
        font-size: 2.5rem;
    }
 }
@media (min-width:641px)  {
        .login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
        font-size: 2rem;
    }

        .login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
        font-size: 1.5rem;
        padding: 0.5rem 0rem;
        padding-left: 1rem;
        margin-bottom: 1rem;
    }

    .login-title {
        font-size: 2rem;
    }

    .submit-button {
        margin-top: 6rem;
    }


 }
@media (min-width:961px)  { 

    .login-page-right {
        height: 90%;
        width: 80%;
    }

    .login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
        font-size: 3rem;
    }

    .login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
        font-size: 1.5rem;
        padding: 0.8rem 3rem;
        padding-left: 1rem;
    }

   .login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
        font-size: 2.5rem;
        margin: 5px 0px;
    }

    .login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
        font-size: 1.8rem;
        margin: 5px 0px;
    }

    .login-title {
        margin-bottom: 2rem;
        font-size: 3rem;
    }
}
@media (min-width:1025px) { }
@media (min-width:1281px) { 
 }


</style>