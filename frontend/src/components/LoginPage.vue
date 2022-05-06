<template>
    <div class="login-page">
        <div class="login-page-left">
            <div class="login-info">
                    <h3 class="login-title">Login</h3>
                    <div class="login-content-container">
                        <label class="login-email-label"
                        for="login-email"><b>Email</b></label>
                        <input class="login-email" type="text" placeholder="Email" name="login-email" v-model="email" required>
                        <label class="login-password-label" for="login-password"><b>Password</b></label>
                        <input class="login-password" type="password" placeholder="Password" name="login-password" v-model="password" required>
                        <button class="submit-button" @click="login()">Login</button>
                    </div>
            </div>
        </div>  
        <div class="login-page-right">
            <h3 class="login-title">Create Account</h3>
            <div class="create-account">
                <form method="post">
                    <div class="create-account-container">
                        <label class="create-email-label"
                        for="create-email"><b>Email</b></label>
                        <input class="create-email" type="text" placeholder="Enter Username" name="create-username" required>
                        <label class="email-label" for="email"><b>Email</b></label>
                        <input class="email" type="email" placeholder="Enter Email" name="email" required>
                        <label class="create-password-label" for="create-password"><b>Password</b></label>
                        <input class="create-password" type="password" placeholder="Enter Password" name="create-password" required> 
                        <label class="confirm-password-label" for="confirm-password"><b>Confirm Password</b></label>
                        <input class="confirm-password" type="password" placeholder="Enter Password" name="create-password" required>
                        <button class="submit-button" type="submit">Confirm</button>
                    </div>
                </form>
                </div>
        </div>
    </div>
    
</template>

<script>


export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    // async created() {
    //     try {
    //         const res = await HTTP.get('/')
    //         console.log(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
name:"Login",
methods: {
     login: async function() {
        try {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
            // await HTTP.post('/login', {
            //     email: this.email,
            //     password: this.password
            // })
        } catch (error) {
            console.log(error)
        }
    } 
    
}
}

</script>

<style scoped>

.login-page {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 100%;
}

.login-page-left {
    background-image:
    linear-gradient( rgba(103, 27, 150, 0.5), 
    rgba(103, 27, 150, 0.5)), 
    url(../assets/background-pic.jpg) ; 
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 50%;
    height: 90%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
    url(../assets/background-pic.jpg) ; 
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 40%;
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
    padding: .4rem 2rem;
    font-size: 1.8rem;
    background-color: var(--topnav);
    color: white;
    border: solid 0.3rem white;
    margin-top: 3rem;
    border-radius: 0.2rem;
}

.submit-button:hover {
    background-color: transparent;
    transition: 0.3s;
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
}

@media (min-width:320px)  {
    .login-page {
        flex-direction: column;
    }

    .login-page-right {
        height: 45%;
        width: 80%;
    }

    .login-page-left {
        height: 45%;
        width: 80%;
    }

    .login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
        font-size: 6rem;
        margin: 0;
    }

    .login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
        font-size: 2.3rem;
        margin: 0;
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
        font-size: 3rem;
    }


 }
@media (min-width:961px)  { 
    .login-page {
        flex-direction: row;
    }

    .login-page-left {
        height: 90%;
        width: 45%;
    }

    .login-page-right {
        height: 90%;
        width: 45%;
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
        font-size: 2rem;
        margin: 5px 0px;
    }

    .login-title {
        margin-bottom: 2rem;
    }
}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
 }

</style>