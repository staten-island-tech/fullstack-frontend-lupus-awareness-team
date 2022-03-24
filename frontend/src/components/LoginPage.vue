<template>
    <div class="login-page">
        <div class="login-page-left">
            <img class="background-image">   
            <div class="login-info">
                    <div class="login-content-container">
                        <label class="login-email-label"
                        for="login-email"><b>Email</b></label>
                        <input class="login-email" type="text" placeholder="email" name="login-email" v-model="email" required>
                        <label class="login-password-label" for="login-password"><b>Password</b></label>
                        <input class="login-password" type="password" placeholder="password" name="login-password" v-model="password" required>
                        <button class="submit-button" @click="login()">Login</button>
                    </div>
            </div>
        </div>  
        <div class="login-page-right">
            <div class="create-account">
                <form action="action_page.php" method="post">
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
import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: 'Bearer {token}'
    }
})

export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    async created() {
        try {
            const res = await HTTP.get('/')
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    },
name:"Login",
methods: {
     login: async function() {
        try {
            await HTTP.post('/login', {
                email: this.email,
                password: this.password
            })

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
    justify-content: center;
    color: white;
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
    display: flex;
    justify-content: center;
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
    font-size: 15px;
    border-style: solid;
    border-radius: 7px;
    border-color: white;
    padding: 3px;
}

.login-email-label, .login-password-label, .create-email-label, .create-password-label, .confirm-password-label, .email-label {
    margin: 5px 0rem;
    font-size: 25px;
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

</style>