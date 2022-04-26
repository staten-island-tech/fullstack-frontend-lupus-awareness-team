<template>
    <div class="login-page">
        <div class="login-page-left">
            <img class="background-image">   
            <div class="login-info">
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
                        <button class="confirm-button" type="submit">Confirm</button>
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
}

.login-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.login-page-right {
    background: linear-gradient(180deg, rgba(29,28,94,1) 14%, rgba(51,50,114,1) 41%, rgba(96,94,205,1) 100%);
    width: 40%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
}


.account-header, .login-header {
    margin: 1rem 0rem;
}

.create-account {
    display: flex;
    align-content: center;
    justify-content: center;
}

.confirm-button, .submit-button {
    padding: .4rem 4rem;
    font-size: 15px;
    border-radius: 15px;
    background-color: transparent;
    color: white;
    border-style: solid;
    border-color: white;
    margin-top: 3rem;
}

.login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
    margin: 5px 0rem;
    font-size: 2rem;
    border-style: solid;
    border-radius: 7px;
    border-color: white;
    padding: 3px;
}

.login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
    margin: 5px 0rem;
    font-size: 2.5rem;
}


/* Set a style for all buttons */
button {
  background-color: transparent;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: solid;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Add padding to containers */
.login-content-container, .create-account-container{
  padding: 16px;
  display: flex;
  flex-direction: column;
}

@media (min-width:320px)  {
    .login-page {
        flex-direction: column;
    }

    .login-page-right {
        height: 45%;
        width: 100%;
    }

    .login-page-left {
        height: 45%;
        width: 100%;
    }

    .login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
    font-size: 100%;
}

.login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
    font-size: 3rem;
}
}
@media (min-width:481px)  { 
 }
@media (min-width:641px)  {

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
        font-size: 2rem;
    }

    .login-email, .login-password, .create-email, .create-password, .confirm-password, .email {
        font-size: 1.5rem;
        padding: 1rem 3rem;
        padding-left: 1rem;
}
}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
 }

</style>