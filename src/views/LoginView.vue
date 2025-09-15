<template>
    <div class="login-page">
      <div class="login-box">
        <h1>Login</h1>
        <div class="form">
          <input type="text" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <button type="submit" @click="login">Entrar</button>
        </div>
      </div>
      <div class="img-container">
        <img src="../assets/logo.png" alt="logo">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      login() {
        this.$router.push('/tasks')
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a, #000000);
    background-size: 400% 400%;
  }
  
  .login-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 2rem;
    width: 320px;
    text-align: center;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  }

  .login-box h1 {
    color: #fff;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  .form input {
    display: block;
    width: 100%;
    margin: 0.8rem 0;
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    outline: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 1rem;
  }
  
  .form input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .form button {
    margin-top: 1rem;
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #ff416c, #ff4b2b);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(255, 75, 43, 0.4);
  }
  .img-container{
    position: absolute;
    bottom: 0;
    right: 0;
  }

  img{
    width: 5rem;
  }
  </style>
  